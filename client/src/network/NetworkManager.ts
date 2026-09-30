import { Client, Room } from "colyseus.js";
import { SceneManager } from "../scene/SceneManager";
import { GameState, Player } from "./schema/GameState";

export class NetworkManager {
  private client: Client;
  private room: Room<GameState> | null = null;
  private sceneManager: SceneManager;
  private statusElement: HTMLElement | null;
  private playerCountElement: HTMLElement | null;
  private speedElement: HTMLElement | null;
  private moneyElement: HTMLElement | null;
  private treadmillIndicatorElement: HTMLElement | null;
  public localSessionId: string | null = null;

  constructor(sceneManager: SceneManager) {
    this.sceneManager = sceneManager;
    this.statusElement = document.getElementById("connection-status");
    this.playerCountElement = document.getElementById("player-count");
    this.speedElement = document.getElementById("player-speed");
    this.moneyElement = document.getElementById("player-money");
    this.treadmillIndicatorElement = document.getElementById("treadmill-indicator");

    // Construct WebSocket endpoint URL dynamically
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const host = window.location.hostname || "localhost";
    const wsUrl = `${protocol}://${host}:2567`;

    this.client = new Client(wsUrl);
  }

  public getPlayersMap(): Map<string, Player> {
    if (this.room && this.room.state && this.room.state.players) {
      return this.room.state.players as unknown as Map<string, Player>;
    }
    return new Map();
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

      // Helper to update local player HUD stats
      const updateLocalHUD = (player: Player) => {
        if (this.speedElement) {
          this.speedElement.textContent = `⚡ Speed: ${(player.speed || 10).toFixed(1)} (${(player.speedStat || 1).toFixed(1)}x)`;
        }
        if (this.moneyElement) {
          this.moneyElement.textContent = `💰 Money: $${player.money || 0}`;
        }
        if (this.treadmillIndicatorElement) {
          if (player.onTreadmill) {
            this.treadmillIndicatorElement.classList.remove("hidden");
          } else {
            this.treadmillIndicatorElement.classList.add("hidden");
          }
        }
      };

      // 1. Initial state handshake
      this.room.onStateChange.once((state: GameState) => {
        if (state && state.players) {
          const playersMap = state.players as any;

          if (typeof playersMap.onAdd === "function") {
            playersMap.onAdd((player: Player, sessionId: string) => {
              const isLocal = sessionId === this.localSessionId;
              const playerName = player.name || `Player_${sessionId.slice(0, 4)}`;

              this.sceneManager.addAvatar(sessionId, playerName, isLocal);
              this.sceneManager.updateAvatarState(
                sessionId,
                player.x,
                player.y,
                player.z,
                player.rotationY,
                player.speed,
                player.speedStat
              );

              if (isLocal) updateLocalHUD(player);
              this.updatePlayerCount();

              if (typeof (player as any).onChange === "function") {
                (player as any).onChange(() => {
                  this.sceneManager.updateAvatarState(
                    sessionId,
                    player.x,
                    player.y,
                    player.z,
                    player.rotationY,
                    player.speed,
                    player.speedStat
                  );
                  if (sessionId === this.localSessionId) updateLocalHUD(player);
                });
              }
            });

            playersMap.onRemove((player: Player, sessionId: string) => {
              this.sceneManager.removeAvatar(sessionId);
              this.updatePlayerCount();
            });
          }

          state.players.forEach((player: Player, sessionId: string) => {
            const isLocal = sessionId === this.localSessionId;
            const playerName = player.name || `Player_${sessionId.slice(0, 4)}`;
            let avatar = this.sceneManager.getAvatar(sessionId);
            if (!avatar) {
              avatar = this.sceneManager.addAvatar(sessionId, playerName, isLocal);
            }
            this.sceneManager.updateAvatarState(
              sessionId,
              player.x,
              player.y,
              player.z,
              player.rotationY,
              player.speed,
              player.speedStat
            );
            if (isLocal) updateLocalHUD(player);
          });
        }

        this.updatePlayerCount();
      });

      // 2. Continuous state change updates
      this.room.onStateChange((state: GameState) => {
        if (!state || !state.players) return;
        state.players.forEach((player: Player, sessionId: string) => {
          let avatar = this.sceneManager.getAvatar(sessionId);
          if (!avatar) {
            const isLocal = sessionId === this.localSessionId;
            const playerName = player.name || `Player_${sessionId.slice(0, 4)}`;
            avatar = this.sceneManager.addAvatar(sessionId, playerName, isLocal);
          }
          this.sceneManager.updateAvatarState(
            sessionId,
            player.x,
            player.y,
            player.z,
            player.rotationY,
            player.speed,
            player.speedStat
          );
          if (sessionId === this.localSessionId) updateLocalHUD(player);
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
