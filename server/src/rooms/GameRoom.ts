import { Room, Client } from "colyseus";
import { GameState, Player, Egg, Pet, Trap, ChasingChicken } from "./schema/GameState";
import {
  GAME_CONFIG,
  EGG_TIERS,
  PET_NAMES,
  TREADMILL_UPGRADES,
  BASE_UPGRADES,
  PET_SLOT_UPGRADES,
  EGG_SELL_PRICES,
} from "../config";

interface MoveInput {
  moveX: number;
  moveZ: number;
  rotationY: number;
}

export class GameRoom extends Room<GameState> {
  maxClients = GAME_CONFIG.MAX_BASE_SLOTS;
  private playerInputs: Map<string, MoveInput> = new Map();
  private baseSlots: (string | null)[] = new Array(GAME_CONFIG.MAX_BASE_SLOTS).fill(null);
  private spawnTimer: number = 0;
  private specialEggTimer: number = 124; // 2m 4s initial
  private countdownTickTimer: number = 0;
  private nextEggId: number = 1;
  private nextPetId: number = 1;
  private nextTrapId: number = 1;
  private nextChickenId: number = 1;

  onCreate(options: any) {
    this.setState(new GameState());

    this.onMessage("move", (client, data: MoveInput) => {
      if (typeof data.moveX === "number" && typeof data.moveZ === "number") {
        this.playerInputs.set(client.sessionId, {
          moveX: Math.max(-1, Math.min(1, data.moveX)),
          moveZ: Math.max(-1, Math.min(1, data.moveZ)),
          rotationY: typeof data.rotationY === "number" ? data.rotationY : 0,
        });
      }
    });

    // --- Phase 4B Mechanics Listeners ---
    this.onMessage("dropEgg", (client) => {
      const player = this.state.players.get(client.sessionId);
      if (player && player.carriedEggTier) {
        this.dropEggOnGround(player.x, player.z, player.carriedEggTier, client.sessionId);
        player.carriedEggTier = "";
        player.carriedEgg = null;
      }
    });

    this.onMessage("sellEgg", (client) => {
      const player = this.state.players.get(client.sessionId);
      if (!player || !player.carriedEggTier) return;

      const stallPos = GAME_CONFIG.MARKET_STALL_POS;
      const dist = Math.hypot(player.x - stallPos.x, player.z - stallPos.z);
      if (dist <= GAME_CONFIG.MARKET_STALL_RADIUS) {
        const tier = player.carriedEggTier;
        const price = EGG_SELL_PRICES[tier] || 50;
        player.money += price;
        player.carriedEggTier = "";
        player.carriedEgg = null;

        this.broadcast("serverAnnouncement", {
          text: `🏷️ ${player.name} sold a ${tier.toUpperCase()} egg for $${price.toLocaleString()}!`,
          rarity: tier,
        });
      }
    });

    this.onMessage("sellPet", (client, petId: string) => {
      const player = this.state.players.get(client.sessionId);
      if (!player) return;

      const stallPos = GAME_CONFIG.MARKET_STALL_POS;
      const dist = Math.hypot(player.x - stallPos.x, player.z - stallPos.z);
      if (dist <= GAME_CONFIG.MARKET_STALL_RADIUS) {
        const petIdx = player.pets.findIndex((p) => p && p.id === petId);
        if (petIdx !== -1) {
          const pet = player.pets[petIdx];
          if (!pet) return;
          const price = (EGG_SELL_PRICES[pet.rarity] || 50) * 1.5;
          player.money += price;
          player.pets.splice(petIdx, 1);

          this.broadcast("serverAnnouncement", {
            text: `🐾 ${player.name} sold pet ${pet.name} for $${price.toLocaleString()}!`,
            rarity: pet.rarity,
          });
        }
      }
    });

    this.onMessage("fusePets", (client, targetRarity: string) => {
      const player = this.state.players.get(client.sessionId);
      if (!player || player.baseIndex < 0) return;

      // Check distance to base Fuse Machine
      const basePos = GAME_CONFIG.BASE_POSITIONS[player.baseIndex];
      const fuseX = basePos.x + GAME_CONFIG.FUSE_MACHINE_OFFSET.x;
      const fuseZ = basePos.z + GAME_CONFIG.FUSE_MACHINE_OFFSET.z;
      const dist = Math.hypot(player.x - fuseX, player.z - fuseZ);

      if (dist <= GAME_CONFIG.FUSE_MACHINE_RADIUS) {
        const matchingPets = player.pets.filter((p) => p && p.rarity === targetRarity);
        if (matchingPets.length >= 3) {
          // Remove 3 matching pets
          let removedCount = 0;
          for (let i = player.pets.length - 1; i >= 0; i--) {
            const p = player.pets[i];
            if (p && p.rarity === targetRarity) {
              player.pets.splice(i, 1);
              removedCount++;
              if (removedCount >= 3) break;
            }
          }

          // Generate 1 higher rarity pet
          const rarityTiers = ["common", "rare", "epic", "secret", "eternal", "divine"];
          const nextRarityIdx = Math.min(rarityTiers.length - 1, rarityTiers.indexOf(targetRarity) + 1);
          const nextRarity = rarityTiers[nextRarityIdx];
          const fusedPet = this.generatePetForTier(nextRarity);

          player.pets.push(fusedPet);

          this.broadcast("serverAnnouncement", {
            text: `✨ ${player.name} fused 3 ${targetRarity.toUpperCase()} pets into a ${fusedPet.name} (${nextRarity.toUpperCase()})!`,
            rarity: nextRarity,
          });
        }
      }
    });

    this.onMessage("useBat", (client) => {
      const player = this.state.players.get(client.sessionId);
      if (!player || player.batCooldown > 0 || player.trappedTimer > 0) return;

      player.batCooldown = GAME_CONFIG.BAT_COOLDOWN_SEC;
      let hitTarget = false;

      this.state.players.forEach((target, targetId) => {
        if (targetId === client.sessionId) return;
        const dist = Math.hypot(player.x - target.x, player.z - target.z);
        if (dist <= GAME_CONFIG.BAT_RANGE && target.carriedEggTier) {
          hitTarget = true;
          this.dropEggOnGround(target.x, target.z, target.carriedEggTier, targetId);
          target.carriedEggTier = "";
          target.carriedEgg = null;

          this.broadcast("serverAnnouncement", {
            text: `💥 ${player.name} hit ${target.name} with a bat! Egg dropped!`,
            rarity: "epic",
          });
        }
      });
    });

    this.onMessage("placeTrap", (client) => {
      const player = this.state.players.get(client.sessionId);
      if (!player || player.trapCount <= 0 || player.trappedTimer > 0) return;

      player.trapCount--;
      const trap = new Trap();
      trap.id = `trap_${this.nextTrapId++}`;
      trap.ownerId = client.sessionId;
      trap.x = player.x;
      trap.y = 0;
      trap.z = player.z;

      this.state.placedTraps.set(trap.id, trap);
    });

    this.onMessage("buyTraps", (client) => {
      const player = this.state.players.get(client.sessionId);
      if (!player || player.trapCount >= GAME_CONFIG.MAX_TRAPS_PER_PLAYER) return;

      if (player.money >= GAME_CONFIG.TRAP_REFILL_COST) {
        player.money -= GAME_CONFIG.TRAP_REFILL_COST;
        player.trapCount = GAME_CONFIG.MAX_TRAPS_PER_PLAYER;
      }
    });

    // Shop Upgrade Message Listeners
    this.onMessage("buyTreadmill", (client) => {
      const player = this.state.players.get(client.sessionId);
      if (!player) return;

      const currentTier = player.treadmillTier || 1;
      const nextUpgrade = TREADMILL_UPGRADES.find((u) => u.tier === currentTier + 1);

      if (nextUpgrade && player.money >= nextUpgrade.cost) {
        player.money -= nextUpgrade.cost;
        player.treadmillTier = nextUpgrade.tier;
        console.log(`🛍️ [Server] Player ${player.name} upgraded Treadmill to Tier ${nextUpgrade.tier} (${nextUpgrade.name})`);
      }
    });

    this.onMessage("buyBaseUpgrade", (client) => {
      const player = this.state.players.get(client.sessionId);
      if (!player) return;

      const currentTier = player.baseTier || 1;
      const nextUpgrade = BASE_UPGRADES.find((u) => u.tier === currentTier + 1);

      if (nextUpgrade && player.money >= nextUpgrade.cost) {
        player.money -= nextUpgrade.cost;
        player.baseTier = nextUpgrade.tier;
        console.log(`🛍️ [Server] Player ${player.name} upgraded Base to Tier ${nextUpgrade.tier} (${nextUpgrade.name})`);
      }
    });

    this.onMessage("buyPetSlot", (client) => {
      const player = this.state.players.get(client.sessionId);
      if (!player) return;

      const currentSlots = player.maxPetSlots || 6;
      const nextUpgrade = PET_SLOT_UPGRADES.find((u) => u.multiplier > currentSlots);

      if (nextUpgrade && player.money >= nextUpgrade.cost) {
        player.money -= nextUpgrade.cost;
        player.maxPetSlots = nextUpgrade.multiplier;
        console.log(`🛍️ [Server] Player ${player.name} upgraded Pet Slots to ${nextUpgrade.multiplier}`);
      }
    });

    // Bloxity SDK Avatar Sync Listener
    this.onMessage("updateBloxityAvatar", (client, cosmetics: any) => {
      const player = this.state.players.get(client.sessionId);
      if (!player || typeof cosmetics !== "object" || cosmetics === null) return;

      const sanitizeId = (id: any): string => {
        if (typeof id !== "string") return "";
        const trimmed = id.trim();
        if (trimmed.length > 40) return "";
        if (!/^[A-Za-z0-9_-]*$/.test(trimmed)) return "";
        return trimmed;
      };

      player.skinId = sanitizeId(cosmetics.skinId);
      player.hatId = sanitizeId(cosmetics.hatId);
      player.hairId = sanitizeId(cosmetics.hairId);
      player.faceId = sanitizeId(cosmetics.faceId);
      player.shirtId = sanitizeId(cosmetics.shirtId);
      player.pantsId = sanitizeId(cosmetics.pantsId);

      console.log(`👤 [Server] Player ${player.name} updated validated Bloxity cosmetics (Skin: '${player.skinId}', Hat: '${player.hatId}', Hair: '${player.hairId}')`);
    });

    // Spawn initial wave of map eggs
    for (let i = 0; i < 4; i++) {
      this.spawnRandomMapEgg();
    }

    this.setSimulationInterval((deltaTime) => this.update(deltaTime), 1000 / 60);
    console.log("Egg Heist GameRoom running Phase 3 shop logic");
  }

