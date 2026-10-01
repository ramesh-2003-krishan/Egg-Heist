"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRoom = void 0;
const colyseus_1 = require("colyseus");
const GameState_1 = require("./schema/GameState");
const config_1 = require("../config");
class GameRoom extends colyseus_1.Room {
    constructor() {
        super(...arguments);
        this.maxClients = config_1.GAME_CONFIG.MAX_BASE_SLOTS;
        this.playerInputs = new Map();
        this.baseSlots = new Array(config_1.GAME_CONFIG.MAX_BASE_SLOTS).fill(null);
        this.spawnTimer = 0;
        this.nextEggId = 1;
        this.nextPetId = 1;
    }
    onCreate(options) {
        this.setState(new GameState_1.GameState());
        this.onMessage("move", (client, data) => {
            if (typeof data.moveX === "number" && typeof data.moveZ === "number") {
                this.playerInputs.set(client.sessionId, {
                    moveX: Math.max(-1, Math.min(1, data.moveX)),
                    moveZ: Math.max(-1, Math.min(1, data.moveZ)),
                    rotationY: typeof data.rotationY === "number" ? data.rotationY : 0,
                });
            }
        });
        // Shop Upgrade Message Listeners
        this.onMessage("buyTreadmill", (client) => {
            const player = this.state.players.get(client.sessionId);
            if (!player)
                return;
            const currentTier = player.treadmillTier || 1;
            const nextUpgrade = config_1.TREADMILL_UPGRADES.find((u) => u.tier === currentTier + 1);
            if (nextUpgrade && player.money >= nextUpgrade.cost) {
                player.money -= nextUpgrade.cost;
                player.treadmillTier = nextUpgrade.tier;
                console.log(`🛍️ [Server] Player ${player.name} upgraded Treadmill to Tier ${nextUpgrade.tier} (${nextUpgrade.name})`);
            }
        });
        this.onMessage("buyBaseUpgrade", (client) => {
            const player = this.state.players.get(client.sessionId);
            if (!player)
                return;
            const currentTier = player.baseTier || 1;
            const nextUpgrade = config_1.BASE_UPGRADES.find((u) => u.tier === currentTier + 1);
            if (nextUpgrade && player.money >= nextUpgrade.cost) {
                player.money -= nextUpgrade.cost;
                player.baseTier = nextUpgrade.tier;
                console.log(`🛍️ [Server] Player ${player.name} upgraded Base to Tier ${nextUpgrade.tier} (${nextUpgrade.name})`);
            }
        });
        this.onMessage("buyPetSlot", (client) => {
            const player = this.state.players.get(client.sessionId);
            if (!player)
                return;
            const currentSlots = player.maxPetSlots || 6;
            const nextUpgrade = config_1.PET_SLOT_UPGRADES.find((u) => u.multiplier > currentSlots);
            if (nextUpgrade && player.money >= nextUpgrade.cost) {
                player.money -= nextUpgrade.cost;
                player.maxPetSlots = nextUpgrade.multiplier;
                console.log(`🛍️ [Server] Player ${player.name} upgraded Pet Slots to ${nextUpgrade.multiplier}`);
            }
        });
        // Bloxity SDK Avatar Sync Listener
        this.onMessage("updateBloxityAvatar", (client, cosmetics) => {
            const player = this.state.players.get(client.sessionId);
            if (!player || typeof cosmetics !== "object" || cosmetics === null)
                return;
            const sanitizeId = (id) => {
                if (typeof id !== "string")
                    return "";
                const trimmed = id.trim();
                if (trimmed.length > 40)
                    return "";
                if (!/^[A-Za-z0-9_-]*$/.test(trimmed))
                    return "";
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
    onJoin(client, options) {
        console.log(`🎮 [Server] Client joining room: ${client.sessionId}`);
        let assignedSlot = -1;
        for (let i = 0; i < this.baseSlots.length; i++) {
            if (this.baseSlots[i] === null) {
                assignedSlot = i;
                this.baseSlots[i] = client.sessionId;
                break;
            }
        }
        const player = new GameState_1.Player();
        player.id = client.sessionId;
        player.name = options.name || `Player_${client.sessionId.slice(0, 4)}`;
        player.baseIndex = assignedSlot;
        player.speedStat = 1;
        player.money = 0;
        player.treadmillTier = 1;
        player.baseTier = 1;
        player.maxPetSlots = 6;
        player.onTreadmill = false;
        player.speed = config_1.GAME_CONFIG.BASE_SPEED;
        if (assignedSlot !== -1 && assignedSlot < config_1.GAME_CONFIG.BASE_POSITIONS.length) {
            const basePos = config_1.GAME_CONFIG.BASE_POSITIONS[assignedSlot];
            player.x = basePos.x + config_1.GAME_CONFIG.SPAWN_OFFSET.x;
            player.y = 0;
            player.z = basePos.z + config_1.GAME_CONFIG.SPAWN_OFFSET.z;
        }
        else {
            player.x = (Math.random() - 0.5) * 12;
            player.y = 0;
            player.z = (Math.random() - 0.5) * 12;
        }
        player.rotationY = 0;
        this.state.players.set(client.sessionId, player);
        this.playerInputs.set(client.sessionId, { moveX: 0, moveZ: 0, rotationY: 0 });
    }
    onLeave(client, consented) {
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
    update(deltaTimeMs) {
        const dt = deltaTimeMs / 1000;
        // 1. Spawner
        this.spawnTimer += dt;
        if (this.spawnTimer >= config_1.GAME_CONFIG.SPAWN_INTERVAL_SEC &&
            this.state.mapEggs.size < config_1.GAME_CONFIG.MAX_MAP_EGGS) {
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
            const input = this.playerInputs.get(sessionId);
            if (!input)
                return;
            let effectiveSpeed = Math.min(config_1.GAME_CONFIG.MAX_SPEED_CAP, config_1.GAME_CONFIG.BASE_SPEED * (1 + player.speedStat * config_1.GAME_CONFIG.SPEED_SCALE_FACTOR));
            if (player.carriedEggTier && config_1.EGG_TIERS[player.carriedEggTier]) {
                effectiveSpeed *= config_1.EGG_TIERS[player.carriedEggTier].weightMultiplier;
            }
            player.speed = effectiveSpeed;
            if (input.moveX !== 0 || input.moveZ !== 0) {
                const dx = input.moveX * player.speed * dt;
                const dz = input.moveZ * player.speed * dt;
                player.x = Math.max(-config_1.GAME_CONFIG.MAP_LIMIT, Math.min(config_1.GAME_CONFIG.MAP_LIMIT, player.x + dx));
                player.z = Math.max(-config_1.GAME_CONFIG.MAP_LIMIT, Math.min(config_1.GAME_CONFIG.MAP_LIMIT, player.z + dz));
            }
            player.rotationY = input.rotationY;
            // Treadmill Speed Growth (Treadmill Tier multiplier!)
            if (player.baseIndex >= 0 && player.baseIndex < config_1.GAME_CONFIG.BASE_POSITIONS.length) {
                const basePos = config_1.GAME_CONFIG.BASE_POSITIONS[player.baseIndex];
                const treadmillX = basePos.x + config_1.GAME_CONFIG.TREADMILL_OFFSET.x;
                const treadmillZ = basePos.z + config_1.GAME_CONFIG.TREADMILL_OFFSET.z;
                const halfW = config_1.GAME_CONFIG.TREADMILL_SIZE.width / 2;
                const halfL = config_1.GAME_CONFIG.TREADMILL_SIZE.length / 2;
                const onOwnTreadmill = Math.abs(player.x - treadmillX) <= halfW &&
                    Math.abs(player.z - treadmillZ) <= halfL;
                player.onTreadmill = onOwnTreadmill;
                if (onOwnTreadmill) {
                    const tmUpgrade = config_1.TREADMILL_UPGRADES[Math.min(config_1.TREADMILL_UPGRADES.length - 1, (player.treadmillTier || 1) - 1)];
                    const tmMult = tmUpgrade ? tmUpgrade.multiplier : 1.0;
                    const angelMult = player.equippedAngelicTreadmill ? config_1.GAME_CONFIG.ANGELIC_SPEED_GROWTH_MULT : 1.0;
                    player.speedStat += config_1.GAME_CONFIG.SPEED_GROWTH_PER_SEC * tmMult * angelMult * dt;
                }
            }
            else {
                player.onTreadmill = false;
            }
            // 4. Pickup
            if (!player.carriedEggTier) {
                this.state.mapEggs.forEach((egg, eggId) => {
                    if (egg.dropCooldown > 0 && egg.lastDroppedBy === sessionId)
                        return;
                    const dist = Math.hypot(player.x - egg.x, player.z - egg.z);
                    if (dist <= config_1.GAME_CONFIG.PICKUP_RADIUS) {
                        player.carriedEggTier = egg.tier;
                        const newEgg = new GameState_1.Egg();
                        newEgg.id = egg.id;
                        newEgg.tier = egg.tier;
                        newEgg.carriedBy = sessionId;
                        player.carriedEgg = newEgg;
                        this.state.mapEggs.delete(eggId);
                    }
                });
            }
            // 5. Deposit into Base Incubator (Base Tier determines incubator capacity!)
            if (player.carriedEggTier && player.baseIndex >= 0) {
                const basePos = config_1.GAME_CONFIG.BASE_POSITIONS[player.baseIndex];
                const incX = basePos.x + config_1.GAME_CONFIG.INCUBATOR_OFFSET.x;
                const incZ = basePos.z + config_1.GAME_CONFIG.INCUBATOR_OFFSET.z;
                const halfW = config_1.GAME_CONFIG.INCUBATOR_SIZE.width / 2;
                const halfL = config_1.GAME_CONFIG.INCUBATOR_SIZE.length / 2;
                const insideOwnIncubator = Math.abs(player.x - incX) <= halfW &&
                    Math.abs(player.z - incZ) <= halfL;
                const baseUpgrade = config_1.BASE_UPGRADES[Math.min(config_1.BASE_UPGRADES.length - 1, (player.baseTier || 1) - 1)];
                const maxIncCapacity = baseUpgrade ? baseUpgrade.multiplier : config_1.GAME_CONFIG.MAX_INCUBATOR_EGGS;
                if (insideOwnIncubator && player.incubatorEggs.length < maxIncCapacity) {
                    const depositedEgg = new GameState_1.Egg();
                    depositedEgg.id = `inc_egg_${this.nextEggId++}`;
                    depositedEgg.tier = player.carriedEggTier;
                    depositedEgg.baseIndex = player.baseIndex;
                    depositedEgg.hatchTimeRemaining = config_1.EGG_TIERS[player.carriedEggTier].hatchTimeSec;
                    player.incubatorEggs.push(depositedEgg);
                    player.carriedEggTier = "";
                    player.carriedEgg = null;
                }
            }
            // 6. Steal Egg from Opponent Incubator
            if (!player.carriedEggTier) {
                config_1.GAME_CONFIG.BASE_POSITIONS.forEach((basePos, bIdx) => {
                    if (bIdx === player.baseIndex)
                        return;
                    const incX = basePos.x + config_1.GAME_CONFIG.INCUBATOR_OFFSET.x;
                    const incZ = basePos.z + config_1.GAME_CONFIG.INCUBATOR_OFFSET.z;
                    const halfW = config_1.GAME_CONFIG.INCUBATOR_SIZE.width / 2;
                    const halfL = config_1.GAME_CONFIG.INCUBATOR_SIZE.length / 2;
                    const insideOpponentIncubator = Math.abs(player.x - incX) <= halfW &&
                        Math.abs(player.z - incZ) <= halfL;
                    if (insideOpponentIncubator) {
                        this.state.players.forEach((targetPlayer) => {
                            if (targetPlayer.baseIndex === bIdx && targetPlayer.incubatorEggs.length > 0) {
                                const stolenEgg = targetPlayer.incubatorEggs.pop();
                                if (stolenEgg) {
                                    player.carriedEggTier = stolenEgg.tier;
                                    const newEgg = new GameState_1.Egg();
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
                if (!egg)
                    continue;
                egg.hatchTimeRemaining -= dt;
                if (egg.hatchTimeRemaining <= 0) {
                    player.incubatorEggs.splice(i, 1);
                    const pet = this.generatePetForTier(egg.tier);
                    const maxPetCap = player.maxPetSlots || config_1.GAME_CONFIG.MAX_PET_SLOTS;
                    if (player.pets.length < maxPetCap) {
                        player.pets.push(pet);
                    }
                    let rewardedName = "";
                    let rewardedRarity = pet.rarity;
                    if (Math.random() < config_1.GAME_CONFIG.DIVINE_TRAIL_CHANCE) {
                        player.hasDivineTrail = true;
                        player.equippedDivineTrail = true;
                        rewardedName = "Divine Rainbow Trail";
                        rewardedRarity = "Divine";
                    }
                    else if (Math.random() < config_1.GAME_CONFIG.ANGELIC_TREADMILL_CHANCE) {
                        player.hasAngelicTreadmill = true;
                        player.equippedAngelicTreadmill = true;
                        rewardedName = "Angelic Treadmill";
                        rewardedRarity = "Divine";
                    }
                    else if (["secret", "eternal", "divine"].includes(egg.tier)) {
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
                if (dist <= config_1.GAME_CONFIG.STEAL_COLLISION_RADIUS) {
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
    }
    generatePetForTier(tier) {
        const pet = new GameState_1.Pet();
        pet.id = `pet_${this.nextPetId++}`;
        pet.rarity = tier;
        const names = config_1.PET_NAMES[tier] || config_1.PET_NAMES.common;
        pet.name = names[Math.floor(Math.random() * names.length)];
        const sRand = Math.random();
        let sizeMult = 1.0;
        if (sRand < 0.20) {
            pet.size = "small";
            sizeMult = 0.8;
        }
        else if (sRand < 0.90) {
            pet.size = "normal";
            sizeMult = 1.0;
        }
        else {
            pet.size = "giant";
            sizeMult = 1.8;
        }
        const mRand = Math.random();
        let mutMult = 1.0;
        if (mRand < 0.75) {
            pet.mutation = "none";
            mutMult = 1.0;
        }
        else if (mRand < 0.90) {
            pet.mutation = "golden";
            mutMult = 2.0;
        }
        else if (mRand < 0.98) {
            pet.mutation = "rainbow";
            mutMult = 4.0;
        }
        else {
            pet.mutation = "shiny";
            mutMult = 8.0;
        }
        const tierMult = config_1.EGG_TIERS[tier] ? config_1.EGG_TIERS[tier].moneyMultiplier : 1.0;
        pet.moneyPerSec = 5.0 * tierMult * sizeMult * mutMult;
        return pet;
    }
    spawnRandomMapEgg() {
        const tier = this.rollRandomEggTier();
        const egg = new GameState_1.Egg();
        egg.id = `map_egg_${this.nextEggId++}`;
        egg.tier = tier;
        const angle = Math.random() * Math.PI * 2;
        const r = 3 + Math.random() * (config_1.GAME_CONFIG.SPAWN_RADIUS - 3);
        egg.x = Math.cos(angle) * r;
        egg.y = 0;
        egg.z = Math.sin(angle) * r;
        this.state.mapEggs.set(egg.id, egg);
    }
    dropEggOnGround(x, z, tier, dropperId) {
        const egg = new GameState_1.Egg();
        egg.id = `dropped_egg_${this.nextEggId++}`;
        egg.tier = tier;
        egg.x = x;
        egg.y = 0;
        egg.z = z;
        egg.dropCooldown = config_1.GAME_CONFIG.DROP_COOLDOWN_SEC;
        egg.lastDroppedBy = dropperId;
        this.state.mapEggs.set(egg.id, egg);
    }
    rollRandomEggTier() {
        const totalWeight = Object.values(config_1.EGG_TIERS).reduce((acc, t) => acc + t.spawnWeight, 0);
        let rand = Math.random() * totalWeight;
        for (const tierObj of Object.values(config_1.EGG_TIERS)) {
            if (rand < tierObj.spawnWeight) {
                return tierObj.id;
            }
            rand -= tierObj.spawnWeight;
        }
        return "common";
    }
}
exports.GameRoom = GameRoom;
