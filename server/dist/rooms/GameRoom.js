"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRoom = void 0;
const colyseus_1 = require("colyseus");
const GameState_1 = require("./schema/GameState");
class GameRoom extends colyseus_1.Room {
    maxClients = 16;
    playerInputs = new Map();
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
        console.log(`Client joined: ${client.sessionId}`);
        const player = new GameState_1.Player();
        player.id = client.sessionId;
        player.name = options.name || `Player_${client.sessionId.slice(0, 4)}`;
        // Spawn player randomly near center of map
        player.x = (Math.random() - 0.5) * 12;
        player.y = 0; // Feet at ground level
        player.z = (Math.random() - 0.5) * 12;
        player.rotationY = 0;
        player.speed = 10;
        player.money = 0;
        this.state.players.set(client.sessionId, player);
        this.playerInputs.set(client.sessionId, { moveX: 0, moveZ: 0, rotationY: 0 });
    }
    onLeave(client, consented) {
        console.log(`Client left: ${client.sessionId}`);
        this.state.players.delete(client.sessionId);
        this.playerInputs.delete(client.sessionId);
    }
    onDispose() {
        console.log("GameRoom disposing");
    }
    update(deltaTimeMs) {
        const dt = deltaTimeMs / 1000;
        const MAP_LIMIT = 48; // Boundary clamp for 100x100 plane
        this.state.players.forEach((player, sessionId) => {
            const input = this.playerInputs.get(sessionId);
            if (!input)
                return;
            if (input.moveX !== 0 || input.moveZ !== 0) {
                // Calculate displacement vector
                const dx = input.moveX * player.speed * dt;
                const dz = input.moveZ * player.speed * dt;
                player.x = Math.max(-MAP_LIMIT, Math.min(MAP_LIMIT, player.x + dx));
                player.z = Math.max(-MAP_LIMIT, Math.min(MAP_LIMIT, player.z + dz));
            }
            player.rotationY = input.rotationY;
        });
    }
}
exports.GameRoom = GameRoom;