  onJoin(client: Client, options: any) {
    console.log(`🎮 [Server] Client joining room: ${client.sessionId}`);

    let assignedSlot = -1;
    for (let i = 0; i < this.baseSlots.length; i++) {
      if (this.baseSlots[i] === null) {
        assignedSlot = i;
        this.baseSlots[i] = client.sessionId;
        break;
      }
    }

    const player = new Player();
    player.id = client.sessionId;
    player.name = options.name || `Player_${client.sessionId.slice(0, 4)}`;
    player.baseIndex = assignedSlot;
    player.speedStat = 1;
    player.money = 0;
    player.treadmillTier = 1;
    player.baseTier = 1;
    player.maxPetSlots = 6;
    player.onTreadmill = false;
    player.speed = GAME_CONFIG.BASE_SPEED;

    if (assignedSlot !== -1 && assignedSlot < GAME_CONFIG.BASE_POSITIONS.length) {
      const basePos = GAME_CONFIG.BASE_POSITIONS[assignedSlot];
      player.x = basePos.x + GAME_CONFIG.SPAWN_OFFSET.x;
      player.y = 0;
      player.z = basePos.z + GAME_CONFIG.SPAWN_OFFSET.z;
    } else {
      player.x = (Math.random() - 0.5) * 12;
      player.y = 0;
      player.z = (Math.random() - 0.5) * 12;
    }

    player.rotationY = 0;

    this.state.players.set(client.sessionId, player);
    this.playerInputs.set(client.sessionId, { moveX: 0, moveZ: 0, rotationY: 0 });
  }

