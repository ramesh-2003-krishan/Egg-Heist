import { Room, Client } from "colyseus";
import { GameState, Player } from "./schema/GameState";

interface MoveInput {
  moveX: number;
  moveZ: number;
  rotationY: number;
}

export class GameRoom extends Room<GameState> {
  maxClients = 16;
  private playerInputs: Map<string, MoveInput> = new Map();

  onCreate(options: any) {
    this.setState(new GameState());

    // Movement input message handler
    this.onMessage("move", (client, data: MoveInput) => {
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

  onJoin(client: Client, options: any) {
    console.log(`🎮 [Server] Client joining room: ${client.sessionId}`);

    const player = new Player();
    player.id = client.sessionId;
    player.name = options.name || `Player_${client.sessionId.slice(0, 4)}`;
    
    // Spawn player randomly near center of map
    player.x = (Math.random() - 0.5) * 12;
    player.y = 0; // Feet at ground level
    player.z = (Math.random() - 0.5) * 12;
    player.rotationY = 0;
    player.speed = 10;
    player.money = 0;

    console.log(`🎮 [Server] Player created: ${player.name} (${client.sessionId})`);

    this.state.players.set(client.sessionId, player);
    this.playerInputs.set(client.sessionId, { moveX: 0, moveZ: 0, rotationY: 0 });

    console.log(`🎮 [Server] Registered player in room state. Current players.size: ${this.state.players.size}`);
  }

  onLeave(client: Client, consented: boolean) {
    console.log(`Client left: ${client.sessionId}`);
    this.state.players.delete(client.sessionId);
    this.playerInputs.delete(client.sessionId);
  }

  onDispose() {
    console.log("GameRoom disposing");
  }

  private update(deltaTimeMs: number) {
    const dt = deltaTimeMs / 1000;
    const MAP_LIMIT = 48; // Boundary clamp for 100x100 plane

    this.state.players.forEach((player, sessionId) => {
      const input = this.playerInputs.get(sessionId);
      if (!input) return;

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
