import { Room, Client } from "colyseus";
import { GameState, Player, Egg, Pet, Trap, ChasingChicken, DroppedCoin } from "./schema/GameState";
import {
  GAME_CONFIG,
  EGG_TIERS,
  PET_NAMES,
  TREADMILL_UPGRADES,
  BASE_UPGRADES,
  PET_SLOT_UPGRADES,
  EGG_SELL_PRICES,
  PET_SELL_BASE_PRICES,
  PET_SIZE_MULTIPLIERS,
  PET_MUTATION_MULTIPLIERS,
  PET_WEIGHT_MULTIPLIERS,
  GUARDED_CHANCE_BY_TIER,
  GUARD_ANIMAL_TYPES,
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
  private persistentFreezes: Map<string, { freezeEndTime: number; redAlerts: number }> = new Map();

  private spawnTimer: number = 0;
  private specialEggTimer: number = 124;
  private countdownTickTimer: number = 0;
  private nextEggId: number = 1;
  private nextPetId: number = 1;
  private nextTrapId: number = 1;
  private nextChickenId: number = 1;
  private nextCoinId: number = 1;
  private activePetSales = new Set<string>();

  onCreate(options: any) {
    this.setState(new GameState());

    // 1. Movement Message Listener
    this.onMessage("move", (client, data: MoveInput) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0) return;

        if (typeof data.moveX === "number" && typeof data.moveZ === "number") {
          this.playerInputs.set(client.sessionId, {
            moveX: Math.max(-1, Math.min(1, data.moveX)),
            moveZ: Math.max(-1, Math.min(1, data.moveZ)),
            rotationY: typeof data.rotationY === "number" ? data.rotationY : 0,
          });
        }
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'move' handler for ${client.sessionId}:`, err);
      }
    });

    // 2. Primary Unified Interaction Listener (E Key)
    this.onMessage("interactKey", (client) => {
      try {
        this.handlePlayerInteraction(client);
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'interactKey' handler for ${client.sessionId}:`, err);
      }
    });

    // 3. Drop Egg / Pet Listener (G Key / Drop Action)
    this.onMessage("dropEgg", (client) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0) return;

        console.log(`🔍 [Server dropEgg] ${player.name} sent dropEgg. pos=(${player.x.toFixed(1)}, ${player.z.toFixed(1)}), baseIndex=${player.baseIndex}, carriedEggTier='${player.carriedEggTier}'`);

        if (player.carriedEggTier) {
          // Check if standing inside ANY base incubator zone
          for (let b = 0; b < GAME_CONFIG.BASE_POSITIONS.length; b++) {
            const basePos = GAME_CONFIG.BASE_POSITIONS[b];
            const incX = basePos.x + GAME_CONFIG.INCUBATOR_OFFSET.x;
            const incZ = basePos.z + GAME_CONFIG.INCUBATOR_OFFSET.z;
            const distToInc = Math.hypot(player.x - incX, player.z - incZ);

            if (distToInc <= 3.5) {
              // Ownership check: must be player's own base incubator!
              if (b !== player.baseIndex) {
                console.log(`🚫 [Server Incubator REJECT] ${player.name} tried to place egg into Base ${b}'s incubator! (Owned by player index ${player.baseIndex})`);
                const targetClient = this.clients.find((c) => c.sessionId === client.sessionId);
                if (targetClient) {
                  targetClient.send("serverAnnouncement", {
                    text: `⛔ You can only place eggs in your OWN base incubator!`,
                    rarity: "common",
                  });
                }
                return;
              }

              // Capacity check
              const maxCap = BASE_UPGRADES[Math.min(BASE_UPGRADES.length - 1, (player.baseTier || 1) - 1)]?.multiplier || 3;
              if (player.incubatorEggs.length >= maxCap) {
                console.log(`⚠️ [Server Incubator REJECT] ${player.name}'s incubator is full (${player.incubatorEggs.length}/${maxCap})`);
                const targetClient = this.clients.find((c) => c.sessionId === client.sessionId);
                if (targetClient) {
                  targetClient.send("serverAnnouncement", {
                    text: `⚠️ Your incubator is full! (${player.incubatorEggs.length}/${maxCap})`,
                    rarity: "common",
                  });
                }
                return;
              }

              // Place egg into incubator
              const tier = player.carriedEggTier;
              const incEgg = new Egg();
              incEgg.id = `inc_egg_${this.nextEggId++}`;
              incEgg.tier = tier;
              const tierConfig = EGG_TIERS[tier] || EGG_TIERS.common;
              incEgg.hatchTimeRemaining = tierConfig.hatchTimeSec;
              player.incubatorEggs.push(incEgg);

              player.carriedEggTier = "";
              player.carriedEgg = null;

              console.log(`🐣 [Server Incubator SUCCESS] ${player.name} placed ${tier} egg into incubator! Hatching in ${incEgg.hatchTimeRemaining}s. Slot count: ${player.incubatorEggs.length}/${maxCap}`);
              this.broadcast("serverAnnouncement", {
                text: `🐣 ${player.name} placed a ${tierConfig.name} egg into Incubator! Hatching in ${incEgg.hatchTimeRemaining}s!`,
                rarity: tier,
              });
              return;
            }
          }

          // Outside incubator zone: plain drop on ground
          console.log(`🥚 [Server Ground Drop] ${player.name} dropped carried egg (${player.carriedEggTier}) on ground`);
          this.dropEggOnGround(player.x, player.z, player.carriedEggTier, client.sessionId);
          player.carriedEggTier = "";
          player.carriedEgg = null;
        } else if (player.carriedPet) {
          const pet = player.carriedPet;
          pet.x = player.x;
          pet.y = 0;
          pet.z = player.z;
          pet.carriedBy = "";
          pet.isGroundPet = true;
          pet.baseIndex = player.baseIndex;
          player.groundPets.push(pet);
          player.carriedPet = null;
          console.log(`🐾 [Server] ${player.name} dropped carried pet ${pet.name}`);
        }
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'dropEgg' handler for ${client.sessionId}:`, err);
      }
    });

    // 4. Pickup Pet Explicit Listener
    this.onMessage("pickupPet", (client, petId?: string) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0) return;
        this.handlePlayerInteraction(client, petId);
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'pickupPet' handler:`, err);
      }
    });

    // 5. Place Pet At Base Listener (F Key)
    this.onMessage("placePetAtBase", (client) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0 || !player.carriedPet || player.baseIndex < 0) return;

        const basePos = GAME_CONFIG.BASE_POSITIONS[player.baseIndex];
        const distToBase = Math.hypot(player.x - basePos.x, player.z - basePos.z);
        const maxSlots = player.maxPetSlots || GAME_CONFIG.MAX_PET_SLOTS;

        if (distToBase <= 8.0 && player.pets.length < maxSlots) {
          const pet = player.carriedPet;
          pet.isGroundPet = false;
          pet.carriedBy = "";
          player.pets.push(pet);
          player.carriedPet = null;
          console.log(`🏠 [Server] ${player.name} placed pet ${pet.name} into base slot (income active)`);
        }
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'placePetAtBase' handler:`, err);
      }
    });

    // 6. Sell Egg Listener
    this.onMessage("sellEgg", (client) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0 || !player.carriedEggTier) return;
        this.handlePlayerInteraction(client);
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'sellEgg' handler:`, err);
      }
    });

    // 7. Sell Pet / Shop Storage Handlers
    this.onMessage("sellCarriedPet", (client) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0 || player.freezeEndTime > Date.now()) return;
        if (!player.carriedPet) return;

        const now = Date.now();
        if (now - (player.lastInteractTime || 0) < GAME_CONFIG.INTERACT_COOLDOWN_MS) return;
        player.lastInteractTime = now;

        const stallPos = GAME_CONFIG.MARKET_STALL_POS;
        const distToStall = Math.hypot(player.x - stallPos.x, player.z - stallPos.z);
        if (distToStall > GAME_CONFIG.MARKET_STALL_RADIUS) {
          console.log(`⚠️ [Server Sell Carried Pet] Rejected: ${player.name} not at shop stall (${distToStall.toFixed(1)}m > ${GAME_CONFIG.MARKET_STALL_RADIUS}m).`);
          return;
        }

        const pet = player.carriedPet;
        const basePrice = PET_SELL_BASE_PRICES[pet.rarity] || 100;
        const sizeMult = PET_SIZE_MULTIPLIERS[pet.size] || 1.0;
        const mutMult = PET_MUTATION_MULTIPLIERS[pet.mutation] || 1.0;
        const finalPrice = Math.floor(basePrice * sizeMult * mutMult);

        player.money += finalPrice;
        player.carriedPet = null;
        pet.carriedBy = "";
        pet.isGroundPet = false;

        client.send("petSoldSuccess", {
          petName: pet.name,
          rarity: pet.rarity,
          amount: finalPrice,
        });

        console.log(`💰 [Server Sell Carried Pet SUCCESS] ${player.name} sold carried ${pet.name} (${pet.rarity}) for $${finalPrice}!`);

        if (finalPrice >= GAME_CONFIG.BIG_SALE_THRESHOLD || ["rare", "epic", "secret", "eternal", "divine"].includes(pet.rarity)) {
          this.broadcast("serverAnnouncement", {
            text: `💰 BIG SALE! ${player.name} sold a ${pet.rarity.toUpperCase()} ${pet.name} for $${finalPrice.toLocaleString()}!`,
            rarity: pet.rarity,
          });
        }
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'sellCarriedPet' handler:`, err);
      }
    });

    this.onMessage("debugForceGroundPet", (client) => {
      if (process.env.NODE_ENV === "test") {
        const player = this.state.players.get(client.sessionId);
        if (!player) return;
        const newPet = new Pet();
        newPet.id = `pet_test_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
        newPet.name = "Test Dog";
        newPet.rarity = "rare";
        newPet.size = "normal";
        newPet.mutation = "none";
        newPet.moneyPerSec = 10;
        newPet.isGroundPet = true;
        newPet.x = player.x;
        newPet.z = player.z;
        player.groundPets.push(newPet);
        console.log(`🧪 [TEST DEBUG] Forced ground pet ${newPet.id} for ${player.name} at (${player.x.toFixed(1)}, ${player.z.toFixed(1)})`);
      }
    });

    this.onMessage("debugTeleport", (client, data: { x: number; z: number }) => {
      if (process.env.NODE_ENV === "test") {
        const player = this.state.players.get(client.sessionId);
        if (player) {
          player.x = data.x;
          player.z = data.z;
          console.log(`🧪 [TEST DEBUG] Teleported ${player.name} to (${data.x}, ${data.z})`);
        }
      }
    });

    this.onMessage("storePetInShop", (client) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0 || player.freezeEndTime > Date.now()) return;
        if (!player.carriedPet) return;

        const stallPos = GAME_CONFIG.MARKET_STALL_POS;
        const distToStall = Math.hypot(player.x - stallPos.x, player.z - stallPos.z);
        if (distToStall > GAME_CONFIG.MARKET_STALL_RADIUS) {
          console.log(`⚠️ [Server Shop Storage] Rejected: ${player.name} not at shop stall zone (${distToStall.toFixed(1)}m > ${GAME_CONFIG.MARKET_STALL_RADIUS}m).`);
          return;
        }

        const pet = player.carriedPet;
        player.carriedPet = null;
        pet.carriedBy = "";
        pet.isGroundPet = false;
        player.shopPets.push(pet);

        this.broadcast("serverAnnouncement", {
          text: `🛍️ ${player.name} stored ${pet.name} (${pet.rarity.toUpperCase()}) into Shop Storage!`,
          rarity: pet.rarity,
        });
        console.log(`🛍️ [Server Shop Storage] ${player.name} stored ${pet.name} into Shop Storage. (Total stored: ${player.shopPets.length})`);
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'storePetInShop' handler:`, err);
      }
    });

    this.onMessage("sellShopPet", (client, data: { petId: string }) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0 || player.freezeEndTime > Date.now()) return;
        if (!data || !data.petId) return;

        const stallPos = GAME_CONFIG.MARKET_STALL_POS;
        const distToStall = Math.hypot(player.x - stallPos.x, player.z - stallPos.z);
        if (distToStall > GAME_CONFIG.MARKET_STALL_RADIUS) {
          console.log(`⚠️ [Server Sell Pet] Rejected: ${player.name} not at shop stall.`);
          return;
        }

        // Per-pet double-click lock
        if (this.activePetSales.has(data.petId)) {
          console.log(`🔒 [Server Sell Pet] Double-click lock active for pet ${data.petId}`);
          return;
        }

        const petIndex = player.shopPets.findIndex((p) => p.id === data.petId);
        if (petIndex < 0) {
          console.log(`⚠️ [Server Sell Pet] Pet ${data.petId} not found in player's shop storage.`);
          return;
        }

        this.activePetSales.add(data.petId);

        const pet = player.shopPets[petIndex];
        if (!pet) {
          this.activePetSales.delete(data.petId);
          return;
        }

        const basePrice = PET_SELL_BASE_PRICES[pet.rarity] || 100;
        const sizeMult = PET_SIZE_MULTIPLIERS[pet.size] || 1.0;
        const mutMult = PET_MUTATION_MULTIPLIERS[pet.mutation] || 1.0;
        const finalPrice = Math.floor(basePrice * sizeMult * mutMult);

        player.money += finalPrice;
        player.shopPets.splice(petIndex, 1);

        this.activePetSales.delete(data.petId);

        client.send("petSoldSuccess", {
          petName: pet.name,
          rarity: pet.rarity,
          amount: finalPrice,
        });

        console.log(`💰 [Server Pet Sale SUCCESS] ${player.name} sold ${pet.name} (${pet.rarity}) for $${finalPrice}!`);

        if (finalPrice >= GAME_CONFIG.BIG_SALE_THRESHOLD || ["rare", "epic", "secret", "eternal", "divine"].includes(pet.rarity)) {
          this.broadcast("serverAnnouncement", {
            text: `💰 BIG SALE! ${player.name} sold a ${pet.rarity.toUpperCase()} ${pet.name} for $${finalPrice.toLocaleString()}!`,
            rarity: pet.rarity,
          });
        }
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'sellShopPet' handler:`, err);
        if (data?.petId) this.activePetSales.delete(data.petId);
      }
    });

    this.onMessage("keepShopPet", (client, data: { petId: string }) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0 || player.freezeEndTime > Date.now()) return;
        if (!data || !data.petId) return;

        if (player.pets.length >= player.maxPetSlots) {
          client.send("serverAnnouncement", {
            text: `⛔ Base pet slots are full! (${player.pets.length}/${player.maxPetSlots})`,
            rarity: "common",
          });
          return;
        }

        const petIndex = player.shopPets.findIndex((p) => p.id === data.petId);
        if (petIndex < 0) return;

        const pet = player.shopPets[petIndex];
        if (!pet) return;

        player.shopPets.splice(petIndex, 1);

        pet.isGroundPet = false;
        pet.carriedBy = "";
        player.pets.push(pet);

        this.broadcast("serverAnnouncement", {
          text: `🏠 ${player.name} moved ${pet.name} (${pet.rarity.toUpperCase()}) to Base Slot for passive income!`,
          rarity: pet.rarity,
        });
        console.log(`🏠 [Server Keep Pet] ${player.name} moved ${pet.name} to active base slot.`);
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'keepShopPet' handler:`, err);
      }
    });

    // 8. Fuse Pets Listener
    this.onMessage("fusePets", (client, targetRarity: string) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0 || player.baseIndex < 0) return;

        const basePos = GAME_CONFIG.BASE_POSITIONS[player.baseIndex];
        const fuseX = basePos.x + GAME_CONFIG.FUSE_MACHINE_OFFSET.x;
        const fuseZ = basePos.z + GAME_CONFIG.FUSE_MACHINE_OFFSET.z;
        const dist = Math.hypot(player.x - fuseX, player.z - fuseZ);

        if (dist <= GAME_CONFIG.FUSE_MACHINE_RADIUS) {
          const matchingPets = player.pets.filter((p) => p && p.rarity === targetRarity);
          if (matchingPets.length >= 3) {
            let removedCount = 0;
            for (let i = player.pets.length - 1; i >= 0; i--) {
              const p = player.pets[i];
              if (p && p.rarity === targetRarity) {
                player.pets.splice(i, 1);
                removedCount++;
                if (removedCount >= 3) break;
              }
            }

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
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'fusePets' handler:`, err);
      }
    });

    // 9. Use Bat Listener
    this.onMessage("useBat", (client) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0 || player.batCooldown > 0 || player.trappedTimer > 0 || player.caughtStunTimer > 0) return;

        player.batCooldown = GAME_CONFIG.BAT_COOLDOWN_SEC;

        this.state.players.forEach((target, targetId) => {
          if (targetId === client.sessionId) return;
          const dist = Math.hypot(player.x - target.x, player.z - target.z);
          if (dist <= GAME_CONFIG.BAT_RANGE) {
            if (target.carriedEggTier) {
              this.dropEggOnGround(target.x, target.z, target.carriedEggTier, targetId);
              target.carriedEggTier = "";
              target.carriedEgg = null;
              this.broadcast("serverAnnouncement", {
                text: `💥 ${player.name} hit ${target.name} with a bat! Egg dropped!`,
                rarity: "epic",
              });
            } else if (target.carriedPet) {
              const pet = target.carriedPet;
              pet.x = target.x;
              pet.z = target.z;
              pet.isGroundPet = true;
              pet.carriedBy = "";
              target.groundPets.push(pet);
              target.carriedPet = null;
              this.broadcast("serverAnnouncement", {
                text: `💥 ${player.name} hit ${target.name} with a bat! Pet dropped!`,
                rarity: "epic",
              });
            }
          }
        });
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'useBat' handler:`, err);
      }
    });

    // 11. Debug Test Handlers (NODE_ENV=test)
    this.onMessage("debug_spawn_guarded_egg", (client) => {
      try {
        if (process.env.NODE_ENV !== "test") return;
        const player = this.state.players.get(client.sessionId);
        if (!player) return;

        const egg = new Egg();
        egg.id = `debug_egg_${this.nextEggId++}`;
        egg.x = player.x + 0.5;
        egg.z = player.z + 0.5;
        egg.tier = "common";
        egg.isGuarded = true;
        egg.guardType = "chicken";
        egg.guardState = "chasing";
        egg.guardTargetId = client.sessionId;
        egg.guardX = egg.x + 0.8;
        egg.guardZ = egg.z + 0.8;
        this.state.mapEggs.set(egg.id, egg);
        console.log(`🧪 [Debug Test] Spawned chasing guarded egg ${egg.id} next to ${player.name}`);
      } catch (err) {
        console.error(`❌ Exception in debug_spawn_guarded_egg:`, err);
      }
    });

    this.onMessage("debug_trigger_alert", (client) => {
      try {
        if (process.env.NODE_ENV !== "test") return;
        const player = this.state.players.get(client.sessionId);
        if (!player) return;
        this.triggerRedAlert(player, "Debug Test Trigger");
      } catch (err) {
        console.error(`❌ Exception in debug_trigger_alert:`, err);
      }
    });

    // 10. Trap & Shop Upgrades Listeners
    this.onMessage("placeTrap", (client) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0 || player.trapCount <= 0 || player.trappedTimer > 0 || player.caughtStunTimer > 0) return;

        player.trapCount--;
        const trap = new Trap();
        trap.id = `trap_${this.nextTrapId++}`;
        trap.ownerId = client.sessionId;
        trap.x = player.x;
        trap.y = 0;
        trap.z = player.z;

        this.state.placedTraps.set(trap.id, trap);
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'placeTrap' handler:`, err);
      }
    });

    this.onMessage("buyTraps", (client) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0 || player.trapCount >= GAME_CONFIG.MAX_TRAPS_PER_PLAYER) return;

        if (player.money >= GAME_CONFIG.TRAP_REFILL_COST) {
          player.money -= GAME_CONFIG.TRAP_REFILL_COST;
          player.trapCount = GAME_CONFIG.MAX_TRAPS_PER_PLAYER;
        }
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'buyTraps' handler:`, err);
      }
    });

    this.onMessage("buyTreadmill", (client) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0) return;

        const currentTier = player.treadmillTier || 1;
        const nextUpgrade = TREADMILL_UPGRADES.find((u) => u.tier === currentTier + 1);

        if (nextUpgrade && player.money >= nextUpgrade.cost) {
          player.money -= nextUpgrade.cost;
          player.treadmillTier = nextUpgrade.tier;
          console.log(`🛍️ [Server] Player ${player.name} upgraded Treadmill to Tier ${nextUpgrade.tier} (${nextUpgrade.name})`);
        }
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'buyTreadmill' handler:`, err);
      }
    });

    this.onMessage("buyBaseUpgrade", (client) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0) return;

        const currentTier = player.baseTier || 1;
        const nextUpgrade = BASE_UPGRADES.find((u) => u.tier === currentTier + 1);

        if (nextUpgrade && player.money >= nextUpgrade.cost) {
          player.money -= nextUpgrade.cost;
          player.baseTier = nextUpgrade.tier;
          console.log(`🛍️ [Server] Player ${player.name} upgraded Base to Tier ${nextUpgrade.tier} (${nextUpgrade.name})`);
        }
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'buyBaseUpgrade' handler:`, err);
      }
    });

    this.onMessage("buyPetSlot", (client) => {
      try {
        const player = this.state.players.get(client.sessionId);
        if (!player || player.frozenTimer > 0) return;

        const currentSlots = player.maxPetSlots || 6;
        const nextUpgrade = PET_SLOT_UPGRADES.find((u) => u.multiplier > currentSlots);

        if (nextUpgrade && player.money >= nextUpgrade.cost) {
          player.money -= nextUpgrade.cost;
          player.maxPetSlots = nextUpgrade.multiplier;
          console.log(`🛍️ [Server] Player ${player.name} upgraded Pet Slots to ${nextUpgrade.multiplier}`);
        }
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'buyPetSlot' handler:`, err);
      }
    });

    // Bloxity SDK Avatar Sync Listener
    this.onMessage("updateBloxityAvatar", (client, cosmetics: any) => {
      try {
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

        console.log(`👤 [Server] Player ${player.name} updated Bloxity cosmetics (Skin: '${player.skinId}', Hat: '${player.hatId}')`);
      } catch (err) {
        console.error(`❌ [Server Error] Exception in 'updateBloxityAvatar' handler:`, err);
      }
    });

    // Initial map egg wave
    for (let i = 0; i < 5; i++) {
      this.spawnRandomMapEgg();
    }

    this.setSimulationInterval((deltaTime) => this.update(deltaTime), 1000 / 60);
    console.log("Egg Heist GameRoom running with robust interaction handler & Red Alert / Freeze rules");
  }

  // --- UNIFIED SERVER INTERACTION FUNCTION (E KEY) ---
  private handlePlayerInteraction(client: Client, requestedPetId?: string) {
    const player = this.state.players.get(client.sessionId);
    if (!player) {
      console.log(`⚠️ [Server Interact] Rejected: No player found for sessionId ${client.sessionId}`);
      return;
    }

    // 1. Check Freeze or Stun States
    if (player.frozenTimer > 0 || player.freezeEndTime > Date.now()) {
      console.log(`❄️ [Server Interact] REJECTED: Player ${player.name} is FROZEN until ${new Date(player.freezeEndTime).toISOString()}`);
      return;
    }
    if (player.trappedTimer > 0 || player.caughtStunTimer > 0) {
      console.log(`🛑 [Server Interact] REJECTED: Player ${player.name} is stunned or trapped`);
      return;
    }

    // 2. Server Debounce Cooldown Check
    const now = Date.now();
    if (now - (player.lastInteractTime || 0) < GAME_CONFIG.INTERACT_COOLDOWN_MS) {
      console.log(`⏳ [Server Interact] DEBOUNCED: Player ${player.name} interacting too quickly (${now - player.lastInteractTime}ms since last)`);
      return;
    }
    player.lastInteractTime = now;

    console.log(`🔍 [Server Interact] Processing E-key interact for ${player.name} at pos (${player.x.toFixed(1)}, ${player.z.toFixed(1)})`);

    // CONTEXT A: Central Sell Stall (`MARKET_STALL_POS`)
    const stallPos = GAME_CONFIG.MARKET_STALL_POS;
    const distToStall = Math.hypot(player.x - stallPos.x, player.z - stallPos.z);
    if (distToStall <= GAME_CONFIG.MARKET_STALL_RADIUS) {
      if (player.carriedPet) {
        const pet = player.carriedPet;
        player.carriedPet = null;
        pet.carriedBy = "";
        pet.isGroundPet = false;
        player.shopPets.push(pet);

        this.broadcast("serverAnnouncement", {
          text: `🛍️ ${player.name} stored ${pet.name} (${pet.rarity.toUpperCase()}) into Shop Storage!`,
          rarity: pet.rarity,
        });
        console.log(`🛍️ [Server Interact SUCCESS] ${player.name} stored carried pet ${pet.name} into Shop Storage!`);
        return;
      }

      if (player.carriedEggTier) {
        const tier = player.carriedEggTier;
        const price = EGG_SELL_PRICES[tier] || 50;
        player.money += price;
        player.carriedEggTier = "";
        player.carriedEgg = null;

        this.broadcast("serverAnnouncement", {
          text: `🏷️ ${player.name} sold a ${tier.toUpperCase()} egg for $${price.toLocaleString()}!`,
          rarity: tier,
        });
        console.log(`🏷️ [Server Interact SUCCESS] ${player.name} sold carried ${tier} egg for $${price}`);
        return;
      }

      console.log(`🛍️ [Server Interact] ${player.name} is at Sell Stall carrying nothing to sell. Checking ground items...`);
    }

    // CONTEXT B: Base Sanctuary & Incubator Interaction
    if (player.baseIndex >= 0 && player.baseIndex < GAME_CONFIG.BASE_POSITIONS.length) {
      const basePos = GAME_CONFIG.BASE_POSITIONS[player.baseIndex];
      const incX = basePos.x + GAME_CONFIG.INCUBATOR_OFFSET.x;
      const incZ = basePos.z + GAME_CONFIG.INCUBATOR_OFFSET.z;
      const distToInc = Math.hypot(player.x - incX, player.z - incZ);

      if (distToInc <= 3.5) {
        if (player.carriedEggTier) {
          const maxCap = BASE_UPGRADES[Math.min(BASE_UPGRADES.length - 1, (player.baseTier || 1) - 1)]?.multiplier || 3;
          if (player.incubatorEggs.length < maxCap) {
            const tier = player.carriedEggTier;
            const incEgg = new Egg();
            incEgg.id = `inc_egg_${this.nextEggId++}`;
            incEgg.tier = tier;
            const tierConfig = EGG_TIERS[tier] || EGG_TIERS.common;
            incEgg.hatchTimeRemaining = tierConfig.hatchTimeSec;
            player.incubatorEggs.push(incEgg);

            player.carriedEggTier = "";
            player.carriedEgg = null;

            console.log(`🐣 [Server Interact SUCCESS] ${player.name} placed ${tier} egg into incubator via E key! Hatching in ${incEgg.hatchTimeRemaining}s. Slot count: ${player.incubatorEggs.length}/${maxCap}`);
            this.broadcast("serverAnnouncement", {
              text: `🐣 ${player.name} placed a ${tierConfig.name} egg into Incubator! Hatching in ${incEgg.hatchTimeRemaining}s!`,
              rarity: tier,
            });
            return;
          }
        }
      }

      const distToBase = Math.hypot(player.x - basePos.x, player.z - basePos.z);
      if (distToBase <= 8.0) {
        // Option 1: Place carried pet into base slot
        if (player.carriedPet) {
          const maxSlots = player.maxPetSlots || GAME_CONFIG.MAX_PET_SLOTS;
          if (player.pets.length < maxSlots) {
            const pet = player.carriedPet;
            pet.isGroundPet = false;
            pet.carriedBy = "";
            player.pets.push(pet);
            player.carriedPet = null;
            console.log(`🏠 [Server Interact SUCCESS] ${player.name} placed pet ${pet.name} into base pet slot!`);
            return;
          }
        }
      }
    }

    // CONTEXT C: Ground Pet Pickup
    if (!player.carriedEggTier && !player.carriedPet) {
      for (let i = 0; i < player.groundPets.length; i++) {
        const pet = player.groundPets[i];
        if (!pet) continue;
        if (requestedPetId && pet.id !== requestedPetId) continue;

        const dist = Math.hypot(player.x - pet.x, player.z - pet.z);
        if (dist <= GAME_CONFIG.PET_PICKUP_RADIUS + 1.2) {
          player.carriedPet = pet;
          player.groundPets.splice(i, 1);
          console.log(`🐾 [Server Interact SUCCESS] ${player.name} picked up ground pet ${pet.name}!`);
          return;
        }
      }
    }

    // CONTEXT D: Wild Map Egg Pickup & Guard Check
    if (!player.carriedEggTier && !player.carriedPet) {
      let closestEggId: string | null = null;
      let closestEgg: Egg | null = null;
      let closestDist = GAME_CONFIG.PICKUP_RADIUS + 1.0;

      const mapEggEntries = Array.from(this.state.mapEggs.entries());
      for (const [eggId, egg] of mapEggEntries) {
        if (!egg || egg.dropCooldown > 0) continue;
        const dist = Math.hypot(player.x - egg.x, player.z - egg.z);
        if (dist <= closestDist) {
          closestDist = dist;
          closestEggId = eggId;
          closestEgg = egg;
        }
      }

      if (closestEgg && closestEggId) {
        const foundEgg = closestEgg as Egg;
        if (foundEgg.isGuarded) {
          if (foundEgg.guardState === "chasing" || foundEgg.guardTargetId === client.sessionId) {
            this.triggerRedAlert(player, "Attempted to steal guarded egg while guard animal is awake!");
            console.log(`🚨 [Server Interact BLOCKED] ${player.name} attempt to grab guarded egg BLOCKED by awake guard!`);
            return;
          }

          foundEgg.guardState = "chasing";
          foundEgg.guardTargetId = client.sessionId;
          player.carriedEggTier = foundEgg.tier;
          player.carriedEgg = foundEgg;
          this.state.mapEggs.delete(closestEggId);

          this.broadcast("serverAnnouncement", {
            text: `🥚 ${player.name} picked up a GUARDED ${foundEgg.tier.toUpperCase()} egg! Guard animal is chasing!`,
            rarity: foundEgg.tier,
          });
          console.log(`🥚 [Server Interact SUCCESS] ${player.name} picked up guarded egg (${foundEgg.tier})! Guard animal activated.`);
          return;
        }

        player.carriedEggTier = foundEgg.tier;
        player.carriedEgg = foundEgg;
        this.state.mapEggs.delete(closestEggId);
        console.log(`🥚 [Server Interact SUCCESS] ${player.name} picked up map egg (${foundEgg.tier})`);
        return;
      }
    }

    console.log(`❓ [Server Interact] ${player.name} pressed E, but no interactable object within range.`);
  }

  // --- RED ALERT & FREEZE SYSTEM ---
  private triggerRedAlert(player: Player, reason: string) {
    if (player.frozenTimer > 0 || player.freezeEndTime > Date.now()) return;

    const now = Date.now();
    if ((player as any).lastRedAlertTime && now - (player as any).lastRedAlertTime < 500) {
      console.log(`⏳ [Server RedAlert Ignored] ${player.name} red alert triggered within 500ms cooldown period.`);
      return;
    }
    (player as any).lastRedAlertTime = now;

    player.redAlerts += 1;
    player.lastAlertTime = now;

    console.log(`🚨 [Server RedAlert Trace] ${player.name} received Red Alert (${player.redAlerts}/${GAME_CONFIG.RED_ALERT_MAX_COUNT}). Reason: ${reason}`);

    // Send targeted client message for screen flash & sound
    const client = this.clients.find((c) => c.sessionId === player.id);
    if (client) {
      client.send("redAlert", {
        count: player.redAlerts,
        max: GAME_CONFIG.RED_ALERT_MAX_COUNT,
        reason,
      });
    }

    this.broadcast("serverAnnouncement", {
      text: `🚨 RED ALERT! (${player.redAlerts}/${GAME_CONFIG.RED_ALERT_MAX_COUNT}) for ${player.name}! Guard blocked pickup!`,
      rarity: "epic",
    });

    if (player.redAlerts >= GAME_CONFIG.RED_ALERT_MAX_COUNT) {
      const freezeSecs = process.env.NODE_ENV === "test" ? 3 : GAME_CONFIG.FREEZE_SECONDS;
      this.freezePlayer(player, freezeSecs);
    }
  }

  private freezePlayer(player: Player, freezeSeconds: number) {
    const freezeEndTime = Date.now() + freezeSeconds * 1000;
    player.freezeEndTime = freezeEndTime;
    player.frozenTimer = freezeSeconds;
    player.redAlerts = GAME_CONFIG.RED_ALERT_MAX_COUNT;

    // Zero out stored movement inputs
    this.playerInputs.set(player.id, { moveX: 0, moveZ: 0, rotationY: player.rotationY });

    // Drop carried item onto ground for rivals to take
    if (player.carriedEggTier) {
      this.dropEggOnGround(player.x, player.z, player.carriedEggTier, player.id);
      player.carriedEggTier = "";
      player.carriedEgg = null;
    }
    if (player.carriedPet) {
      const pet = player.carriedPet;
      pet.x = player.x;
      pet.y = 0;
      pet.z = player.z;
      pet.isGroundPet = true;
      pet.carriedBy = "";
      player.groundPets.push(pet);
      player.carriedPet = null;
    }

    // Persist freeze across disconnects
    const client = this.clients.find((c) => c.sessionId === player.id);
    if (client) {
      const key = this.getPlayerKey(client, player);
      this.persistentFreezes.set(key, { freezeEndTime, redAlerts: 3 });
    }

    console.log(`❄️ [Server] PLAYER FROZEN: ${player.name} frozen for ${freezeSeconds}s until ${new Date(freezeEndTime).toISOString()}`);

    this.broadcast("serverAnnouncement", {
      text: `🚨 ${player.name} triggered 3 RED ALERTS and is FROZEN for 3 minutes! ❄️`,
      rarity: "divine",
    });
  }

  private getPlayerKey(client: Client, player: Player): string {
    if (player.name && !player.name.startsWith("Player_") && !player.name.startsWith("EggHunter_")) {
      return player.name;
    }
    return client.sessionId;
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

    // Check for persistent freeze from prior session
    const key = this.getPlayerKey(client, player);
    const persistent = this.persistentFreezes.get(key);
    if (persistent && persistent.freezeEndTime > Date.now()) {
      player.freezeEndTime = persistent.freezeEndTime;
      player.frozenTimer = Math.ceil((persistent.freezeEndTime - Date.now()) / 1000);
      player.redAlerts = 3;
      console.log(`❄️ [Server] Restored active freeze for rejoining player ${player.name} (${player.frozenTimer}s remaining)`);
    }

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
      if (player.carriedPet) {
        const pet = player.carriedPet;
        pet.x = player.x;
        pet.z = player.z;
        pet.isGroundPet = true;
        player.groundPets.push(pet);
        player.carriedPet = null;
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
    const nowMs = Date.now();

    // Day/Night Cycle
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

    // Guard Rotation Timer (120s)
    (this as any).guardRotationTimer = ((this as any).guardRotationTimer ?? GAME_CONFIG.GUARD_ROTATION_SECONDS) - dt;
    (this as any).guardCountdownTickTimer = ((this as any).guardCountdownTickTimer ?? 0) + dt;

    if ((this as any).guardCountdownTickTimer >= 1.0) {
      (this as any).guardCountdownTickTimer = 0;
      this.broadcast("guardRotationCountdown", { timeRemaining: Math.max(0, Math.floor((this as any).guardRotationTimer)) });
    }

    if ((this as any).guardRotationTimer <= 0) {
      (this as any).guardRotationTimer = GAME_CONFIG.GUARD_ROTATION_SECONDS;
      this.rotateGuardedEggs();
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

    // 2. Egg Cooldowns & Guard Animal Updates
    this.state.mapEggs.forEach((egg, eggId) => {
      if (egg.dropCooldown > 0) {
        egg.dropCooldown = Math.max(0, egg.dropCooldown - dt);
      }

      if (egg.isGuarded) {
        if (egg.guardState === "chasing" && egg.guardTargetId) {
          const targetPlayer = this.state.players.get(egg.guardTargetId);
          let shouldStopChase = false;

          if (!targetPlayer || !targetPlayer.carriedEggTier || targetPlayer.carriedEgg?.id !== egg.id || targetPlayer.frozenTimer > 0 || targetPlayer.freezeEndTime > Date.now()) {
            shouldStopChase = true;
          } else {
            if (targetPlayer.baseIndex >= 0 && targetPlayer.baseIndex < GAME_CONFIG.BASE_POSITIONS.length) {
              const basePos = GAME_CONFIG.BASE_POSITIONS[targetPlayer.baseIndex];
              const distToBase = Math.hypot(targetPlayer.x - basePos.x, targetPlayer.z - basePos.z);
              if (distToBase <= 6.0) {
                shouldStopChase = true;
              }
            }

            const distFromEggOrigin = Math.hypot(egg.guardX - egg.x, egg.guardZ - egg.z);
            if (distFromEggOrigin > GAME_CONFIG.GUARD_CHASE_MAX_DIST) {
              shouldStopChase = true;
            }

            if (!shouldStopChase) {
              const dx = targetPlayer.x - egg.guardX;
              const dz = targetPlayer.z - egg.guardZ;
              const distToPlayer = Math.hypot(dx, dz);

              const chaseSpeed = targetPlayer.speed * GAME_CONFIG.GUARD_CHASE_SPEED_RATIO;
              if (distToPlayer > 0.1) {
                egg.guardX += (dx / distToPlayer) * chaseSpeed * dt;
                egg.guardZ += (dz / distToPlayer) * chaseSpeed * dt;
              }

              if (distToPlayer <= GAME_CONFIG.GUARD_CATCH_RADIUS) {
                if (targetPlayer.invulnerableTimer <= 0) {
                  this.executeGuardCatch(targetPlayer, egg);
                  shouldStopChase = true;
                }
              }
            }
          }

          if (shouldStopChase) {
            egg.guardState = "returning";
            egg.guardTargetId = "";
          }
        } else if (egg.guardState === "returning") {
          const targetX = egg.x + 0.8;
          const targetZ = egg.z + 0.8;
          const dx = targetX - egg.guardX;
          const dz = targetZ - egg.guardZ;
          const distToHome = Math.hypot(dx, dz);

          if (distToHome <= 0.5) {
            egg.guardX = targetX;
            egg.guardZ = targetZ;
            egg.guardState = "sleeping";
          } else {
            const returnSpeed = 6.0;
            egg.guardX += (dx / distToHome) * returnSpeed * dt;
            egg.guardZ += (dz / distToHome) * returnSpeed * dt;
          }
        }
      }
    });

    // 3. Players Loop & Freeze Updates
    let highestMoney = -1;
    let richestId = "";

    this.state.players.forEach((player, sessionId) => {
      if (player.money > highestMoney) {
        highestMoney = player.money;
        richestId = sessionId;
      }

      // Freeze Expiry & Countdown Update
      if (player.freezeEndTime > 0) {
        if (nowMs >= player.freezeEndTime) {
          console.log(`☀️ [Server] Freeze EXPIRED for ${player.name}`);
          player.freezeEndTime = 0;
          player.frozenTimer = 0;
          player.redAlerts = 0;
          this.broadcast("serverAnnouncement", {
            text: `☀️ ${player.name} is no longer frozen!`,
            rarity: "common",
          });
          const client = this.clients.find((c) => c.sessionId === sessionId);
          if (client) {
            const key = this.getPlayerKey(client, player);
            this.persistentFreezes.delete(key);
          }
        } else {
          player.frozenTimer = Math.ceil((player.freezeEndTime - nowMs) / 1000);
          player.speed = 0;
          const input = this.playerInputs.get(sessionId);
          if (input) {
            input.moveX = 0;
            input.moveZ = 0;
          }
        }
      } else if (player.redAlerts > 0) {
        if (player.lastAlertTime > 0 && nowMs - player.lastAlertTime >= GAME_CONFIG.RED_ALERT_RESET_SECONDS * 1000) {
          console.log(`🔄 [Server] Red alert count reset to 0 for ${player.name} after 120s cooldown`);
          player.redAlerts = 0;
          player.lastAlertTime = 0;
        }
      }

      // Timers & Cooldowns
      if (player.batCooldown > 0) player.batCooldown = Math.max(0, player.batCooldown - dt);
      if (player.trappedTimer > 0) player.trappedTimer = Math.max(0, player.trappedTimer - dt);
      if (player.caughtStunTimer > 0) player.caughtStunTimer = Math.max(0, player.caughtStunTimer - dt);
      if (player.invulnerableTimer > 0) player.invulnerableTimer = Math.max(0, player.invulnerableTimer - dt);

      if (player.frozenTimer > 0) return;

      const input = this.playerInputs.get(sessionId);
      if (!input) return;

      if (player.trappedTimer > 0 || player.caughtStunTimer > 0) {
        input.moveX = 0;
        input.moveZ = 0;
      }

      let effectiveSpeed = Math.min(
        GAME_CONFIG.MAX_SPEED_CAP,
        GAME_CONFIG.BASE_SPEED * (1 + player.speedStat * GAME_CONFIG.SPEED_SCALE_FACTOR)
      );

      if (player.carriedEggTier && EGG_TIERS[player.carriedEggTier]) {
        effectiveSpeed *= EGG_TIERS[player.carriedEggTier].weightMultiplier;
      } else if (player.carriedPet) {
        effectiveSpeed *= PET_WEIGHT_MULTIPLIERS[player.carriedPet.rarity] || 0.85;
      }
      player.speed = effectiveSpeed;

      if (input.moveX !== 0 || input.moveZ !== 0) {
        const dx = input.moveX * player.speed * dt;
        const dz = input.moveZ * player.speed * dt;

        player.x = Math.max(-GAME_CONFIG.MAP_LIMIT, Math.min(GAME_CONFIG.MAP_LIMIT, player.x + dx));
        player.z = Math.max(-GAME_CONFIG.MAP_LIMIT, Math.min(GAME_CONFIG.MAP_LIMIT, player.z + dz));
      }

      player.rotationY = input.rotationY;

      // Treadmill Speed Growth
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
          const mult = (tmUpgrade?.multiplier || 1.0) * (player.equippedAngelicTreadmill ? GAME_CONFIG.ANGELIC_SPEED_GROWTH_MULT : 1.0);
          player.speedStat += GAME_CONFIG.SPEED_GROWTH_PER_SEC * mult * dt;
        }
      }

      // Incubator Egg Hatching
      if (player.incubatorEggs) {
        for (let i = player.incubatorEggs.length - 1; i >= 0; i--) {
          const egg = player.incubatorEggs[i];
          if (!egg) continue;
          if (egg.hatchTimeRemaining > 0) {
            egg.hatchTimeRemaining -= dt;
            if (egg.hatchTimeRemaining <= 0) {
              const hatchedPet = this.generatePetForTier(egg.tier);

              // Hatch onto ground at base as physical carryable pet
              hatchedPet.x = player.x + (Math.random() - 0.5) * 2;
              hatchedPet.y = 0;
              hatchedPet.z = player.z + (Math.random() - 0.5) * 2;
              hatchedPet.isGroundPet = true;
              hatchedPet.baseIndex = player.baseIndex;
              player.groundPets.push(hatchedPet);

              player.incubatorEggs.splice(i, 1);
              player.hatchedEggsTotal += 1;

              player.lastHatchedReward = JSON.stringify({
                name: hatchedPet.name,
                rarity: hatchedPet.rarity,
                size: hatchedPet.size,
                mutation: hatchedPet.mutation,
                timestamp: Date.now(),
              });

              this.broadcast("serverAnnouncement", {
                text: `🐣 ${player.name} hatched a ${hatchedPet.rarity.toUpperCase()} ${hatchedPet.name}! Pick it up at base!`,
                rarity: hatchedPet.rarity,
              });
            }
          }
        }
      }

      // Passive Pet Income
      if (player.pets) {
        let petIncomePerSec = 0;
        player.pets.forEach((pet) => {
          petIncomePerSec += pet.moneyPerSec || 0;
        });
        player.money += petIncomePerSec * dt;
      }
    });

    this.state.richestPlayerId = richestId;

    // 4. Stealing Collision Logic
    const playerArray = Array.from(this.state.players.values());
    for (let i = 0; i < playerArray.length; i++) {
      const p1 = playerArray[i];
      if (p1.frozenTimer > 0) continue;

      for (let j = i + 1; j < playerArray.length; j++) {
        const p2 = playerArray[j];
        if (p2.frozenTimer > 0) continue;

        const dist = Math.hypot(p1.x - p2.x, p1.z - p2.z);
        if (dist <= GAME_CONFIG.STEAL_COLLISION_RADIUS) {
          // Egg Steal
          if (p1.carriedEggTier && !p2.carriedEggTier && !p2.carriedPet) {
            p2.carriedEggTier = p1.carriedEggTier;
            p2.carriedEgg = p1.carriedEgg;
            p1.carriedEggTier = "";
            p1.carriedEgg = null;
            this.broadcast("serverAnnouncement", {
              text: `🥷 ${p2.name} STOLE an egg from ${p1.name}!`,
              rarity: "epic",
            });
          } else if (p2.carriedEggTier && !p1.carriedEggTier && !p1.carriedPet) {
            p1.carriedEggTier = p2.carriedEggTier;
            p1.carriedEgg = p2.carriedEgg;
            p2.carriedEggTier = "";
            p2.carriedEgg = null;
            this.broadcast("serverAnnouncement", {
              text: `🥷 ${p1.name} STOLE an egg from ${p2.name}!`,
              rarity: "epic",
            });
          }
          // Pet Steal
          else if (p1.carriedPet && !p2.carriedEggTier && !p2.carriedPet) {
            p2.carriedPet = p1.carriedPet;
            p1.carriedPet = null;
            this.broadcast("serverAnnouncement", {
              text: `🥷 ${p2.name} STOLE a pet from ${p1.name}!`,
              rarity: "epic",
            });
          } else if (p2.carriedPet && !p1.carriedEggTier && !p1.carriedPet) {
            p1.carriedPet = p2.carriedPet;
            p2.carriedPet = null;
            this.broadcast("serverAnnouncement", {
              text: `🥷 ${p1.name} STOLE a pet from ${p2.name}!`,
              rarity: "epic",
            });
          }
        }
      }
    }

    // 5. Dropped Coin Pickups
    this.state.droppedCoins.forEach((coin, coinId) => {
      coin.despawnTimer -= dt;
      if (coin.despawnTimer <= 0) {
        this.state.droppedCoins.delete(coinId);
        return;
      }

      this.state.players.forEach((player) => {
        if (player.frozenTimer > 0) return;
        const dist = Math.hypot(player.x - coin.x, player.z - coin.z);
        if (dist <= GAME_CONFIG.COIN_PICKUP_RADIUS) {
          player.money += coin.amount;
          this.state.droppedCoins.delete(coinId);
          console.log(`🪙 [Server] ${player.name} picked up coin worth $${coin.amount}`);
        }
      });
    });
  }

  private executeGuardCatch(targetPlayer: Player, egg: Egg) {
    if (targetPlayer.frozenTimer > 0 || targetPlayer.freezeEndTime > Date.now()) return;
    const rawPenalty = targetPlayer.money * (GAME_CONFIG.GUARD_PENALTY_PERCENT_MIN + Math.random() * (GAME_CONFIG.GUARD_PENALTY_PERCENT_MAX - GAME_CONFIG.GUARD_PENALTY_PERCENT_MIN));
    let penalty = Math.max(GAME_CONFIG.GUARD_PENALTY_MIN, Math.min(GAME_CONFIG.GUARD_PENALTY_MAX, Math.floor(rawPenalty)));

    if (targetPlayer.money <= GAME_CONFIG.NEW_PLAYER_MONEY_THRESHOLD) {
      penalty = Math.min(targetPlayer.money, GAME_CONFIG.NEW_PLAYER_MAX_LOSS);
    }

    targetPlayer.money = Math.max(0, targetPlayer.money - penalty);
    targetPlayer.caughtStunTimer = GAME_CONFIG.CAUGHT_STUN_DURATION_SEC;
    targetPlayer.invulnerableTimer = GAME_CONFIG.CAUGHT_INVULNERABILITY_SEC;

    // Drop egg
    if (targetPlayer.carriedEggTier) {
      this.dropEggOnGround(targetPlayer.x, targetPlayer.z, targetPlayer.carriedEggTier, targetPlayer.id);
      targetPlayer.carriedEggTier = "";
      targetPlayer.carriedEgg = null;
    }

    // Spawn 70% of lost money as coins
    const droppedAmount = Math.floor(penalty * 0.7);
    if (droppedAmount > 0) {
      const coinCount = Math.min(5, Math.max(1, Math.floor(droppedAmount / 10)));
      const perCoin = Math.floor(droppedAmount / coinCount);
      for (let i = 0; i < coinCount; i++) {
        const coin = new DroppedCoin();
        coin.id = `coin_${this.nextCoinId++}`;
        coin.x = targetPlayer.x + (Math.random() - 0.5) * 3;
        coin.z = targetPlayer.z + (Math.random() - 0.5) * 3;
        coin.amount = perCoin;
        coin.despawnTimer = GAME_CONFIG.COIN_DESPAWN_SEC;
        this.state.droppedCoins.set(coin.id, coin);
      }
    }

    this.broadcast("serverAnnouncement", {
      text: `🚨 ${targetPlayer.name} caught by ${egg.guardType.toUpperCase()} guard! Lost $${penalty.toLocaleString()}!`,
      rarity: "secret",
    });
    console.log(`🚨 [Server] GUARD CATCH: ${targetPlayer.name} caught! Lost $${penalty}, stunned for 1.5s`);
  }

  private rotateGuardedEggs() {
    let rotatedCount = 0;
    this.state.mapEggs.forEach((egg) => {
      if (!egg) return;
      const chance = GUARDED_CHANCE_BY_TIER[egg.tier] || 0;
      const isGuarded = Math.random() < chance;
      egg.isGuarded = isGuarded;
      if (isGuarded) {
        egg.guardType = GUARD_ANIMAL_TYPES[Math.floor(Math.random() * GUARD_ANIMAL_TYPES.length)];
        egg.guardX = egg.x + 0.8;
        egg.guardZ = egg.z + 0.8;
        egg.guardState = "sleeping";
        egg.guardTargetId = "";
        rotatedCount++;
      } else {
        egg.guardState = "none";
        egg.guardTargetId = "";
      }
    });

    console.log(`🔄 [Server Guard Rotation] Re-evaluated guarded status for ${this.state.mapEggs.size} map eggs. ${rotatedCount} currently guarded.`);
    this.broadcast("serverAnnouncement", {
      text: `🚨 GUARD ROTATION! Guard animals have rotated to a new set of eggs!`,
      rarity: "epic",
    });
  }

  private dropEggOnGround(x: number, z: number, tier: string, dropperSessionId?: string) {
    const isGuarded = (GUARDED_CHANCE_BY_TIER[tier] || 0) > Math.random();

    const egg = new Egg();
    egg.id = `egg_${this.nextEggId++}`;
    egg.x = x + (Math.random() - 0.5) * 2;
    egg.z = z + (Math.random() - 0.5) * 2;
    egg.tier = tier;
    egg.dropCooldown = GAME_CONFIG.DROP_COOLDOWN_SEC;
    egg.isGuarded = isGuarded;

    if (isGuarded) {
      egg.guardType = GUARD_ANIMAL_TYPES[Math.floor(Math.random() * GUARD_ANIMAL_TYPES.length)];
      egg.guardX = egg.x + 0.8;
      egg.guardZ = egg.z + 0.8;
      egg.guardState = "sleeping";
    }

    this.state.mapEggs.set(egg.id, egg);
  }

  private spawnRandomMapEgg(forcedTier?: string) {
    let tier = forcedTier;
    if (!tier) {
      const tiers = Object.values(EGG_TIERS);
      const totalWeight = tiers.reduce((sum, t) => sum + t.spawnWeight, 0);
      let rand = Math.random() * totalWeight;

      for (const t of tiers) {
        if (rand < t.spawnWeight) {
          tier = t.id;
          break;
        }
        rand -= t.spawnWeight;
      }
    }

    tier = tier || "common";
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * GAME_CONFIG.SPAWN_RADIUS;

    this.dropEggOnGround(Math.cos(angle) * dist, Math.sin(angle) * dist, tier);
  }

  private generatePetForTier(rarity: string): Pet {
    const nameList = PET_NAMES[rarity] || ["Pet"];
    const baseName = nameList[Math.floor(Math.random() * nameList.length)];
    const tierConfig = EGG_TIERS[rarity] || EGG_TIERS.common;

    const pet = new Pet();
    pet.id = `pet_${this.nextPetId++}`;
    pet.name = baseName;
    pet.rarity = rarity;

    const sizeRoll = Math.random();
    pet.size = sizeRoll < 0.1 ? "giant" : sizeRoll < 0.3 ? "small" : "normal";

    const mutRoll = Math.random();
    pet.mutation = mutRoll < 0.03 ? "shiny" : mutRoll < 0.08 ? "rainbow" : mutRoll < 0.18 ? "golden" : "none";

    const sizeMult = PET_SIZE_MULTIPLIERS[pet.size] || 1.0;
    const mutMult = PET_MUTATION_MULTIPLIERS[pet.mutation] || 1.0;
    pet.moneyPerSec = Math.floor(10 * tierConfig.moneyMultiplier * sizeMult * mutMult);

    return pet;
  }
}