  onLeave(client: Client, consented: boolean) {
    console.log(`Client left: ${client.sessionId}`);

    const player = this.state.players.get(client.sessionId);
    if (player) {
      if (player.carriedEggTier) {
        this.dropEggOnGround(player.x, player.z, player.carriedEggTier, client.sessionId);
      }

      if (player.baseIndex !== -1 && player.baseIndex < this.baseSlots.length) {
        this.baseSlots[player.baseIndex] = null;
      }
    }

    this.state.players.delete(client.sessionId);
    this.playerInputs.delete(client.sessionId);
  }

  onDispose() {
    console.log("GameRoom disposing");
  }

  private update(deltaTimeMs: number) {
    const dt = deltaTimeMs / 1000;

    // Day/Night Cycle (120 seconds full day/night loop)
    this.state.dayNightProgress = (this.state.dayNightProgress + dt / 120) % 1;

    // Special Egg Countdown Timer
    this.specialEggTimer -= dt;
    this.countdownTickTimer += dt;
    if (this.countdownTickTimer >= 1.0) {
      this.countdownTickTimer = 0;
      this.broadcast("specialEggCountdown", { timeRemaining: Math.max(0, Math.floor(this.specialEggTimer)) });
    }

    if (this.specialEggTimer <= 0) {
      this.specialEggTimer = 180;
      const rareTiers = ["secret", "eternal", "divine"];
      const chosenTier = rareTiers[Math.floor(Math.random() * rareTiers.length)];
      this.spawnRandomMapEgg(chosenTier);
    }

    // 1. Spawner
    this.spawnTimer += dt;
    if (
      this.spawnTimer >= GAME_CONFIG.SPAWN_INTERVAL_SEC &&
      this.state.mapEggs.size < GAME_CONFIG.MAX_MAP_EGGS
    ) {
      this.spawnTimer = 0;
      this.spawnRandomMapEgg();
    }

    // 2. Cooldowns
    this.state.mapEggs.forEach((egg) => {
      if (egg.dropCooldown > 0) {
        egg.dropCooldown = Math.max(0, egg.dropCooldown - dt);
      }
    });

    // 3. Players update
    this.state.players.forEach((player, sessionId) => {
      // Cooldowns and Timers
      if (player.batCooldown > 0) {
        player.batCooldown = Math.max(0, player.batCooldown - dt);
      }
      if (player.trappedTimer > 0) {
        player.trappedTimer = Math.max(0, player.trappedTimer - dt);
      }

      const input = this.playerInputs.get(sessionId);
      if (!input) return;

      // Disable movement if player is trapped
      if (player.trappedTimer > 0) {
        input.moveX = 0;
        input.moveZ = 0;
      }

      let effectiveSpeed = Math.min(
        GAME_CONFIG.MAX_SPEED_CAP,
        GAME_CONFIG.BASE_SPEED * (1 + player.speedStat * GAME_CONFIG.SPEED_SCALE_FACTOR)
      );

      if (player.carriedEggTier && EGG_TIERS[player.carriedEggTier]) {
        effectiveSpeed *= EGG_TIERS[player.carriedEggTier].weightMultiplier;
      }
      player.speed = effectiveSpeed;

      if (input.moveX !== 0 || input.moveZ !== 0) {
        const dx = input.moveX * player.speed * dt;
        const dz = input.moveZ * player.speed * dt;

        player.x = Math.max(-GAME_CONFIG.MAP_LIMIT, Math.min(GAME_CONFIG.MAP_LIMIT, player.x + dx));
        player.z = Math.max(-GAME_CONFIG.MAP_LIMIT, Math.min(GAME_CONFIG.MAP_LIMIT, player.z + dz));
      }

      player.rotationY = input.rotationY;

      // Treadmill Speed Growth (Treadmill Tier multiplier!)
      if (player.baseIndex >= 0 && player.baseIndex < GAME_CONFIG.BASE_POSITIONS.length) {
        const basePos = GAME_CONFIG.BASE_POSITIONS[player.baseIndex];
        const treadmillX = basePos.x + GAME_CONFIG.TREADMILL_OFFSET.x;
        const treadmillZ = basePos.z + GAME_CONFIG.TREADMILL_OFFSET.z;
        const halfW = GAME_CONFIG.TREADMILL_SIZE.width / 2;
        const halfL = GAME_CONFIG.TREADMILL_SIZE.length / 2;

        const onOwnTreadmill =
          Math.abs(player.x - treadmillX) <= halfW &&
          Math.abs(player.z - treadmillZ) <= halfL;

        player.onTreadmill = onOwnTreadmill;

        if (onOwnTreadmill) {
          const tmUpgrade = TREADMILL_UPGRADES[Math.min(TREADMILL_UPGRADES.length - 1, (player.treadmillTier || 1) - 1)];
          const tmMult = tmUpgrade ? tmUpgrade.multiplier : 1.0;
          const angelMult = player.equippedAngelicTreadmill ? GAME_CONFIG.ANGELIC_SPEED_GROWTH_MULT : 1.0;

          player.speedStat += GAME_CONFIG.SPEED_GROWTH_PER_SEC * tmMult * angelMult * dt;
        }
      } else {
        player.onTreadmill = false;
      }

      // 4. Pickup
      if (!player.carriedEggTier && player.trappedTimer <= 0) {
        this.state.mapEggs.forEach((egg, eggId) => {
          if (egg.dropCooldown > 0 && egg.lastDroppedBy === sessionId) return;

          const dist = Math.hypot(player.x - egg.x, player.z - egg.z);
          if (dist <= GAME_CONFIG.PICKUP_RADIUS) {
            player.carriedEggTier = egg.tier;
            const newEgg = new Egg();
            newEgg.id = egg.id;
            newEgg.tier = egg.tier;
            newEgg.carriedBy = sessionId;
            player.carriedEgg = newEgg;

            // Wake chicken if egg has chicken!
            if (egg.hasChicken) {
              const chicken = new ChasingChicken();
              chicken.id = `chicken_${this.nextChickenId++}`;
              chicken.targetPlayerId = sessionId;
              chicken.x = egg.x;
              chicken.y = 0;
              chicken.z = egg.z;
              chicken.lifetime = GAME_CONFIG.CHICKEN_CHASE_DURATION;
              this.state.chasingChickens.set(chicken.id, chicken);

              this.broadcast("serverAnnouncement", {
                text: `🐓 ${player.name} woke up a sleeping chicken! It's chasing them!`,
                rarity: "rare",
              });
            }

            this.state.mapEggs.delete(eggId);
          }
        });
      }

      // 5. Deposit into Base Incubator (Base Tier determines incubator capacity!)
      if (player.carriedEggTier && player.baseIndex >= 0) {
        const basePos = GAME_CONFIG.BASE_POSITIONS[player.baseIndex];
        const incX = basePos.x + GAME_CONFIG.INCUBATOR_OFFSET.x;
        const incZ = basePos.z + GAME_CONFIG.INCUBATOR_OFFSET.z;
        const halfW = GAME_CONFIG.INCUBATOR_SIZE.width / 2;
        const halfL = GAME_CONFIG.INCUBATOR_SIZE.length / 2;

        const insideOwnIncubator =
          Math.abs(player.x - incX) <= halfW &&
          Math.abs(player.z - incZ) <= halfL;

        const baseUpgrade = BASE_UPGRADES[Math.min(BASE_UPGRADES.length - 1, (player.baseTier || 1) - 1)];
        const maxIncCapacity = baseUpgrade ? baseUpgrade.multiplier : GAME_CONFIG.MAX_INCUBATOR_EGGS;

        if (insideOwnIncubator && player.incubatorEggs.length < maxIncCapacity) {
          const depositedEgg = new Egg();
          depositedEgg.id = `inc_egg_${this.nextEggId++}`;
          depositedEgg.tier = player.carriedEggTier;
          depositedEgg.baseIndex = player.baseIndex;
          depositedEgg.hatchTimeRemaining = EGG_TIERS[player.carriedEggTier].hatchTimeSec;

          player.incubatorEggs.push(depositedEgg);

          player.carriedEggTier = "";
          player.carriedEgg = null;
        }
      }

      // 6. Steal Egg from Opponent Incubator
      if (!player.carriedEggTier) {
        GAME_CONFIG.BASE_POSITIONS.forEach((basePos, bIdx) => {
          if (bIdx === player.baseIndex) return;

          const incX = basePos.x + GAME_CONFIG.INCUBATOR_OFFSET.x;
          const incZ = basePos.z + GAME_CONFIG.INCUBATOR_OFFSET.z;
          const halfW = GAME_CONFIG.INCUBATOR_SIZE.width / 2;
          const halfL = GAME_CONFIG.INCUBATOR_SIZE.length / 2;

          const insideOpponentIncubator =
            Math.abs(player.x - incX) <= halfW &&
            Math.abs(player.z - incZ) <= halfL;

          if (insideOpponentIncubator) {
            this.state.players.forEach((targetPlayer) => {
              if (targetPlayer.baseIndex === bIdx && targetPlayer.incubatorEggs.length > 0) {
                const stolenEgg = targetPlayer.incubatorEggs.pop();
                if (stolenEgg) {
                  player.carriedEggTier = stolenEgg.tier;
                  const newEgg = new Egg();
                  newEgg.id = stolenEgg.id;
                  newEgg.tier = stolenEgg.tier;
                  newEgg.carriedBy = sessionId;
                  player.carriedEgg = newEgg;
                }
              }
            });
          }
        });
      }

      // 7. Hatching
      for (let i = player.incubatorEggs.length - 1; i >= 0; i--) {
        const egg = player.incubatorEggs[i];
        if (!egg) continue;

        egg.hatchTimeRemaining -= dt;

        if (egg.hatchTimeRemaining <= 0) {
          player.incubatorEggs.splice(i, 1);

          const pet = this.generatePetForTier(egg.tier);
          const maxPetCap = player.maxPetSlots || GAME_CONFIG.MAX_PET_SLOTS;

          if (player.pets.length < maxPetCap) {
            player.pets.push(pet);
          }

          let rewardedName = "";
          let rewardedRarity = pet.rarity;

          if (Math.random() < GAME_CONFIG.DIVINE_TRAIL_CHANCE) {
            player.hasDivineTrail = true;
            player.equippedDivineTrail = true;
            rewardedName = "Divine Rainbow Trail";
            rewardedRarity = "Divine";
          } else if (Math.random() < GAME_CONFIG.ANGELIC_TREADMILL_CHANCE) {
            player.hasAngelicTreadmill = true;
            player.equippedAngelicTreadmill = true;
            rewardedName = "Angelic Treadmill";
            rewardedRarity = "Divine";
          } else if ((["secret", "eternal", "divine"] as string[]).includes(egg.tier)) {
            rewardedName = `${pet.name} (${pet.mutation !== "none" ? pet.mutation : pet.size})`;
          }

          if (rewardedName) {
            player.lastHatchedReward = JSON.stringify({
              name: rewardedName,
              rarity: rewardedRarity,
              timestamp: Date.now(),
            });
          }
        }
      }

      // 8. Pet Income
      let totalPetIncome = 0;
      player.pets.forEach((pet) => {
        totalPetIncome += pet.moneyPerSec;
      });
      player.money += totalPetIncome * dt;
    });

    // 9. Player Collision Steal
    const playerEntries = Array.from(this.state.players.entries());
    for (let i = 0; i < playerEntries.length; i++) {
      for (let j = i + 1; j < playerEntries.length; j++) {
        const [idA, playerA] = playerEntries[i];
        const [idB, playerB] = playerEntries[j];

        const dist = Math.hypot(playerA.x - playerB.x, playerA.z - playerB.z);
        if (dist <= GAME_CONFIG.STEAL_COLLISION_RADIUS) {
          if (playerA.carriedEggTier) {
            this.dropEggOnGround(playerA.x, playerA.z, playerA.carriedEggTier, idA);
            playerA.carriedEggTier = "";
            playerA.carriedEgg = null;
          }
          if (playerB.carriedEggTier) {
            this.dropEggOnGround(playerB.x, playerB.z, playerB.carriedEggTier, idB);
            playerB.carriedEggTier = "";
            playerB.carriedEgg = null;
          }
        }
      }
    }

    // 10. Chasing Chickens Pursuit & Pecking
    this.state.chasingChickens.forEach((chicken, chickenId) => {
      chicken.lifetime -= dt;
      const target = this.state.players.get(chicken.targetPlayerId);
      if (target && chicken.lifetime > 0) {
        const dx = target.x - chicken.x;
        const dz = target.z - chicken.z;
        const dist = Math.hypot(dx, dz);
        if (dist > 0.1) {
          chicken.x += (dx / dist) * GAME_CONFIG.CHICKEN_CHASE_SPEED * dt;
          chicken.z += (dz / dist) * GAME_CONFIG.CHICKEN_CHASE_SPEED * dt;
        }

        if (dist <= 1.2 && target.carriedEggTier) {
          this.dropEggOnGround(target.x, target.z, target.carriedEggTier, target.id);
          target.carriedEggTier = "";
          target.carriedEgg = null;
          this.broadcast("serverAnnouncement", {
            text: `🐓 Angry chicken pecked ${target.name}! Egg dropped!`,
            rarity: "rare",
          });
          this.state.chasingChickens.delete(chickenId);
        }
      } else {
        this.state.chasingChickens.delete(chickenId);
      }
    });

    // 11. Trap Triggering (7s Stun)
    this.state.placedTraps.forEach((trap, trapId) => {
      this.state.players.forEach((player, sessionId) => {
        if (sessionId === trap.ownerId) return;
        const dist = Math.hypot(player.x - trap.x, player.z - trap.z);
        if (dist <= GAME_CONFIG.TRAP_TRIGGER_RADIUS && player.trappedTimer <= 0) {
          player.trappedTimer = GAME_CONFIG.TRAP_STUN_DURATION_SEC;
          this.state.placedTraps.delete(trapId);
          this.broadcast("serverAnnouncement", {
            text: `🚨 ${player.name} stepped on a trap! TRAPPED for 7s!`,
            rarity: "epic",
          });
        }
      });
    });
  }

