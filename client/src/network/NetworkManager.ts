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

      console.log(`Successfully joined room: ${this.room.name}, sessionId: ${this.localSessionId}`);

      const syncPlayers = () => {
        if (!this.room || !this.room.state || !this.room.state.players) return;

        const currentSessionIds = new Set<string>();

        // 1. Iterate using ES6 for...of over MapSchema
        try {
          const playersMap = this.room.state.players as any;
          if (playersMap.forEach) {
            playersMap.forEach((player: any, sessionId: string) => {
              currentSessionIds.add(sessionId);
              let avatar = this.sceneManager.getAvatar(sessionId);
              if (!avatar) {
                const isLocal = sessionId === this.localSessionId;
                const playerName = player.name || `Player_${sessionId.slice(0, 4)}`;
                console.log(`✨ Spawning avatar: ${playerName} (${sessionId}) [isLocal: ${isLocal}]`);
                avatar = this.sceneManager.addAvatar(sessionId, playerName, isLocal);
              }
              this.sceneManager.updateAvatarState(sessionId, player.x, player.y, player.z, player.rotationY);
            });
          }
        } catch (err) {
          console.error("Error iterating room players:", err);
        }

        // 2. Remove despawned players
        this.sceneManager.getAvatarIds().forEach((id) => {
          if (!currentSessionIds.has(id)) {
            console.log(`🗑️ Despawning avatar: ${id}`);
            this.sceneManager.removeAvatar(id);
          }
        });

        this.updatePlayerCount();
      };

      // Sync players immediately and on every state change tick
      syncPlayers();
      this.room.onStateChange(() => syncPlayers());

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
    if (this.playerCountElement) {
      const count = this.sceneManager.getAvatarCount();
      this.playerCountElement.textContent = `Players Online: ${count}`;
    }
  }
}
