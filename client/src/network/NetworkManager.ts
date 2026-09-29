import { Client, Room } from "colyseus.js";
import { SceneManager } from "../scene/SceneManager";
import { GameState, Player } from "./schema/GameState";

export class NetworkManager {
  private client: Client;
  private room: Room<GameState> | null = null;
  private sceneManager: SceneManager;
  private statusElement: HTMLElement | null;
  private playerCountElement: HTMLElement | null;
  public localSessionId: string | null = null;

  constructor(sceneManager: SceneManager) {
    this.sceneManager = sceneManager;
    this.statusElement = document.getElementById("connection-status");
    this.playerCountElement = document.getElementById("player-count");

    // Construct WebSocket endpoint URL dynamically
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const host = window.location.hostname || "localhost";
    const wsUrl = `${protocol}://${host}:2567`;

    this.client = new Client(wsUrl);
  }

  public async connect(): Promise<void> {
    try {
      if (this.statusElement) {
        this.statusElement.textContent = "Connecting to Colyseus server...";
        this.statusElement.className = "connecting";
      }

      // Join game_room with typed GameState schema
      this.room = await this.client.joinOrCreate<GameState>("game_room", {
        name: `EggHunter_${Math.floor(Math.random() * 900 + 100)}`,
      });

      this.localSessionId = this.room.sessionId;
      this.sceneManager.setLocalAvatarId(this.localSessionId);

      if (this.statusElement) {
        this.statusElement.textContent = `🟢 Connected (ID: ${this.localSessionId.slice(0, 5)})`;
        this.statusElement.className = "connected";
      }

      console.log(`🎮 [Client] Joined room: ${this.room.name}, sessionId: ${this.localSessionId}`);

      // 1. Wait for initial state handshake via onStateChange.once
      this.room.onStateChange.once((state: GameState) => {
        const count = state && state.players ? state.players.size : 0;
        console.log(`🎮 [Client] Initial state sync received. room.state.players.size: ${count}`);

        if (state && state.players) {
          const playersMap = state.players as any;

          // Register schema callbacks for future additions/removals
          if (typeof playersMap.onAdd === "function") {
            playersMap.onAdd((player: Player, sessionId: string) => {
              const isLocal = sessionId === this.localSessionId;
              const playerName = player.name || `Player_${sessionId.slice(0, 4)}`;
              console.log(`🎮 [Client] Player added to state: ${sessionId} (Name: ${playerName}) [isLocal: ${isLocal}]`);

              this.sceneManager.addAvatar(sessionId, playerName, isLocal);
              this.sceneManager.updateAvatarState(sessionId, player.x, player.y, player.z, player.rotationY);
              this.updatePlayerCount();

              if (typeof (player as any).onChange === "function") {
                (player as any).onChange(() => {
                  this.sceneManager.updateAvatarState(sessionId, player.x, player.y, player.z, player.rotationY);
                });
              }
            });

            playersMap.onRemove((player: Player, sessionId: string) => {
              console.log(`🗑️ [Client] Player removed from state: ${sessionId}`);
              this.sceneManager.removeAvatar(sessionId);
              this.updatePlayerCount();
            });
          }

          // Process all players existing in initial state packet
          state.players.forEach((player: any, sessionId: string) => {
            const isLocal = sessionId === this.localSessionId;
            const playerName = player.name || `Player_${sessionId.slice(0, 4)}`;
            let avatar = this.sceneManager.getAvatar(sessionId);
            if (!avatar) {
              console.log(`✨ [Client] Avatar spawned from initial state: ${playerName} (${sessionId}) [isLocal: ${isLocal}]`);
              avatar = this.sceneManager.addAvatar(sessionId, playerName, isLocal);
            }
            this.sceneManager.updateAvatarState(sessionId, player.x, player.y, player.z, player.rotationY);
          });
        }

        this.updatePlayerCount();
      });

      // 2. Continuous state change updates for real-time movement & HUD count
      this.room.onStateChange((state: GameState) => {
        if (!state || !state.players) return;
        state.players.forEach((player: any, sessionId: string) => {
          let avatar = this.sceneManager.getAvatar(sessionId);
          if (!avatar) {
            const isLocal = sessionId === this.localSessionId;
            const playerName = player.name || `Player_${sessionId.slice(0, 4)}`;
            console.log(`✨ [Client] Avatar spawned on state change: ${playerName} (${sessionId}) [isLocal: ${isLocal}]`);
            avatar = this.sceneManager.addAvatar(sessionId, playerName, isLocal);
          }
          this.sceneManager.updateAvatarState(sessionId, player.x, player.y, player.z, player.rotationY);
        });
        this.updatePlayerCount();
      });

      this.updatePlayerCount();

      this.room.onLeave((code) => {
        console.log(`Left room with code ${code}`);
        if (this.statusElement) {
          this.statusElement.textContent = "🔴 Disconnected from server";
          this.statusElement.className = "disconnected";
        }
      });

    } catch (error) {
      console.error("Failed to connect to Colyseus room:", error);
      if (this.statusElement) {
        this.statusElement.textContent = "❌ Connection Failed (Server Offline?)";
        this.statusElement.className = "disconnected";
      }
    }
  }

  public sendMoveInput(moveX: number, moveZ: number, rotationY: number) {
    if (this.room) {
      this.room.send("move", { moveX, moveZ, rotationY });
    }
  }

  private updatePlayerCount() {
    if (this.playerCountElement && this.room && this.room.state && this.room.state.players) {
      const count = this.room.state.players.size;
      this.playerCountElement.textContent = `Players Online: ${count}`;
    }
  }
}