  private generatePetForTier(tier: string): Pet {
    const pet = new Pet();
    pet.id = `pet_${this.nextPetId++}`;
    pet.rarity = tier;

    const names = PET_NAMES[tier] || PET_NAMES.common;
    pet.name = names[Math.floor(Math.random() * names.length)];

    const sRand = Math.random();
    let sizeMult = 1.0;
    if (sRand < 0.20) {
      pet.size = "small";
      sizeMult = 0.8;
    } else if (sRand < 0.90) {
      pet.size = "normal";
      sizeMult = 1.0;
    } else {
      pet.size = "giant";
      sizeMult = 1.8;
    }

    const mRand = Math.random();
    let mutMult = 1.0;
    if (mRand < 0.75) {
      pet.mutation = "none";
      mutMult = 1.0;
    } else if (mRand < 0.90) {
      pet.mutation = "golden";
      mutMult = 2.0;
    } else if (mRand < 0.98) {
      pet.mutation = "rainbow";
      mutMult = 4.0;
    } else {
      pet.mutation = "shiny";
      mutMult = 8.0;
    }

    const tierMult = EGG_TIERS[tier] ? EGG_TIERS[tier].moneyMultiplier : 1.0;
    pet.moneyPerSec = 5.0 * tierMult * sizeMult * mutMult;

    return pet;
  }

