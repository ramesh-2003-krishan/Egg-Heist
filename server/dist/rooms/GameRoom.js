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
    }
    onCreate(options) {
        this.setState(new GameState_1.GameState());
        // Movement input message handler
        this.onMessage("move", (client, data) => {
            if (typeof data.moveX === "number" && typeof data.moveZ === "number") {
                this.playerInputs.set(client.sessionId, {
                    moveX: Math.max(-1, Math.min(1, data.moveX)),
                    moveZ: Math.max(-1, Math.min(1, data.moveZ)),
                    rotationY: typeof data.rotationY === "number" ? data.rotationY : 0,
                });
            }
        });
        // 60 FPS authoritative server tick loop
        this.setSimulationInterval((deltaTime) => this.update(deltaTime), 1000 / 60);
        console.log("Egg Heist GameRoom created on port 2567");
    }
    onJoin(client, options) {
        console.log(`🎮 [Server] Client joining room: ${client.sessionId}`);
        // Assign base slot
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
        player.onTreadmill = false;
        player.speed = config_1.GAME_CONFIG.BASE_SPEED;
        // Spawn player in front of assigned base, or random fallback
        if (assignedSlot !== -1 && assignedSlot < config_1.GAME_CONFIG.BASE_POSITIONS.length) {
            const basePos = config_1.GAME_CONFIG.BASE_POSITIONS[assignedSlot];
            player.x = basePos.x + config_1.GAME_CONFIG.SPAWN_OFFSET.x;
            player.y = 0; // Feet at ground level
            player.z = basePos.z + config_1.GAME_CONFIG.SPAWN_OFFSET.z;
        }
        else {
            player.x = (Math.random() - 0.5) * 12;
            player.y = 0;
            player.z = (Math.random() - 0.5) * 12;
        }
        player.rotationY = 0;
        console.log(`🎮 [Server] Player created: ${player.name} (${client.sessionId}) at Base ${assignedSlot}`);
        this.state.players.set(client.sessionId, player);
        this.playerInputs.set(client.sessionId, { moveX: 0, moveZ: 0, rotationY: 0 });
        console.log(`🎮 [Server] Registered player in room state. Current players.size: ${this.state.players.size}`);
    }
    onLeave(client, consented) {
        console.log(`Client left: ${client.sessionId}`);
        const player = this.state.players.get(client.sessionId);
        if (player && player.baseIndex !== -1 && player.baseIndex < this.baseSlots.length) {
            this.baseSlots[player.baseIndex] = null;
            console.log(`🎮 [Server] Freed Base Slot ${player.baseIndex}`);
        }
        this.state.players.delete(client.sessionId);
        this.playerInputs.delete(client.sessionId);
    }
    onDispose() {
        console.log("GameRoom disposing");
    }
    update(deltaTimeMs) {
        const dt = deltaTimeMs / 1000;
        this.state.players.forEach((player, sessionId) => {
            const input = this.playerInputs.get(sessionId);
            if (!input)
                return;
            // 1. Calculate movement displacement using speed
            if (input.moveX !== 0 || input.moveZ !== 0) {
                const dx = input.moveX * player.speed * dt;
                const dz = input.moveZ * player.speed * dt;
                player.x = Math.max(-config_1.GAME_CONFIG.MAP_LIMIT, Math.min(config_1.GAME_CONFIG.MAP_LIMIT, player.x + dx));
                player.z = Math.max(-config_1.GAME_CONFIG.MAP_LIMIT, Math.min(config_1.GAME_CONFIG.MAP_LIMIT, player.z + dz));
            }
            player.rotationY = input.rotationY;
            // 2. Authoritative Treadmill collision check (Only player's OWN base treadmill boosts them)
            if (player.baseIndex >= 0 && player.baseIndex < config_1.GAME_CONFIG.BASE_POSITIONS.length) {
                const basePos = config_1.GAME_CONFIG.BASE_POSITIONS[player.baseIndex];
                const treadmillX = basePos.x + config_1.GAME_CONFIG.TREADMILL_OFFSET.x;
                const treadmillZ = basePos.z + config_1.GAME_CONFIG.TREADMILL_OFFSET.z;
                const halfWidth = config_1.GAME_CONFIG.TREADMILL_SIZE.width / 2;
                const halfLength = config_1.GAME_CONFIG.TREADMILL_SIZE.length / 2;
                const onOwnTreadmill = Math.abs(player.x - treadmillX) <= halfWidth &&
                    Math.abs(player.z - treadmillZ) <= halfLength;
                player.onTreadmill = onOwnTreadmill;
                if (onOwnTreadmill) {
                    player.speedStat += config_1.GAME_CONFIG.SPEED_GROWTH_PER_SEC * dt;
                }
            }
            else {
                player.onTreadmill = false;
            }
            // 3. Update effective movement speed
            player.speed = Math.min(config_1.GAME_CONFIG.MAX_SPEED_CAP, config_1.GAME_CONFIG.BASE_SPEED * (1 + player.speedStat * config_1.GAME_CONFIG.SPEED_SCALE_FACTOR));
        });
    }
}
exports.GameRoom = GameRoom;