  private spawnRandomMapEgg(forcedTier?: string) {
    const tier = forcedTier || this.rollRandomEggTier();
    const egg = new Egg();
    egg.id = `map_egg_${this.nextEggId++}`;
    egg.tier = tier;

    const angle = Math.random() * Math.PI * 2;
    const r = 3 + Math.random() * (GAME_CONFIG.SPAWN_RADIUS - 3);
    egg.x = Math.cos(angle) * r;
    egg.y = 0;
    egg.z = Math.sin(angle) * r;
    egg.hasChicken = Math.random() < 0.35;

    this.state.mapEggs.set(egg.id, egg);

    if (["secret", "eternal", "divine"].includes(tier)) {
      const tierConfig = EGG_TIERS[tier];
      const tierName = tierConfig ? tierConfig.name : tier.toUpperCase();
      this.broadcast("serverAnnouncement", {
        text: `✨ A rare ${tierName} Egg spawned in the world!`,
        rarity: tier,
      });
    }
  }

  private dropEggOnGround(x: number, z: number, tier: string, dropperId: string) {
    const egg = new Egg();
    egg.id = `dropped_egg_${this.nextEggId++}`;
    egg.tier = tier;
    egg.x = x;
    egg.y = 0;
    egg.z = z;
    egg.dropCooldown = GAME_CONFIG.DROP_COOLDOWN_SEC;
    egg.lastDroppedBy = dropperId;

    this.state.mapEggs.set(egg.id, egg);
  }

  private rollRandomEggTier(): string {
    const totalWeight = Object.values(EGG_TIERS).reduce((acc, t) => acc + t.spawnWeight, 0);
    let rand = Math.random() * totalWeight;

    for (const tierObj of Object.values(EGG_TIERS)) {
      if (rand < tierObj.spawnWeight) {
        return tierObj.id;
      }
      rand -= tierObj.spawnWeight;
    }
    return "common";
  }
}
