import { Client, Room } from "colyseus.js";
import { SceneManager } from "../scene/SceneManager";
import { GameState, Player, Pet } from "./schema/GameState";
import {
  EGG_TIERS,
  TREADMILL_UPGRADES,
  BASE_UPGRADES,
  PET_SLOT_UPGRADES,
} from "../config";
import {
  initBloxity,
  getUser,
  showAuthPopup,
  logout,
  onUserChanged,
  getEquippedCosmetics,
  onAvatarChanged,
  loadingEnd,
  gameplayStart,
  BloxityUser,
} from "../bloxity";

export class NetworkManager {
  private client: Client;
  private room: Room<GameState> | null = null;
  private sceneManager: SceneManager;

  private statusElement: HTMLElement | null;
  private playerCountElement: HTMLElement | null;
  private speedElement: HTMLElement | null;
  private moneyElement: HTMLElement | null;
  private carriedEggElement: HTMLElement | null;
  private incubatorInfoElement: HTMLElement | null;
  private treadmillIndicatorElement: HTMLElement | null;

  private rewardModalElement: HTMLElement | null;
  private rewardRarityElement: HTMLElement | null;
  private rewardTitleElement: HTMLElement | null;
  private rewardCloseBtn: HTMLElement | null;

  private shopModalElement: HTMLElement | null;
  private shopContentElement: HTMLElement | null;
  private openShopBtn: HTMLElement | null;
  private shopCloseBtn: HTMLElement | null;
  private shopTabs: NodeListOf<Element> | null = null;

  private petsCountTitleElement: HTMLElement | null;
  private petsListContainerElement: HTMLElement | null;
  private togglePetsBtn: HTMLElement | null;

  // Bloxity UI Elements
  private bloxityLoggedOutBox: HTMLElement | null;
  private bloxityLoggedInBox: HTMLElement | null;
  private bloxityPfpImg: HTMLImageElement | null;
  private bloxityNameSpan: HTMLElement | null;
  private bloxityLoginBtn: HTMLElement | null;
  private bloxityLogoutBtn: HTMLElement | null;

  public localSessionId: string | null = null;
  private lastHandledRewardTimestamp: number = 0;
  private currentShopTab: string = "treadmills";

  constructor(sceneManager: SceneManager) {
    this.sceneManager = sceneManager;
    this.statusElement = document.getElementById("connection-status");
    this.playerCountElement = document.getElementById("player-count");
    this.speedElement = document.getElementById("player-speed");
    this.moneyElement = document.getElementById("player-money");
    this.carriedEggElement = document.getElementById("carried-egg");
    this.incubatorInfoElement = document.getElementById("incubator-info");
    this.treadmillIndicatorElement = document.getElementById("treadmill-indicator");

    this.rewardModalElement = document.getElementById("reward-modal");
    this.rewardRarityElement = document.getElementById("reward-rarity");
    this.rewardTitleElement = document.getElementById("reward-title");
    this.rewardCloseBtn = document.getElementById("reward-close-btn");

    this.shopModalElement = document.getElementById("shop-modal");
    this.shopContentElement = document.getElementById("shop-content");
    this.openShopBtn = document.getElementById("open-shop-btn");
    this.shopCloseBtn = document.getElementById("shop-close-btn");
    this.shopTabs = document.querySelectorAll(".shop-tab");

    this.petsCountTitleElement = document.getElementById("pets-count-title");
    this.petsListContainerElement = document.getElementById("pets-list-container");
    this.togglePetsBtn = document.getElementById("toggle-pets-btn");

    this.bloxityLoggedOutBox = document.getElementById("bloxity-logged-out");
    this.bloxityLoggedInBox = document.getElementById("bloxity-logged-in");
    this.bloxityPfpImg = document.getElementById("bloxity-pfp") as HTMLImageElement;
    this.bloxityNameSpan = document.getElementById("bloxity-name");
    this.bloxityLoginBtn = document.getElementById("bloxity-login-btn");
    this.bloxityLogoutBtn = document.getElementById("bloxity-logout-btn");

    // Initialize Bloxity SDK
    initBloxity();

    this.setupUIEvents();
    this.setupBloxityEvents();

    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const host = window.location.hostname || "localhost";
    const wsUrl = `${protocol}://${host}:2567`;

    this.client = new Client(wsUrl);
  }

  private setupUIEvents() {
    if (this.rewardCloseBtn && this.rewardModalElement) {
      this.rewardCloseBtn.addEventListener("click", () => {
        this.rewardModalElement?.classList.add("hidden");
      });
    }

    if (this.openShopBtn) {
      this.openShopBtn.addEventListener("click", () => this.toggleShopModal());
    }
    if (this.shopCloseBtn) {
      this.shopCloseBtn.addEventListener("click", () => this.shopModalElement?.classList.add("hidden"));
    }

    if (this.togglePetsBtn && this.petsListContainerElement) {
      this.togglePetsBtn.addEventListener("click", () => {
        this.petsListContainerElement?.classList.toggle("collapsed");
        if (this.togglePetsBtn) {
          this.togglePetsBtn.textContent = this.petsListContainerElement?.classList.contains("collapsed") ? "▲" : "▼";
        }
      });
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "b" || e.key === "B" || e.key === "e" || e.key === "E") {
        this.toggleShopModal();
      }
    });

    if (this.shopTabs) {
      this.shopTabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
          this.shopTabs?.forEach((t) => t.classList.remove("active"));
          const target = e.currentTarget as HTMLElement;
          target.classList.add("active");
          this.currentShopTab = target.getAttribute("data-tab") || "treadmills";
          this.renderShopContent();
        });
      });
    }
  }

  private setupBloxityEvents() {
    if (this.bloxityLoginBtn) {
      this.bloxityLoginBtn.addEventListener("click", async () => {
        await showAuthPopup();
      });
    }
    if (this.bloxityLogoutBtn) {
      this.bloxityLogoutBtn.addEventListener("click", () => {
        logout();
      });
    }

    onUserChanged((user: BloxityUser | null) => {
      this.updateBloxityAuthUI(user);
      this.sendLocalBloxityCosmetics();
    });

    onAvatarChanged(() => {
      this.sendLocalBloxityCosmetics();
    });
  }

  private updateBloxityAuthUI(user: BloxityUser | null) {
    if (user) {
      if (this.bloxityLoggedOutBox) this.bloxityLoggedOutBox.classList.add("hidden");
      if (this.bloxityLoggedInBox) this.bloxityLoggedInBox.classList.remove("hidden");
      if (this.bloxityNameSpan) {
        this.bloxityNameSpan.textContent = user.displayName || user.username;
      }
      if (this.bloxityPfpImg) {
        this.bloxityPfpImg.src = user.pfp || "https://static.bloxity.io/avatars/icons/default_pfp.png";
      }
    } else {
      if (this.bloxityLoggedOutBox) this.bloxityLoggedOutBox.classList.remove("hidden");
      if (this.bloxityLoggedInBox) this.bloxityLoggedInBox.classList.add("hidden");
    }
  }

  private sendLocalBloxityCosmetics() {
    if (!this.room) return;
    const cosmetics = getEquippedCosmetics();
    if (cosmetics) {
      this.room.send("updateBloxityAvatar", cosmetics);
    }
  }

  private toggleShopModal() {
    if (this.shopModalElement) {
      this.shopModalElement.classList.toggle("hidden");
      if (!this.shopModalElement.classList.contains("hidden")) {
        this.renderShopContent();
      }
    }
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

      this.room = await this.client.joinOrCreate<GameState>("game_room", {
        name: `EggHunter_${Math.floor(Math.random() * 900 + 100)}`,
      });

      this.localSessionId = this.room.sessionId;
      this.sceneManager.setLocalAvatarId(this.localSessionId);

      // Send local player's equipped Bloxity cosmetics on room join
      this.sendLocalBloxityCosmetics();

      // Trigger Bloxity SDK Lifecycle hooks
      loadingEnd();
      gameplayStart();

      if (this.statusElement) {
        this.statusElement.textContent = `🟢 Connected (ID: ${this.localSessionId.slice(0, 5)})`;
        this.statusElement.className = "connected";
      }

      const updateLocalHUD = (player: Player) => {
        if (this.speedElement) {
          this.speedElement.textContent = `⚡ Speed: ${(player.speed || 10).toFixed(1)} (${(player.speedStat || 1).toFixed(1)}x)`;
        }
        if (this.moneyElement) {
          this.moneyElement.textContent = `💰 Money: $${Math.floor(player.money || 0).toLocaleString()}`;
        }
        if (this.carriedEggElement) {
          if (player.carriedEggTier && EGG_TIERS[player.carriedEggTier]) {
            const tierConfig = EGG_TIERS[player.carriedEggTier];
            this.carriedEggElement.innerHTML = `🥚 Egg: <span style="color: ${tierConfig.color}; font-weight: 800;">${tierConfig.name}</span>`;
          } else {
            this.carriedEggElement.textContent = "🥚 Egg: None";
          }
        }
        if (this.incubatorInfoElement) {
          const incCount = player.incubatorEggs ? player.incubatorEggs.length : 0;
          const maxCapacity = BASE_UPGRADES[Math.min(BASE_UPGRADES.length - 1, (player.baseTier || 1) - 1)]?.multiplier || 3;
          let timerText = "";
          if (incCount > 0) {
            const minTime = Math.min(...Array.from(player.incubatorEggs).map((e: any) => e.hatchTimeRemaining));
            timerText = ` (${Math.max(0, minTime).toFixed(0)}s)`;
          }
          this.incubatorInfoElement.textContent = `🐣 Incubator: ${incCount}/${maxCapacity}${timerText}`;
        }
        if (this.treadmillIndicatorElement) {
          if (player.onTreadmill) {
            this.treadmillIndicatorElement.classList.remove("hidden");
            const tmTier = player.treadmillTier || 1;
            const tmMult = TREADMILL_UPGRADES[tmTier - 1]?.multiplier || 1.0;
            const rate = (0.5 * tmMult * (player.equippedAngelicTreadmill ? 3.0 : 1.0)).toFixed(1);
            this.treadmillIndicatorElement.textContent = `🔥 Treadmill (T${tmTier}): +${rate} speed/s`;
          } else {
            this.treadmillIndicatorElement.classList.add("hidden");
          }
        }

        // Active Pets Panel Update
        const petsArr = player.pets ? Array.from(player.pets) as unknown as Pet[] : [];
        const maxPetSlots = player.maxPetSlots || 6;
        if (this.petsCountTitleElement) {
          this.petsCountTitleElement.textContent = `🐾 Active Pets (${petsArr.length}/${maxPetSlots})`;
        }
        if (this.petsListContainerElement) {
          if (petsArr.length === 0) {
            this.petsListContainerElement.innerHTML = `<div class="empty-pets">No pets hatched yet! Hatch eggs in incubator.</div>`;
          } else {
            this.petsListContainerElement.innerHTML = "";
            petsArr.forEach((pet) => {
              const tierConfig = EGG_TIERS[pet.rarity] || EGG_TIERS.common;
              const row = document.createElement("div");
              row.className = "pet-row";
              const mutPrefix = pet.mutation !== "none" ? `[${pet.mutation.toUpperCase()}] ` : "";
              const sizePrefix = pet.size !== "normal" ? `[${pet.size.toUpperCase()}] ` : "";
              row.innerHTML = `
                <span class="pet-name-tag" style="color: ${tierConfig.color}">${sizePrefix}${mutPrefix}${pet.name}</span>
                <span class="pet-income-tag">+$${pet.moneyPerSec.toFixed(0)}/s</span>
              `;
              this.petsListContainerElement?.appendChild(row);
            });
          }
        }

        // Celebration Modal
        if (player.lastHatchedReward) {
          try {
            const rewardObj = JSON.parse(player.lastHatchedReward);
            if (rewardObj.timestamp && rewardObj.timestamp > this.lastHandledRewardTimestamp) {
              this.lastHandledRewardTimestamp = rewardObj.timestamp;
              if (this.rewardModalElement && this.rewardTitleElement && this.rewardRarityElement) {
                this.rewardTitleElement.textContent = rewardObj.name;
                this.rewardRarityElement.textContent = (rewardObj.rarity || "RARE").toUpperCase();
                this.rewardModalElement.classList.remove("hidden");
              }
            }
          } catch (e) {
            // ignore
          }
        }

        if (this.shopModalElement && !this.shopModalElement.classList.contains("hidden")) {
          this.renderShopContent();
        }
      };

      this.room.onStateChange((state: GameState) => {
        if (!state) return;

        if (state.mapEggs) {
          this.sceneManager.syncMapEggs(state.mapEggs as unknown as Map<string, any>);
        }

        if (state.players) {
          this.sceneManager.syncPets(state.players as unknown as Map<string, any>);

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
              player.speedStat,
              player.carriedEggTier,
              player.equippedDivineTrail,
              {
                skinId: player.skinId,
                hatId: player.hatId,
                hairId: player.hairId,
                faceId: player.faceId,
                shirtId: player.shirtId,
                pantsId: player.pantsId,
              }
            );
            if (sessionId === this.localSessionId) updateLocalHUD(player);
          });
          this.updatePlayerCount();
        }
      });

      this.updatePlayerCount();

      this.room.onLeave((code) => {
        if (this.statusElement) {
          this.statusElement.textContent = "🔴 Disconnected from server";
          this.statusElement.className = "disconnected";
        }
      });

    } catch (error) {
      console.error("Failed to connect to Colyseus room:", error);
      if (this.statusElement) {
        this.statusElement.textContent = "❌ Connection Failed";
        this.statusElement.className = "disconnected";
      }
    }
  }

  private renderShopContent() {
    if (!this.shopContentElement || !this.room || !this.localSessionId) return;

    const playersMap = this.room.state.players as unknown as Map<string, Player>;
    const localPlayer = playersMap.get(this.localSessionId);
    if (!localPlayer) return;

    this.shopContentElement.innerHTML = "";

    if (this.currentShopTab === "treadmills") {
      TREADMILL_UPGRADES.forEach((item) => {
        const isCurrent = localPlayer.treadmillTier === item.tier;
        const isNext = item.tier === localPlayer.treadmillTier + 1;
        const canAfford = localPlayer.money >= item.cost;

        const row = document.createElement("div");
        row.className = "upgrade-item";
        row.innerHTML = `
          <div class="upgrade-info">
            <div class="upgrade-name">${item.name} ${isCurrent ? " (EQUIPPED)" : ""}</div>
            <div class="upgrade-desc">Speed Gain Multiplier: ${item.multiplier}x</div>
          </div>
          <button class="buy-btn" ${!isNext || !canAfford ? "disabled" : ""}>
            ${isCurrent ? "EQUIPPED" : item.tier < localPlayer.treadmillTier ? "UNLOCKED" : `$${item.cost.toLocaleString()}`}
          </button>
        `;

        if (isNext) {
          const btn = row.querySelector(".buy-btn");
          btn?.addEventListener("click", () => {
            this.room?.send("buyTreadmill");
          });
        }
        this.shopContentElement?.appendChild(row);
      });
    } else if (this.currentShopTab === "bases") {
      BASE_UPGRADES.forEach((item) => {
        const isCurrent = localPlayer.baseTier === item.tier;
        const isNext = item.tier === localPlayer.baseTier + 1;
        const canAfford = localPlayer.money >= item.cost;

        const row = document.createElement("div");
        row.className = "upgrade-item";
        row.innerHTML = `
          <div class="upgrade-info">
            <div class="upgrade-name">${item.name} ${isCurrent ? " (ACTIVE)" : ""}</div>
            <div class="upgrade-desc">Incubator Capacity: ${item.multiplier} Eggs</div>
          </div>
          <button class="buy-btn" ${!isNext || !canAfford ? "disabled" : ""}>
            ${isCurrent ? "ACTIVE" : item.tier < localPlayer.baseTier ? "UNLOCKED" : `$${item.cost.toLocaleString()}`}
          </button>
        `;

        if (isNext) {
          const btn = row.querySelector(".buy-btn");
          btn?.addEventListener("click", () => {
            this.room?.send("buyBaseUpgrade");
          });
        }
        this.shopContentElement?.appendChild(row);
      });
    } else if (this.currentShopTab === "pets") {
      PET_SLOT_UPGRADES.forEach((item) => {
        const isCurrent = localPlayer.maxPetSlots === item.multiplier;
        const isNext = item.multiplier > localPlayer.maxPetSlots && (!PET_SLOT_UPGRADES.find(u => u.multiplier > localPlayer.maxPetSlots && u.multiplier < item.multiplier));
        const canAfford = localPlayer.money >= item.cost;

        const row = document.createElement("div");
        row.className = "upgrade-item";
        row.innerHTML = `
          <div class="upgrade-info">
            <div class="upgrade-name">${item.name} ${isCurrent ? " (CURRENT)" : ""}</div>
            <div class="upgrade-desc">Active Pet Slots: ${item.multiplier} Pets</div>
          </div>
          <button class="buy-btn" ${!isNext || !canAfford ? "disabled" : ""}>
            ${isCurrent ? "CURRENT" : item.multiplier < localPlayer.maxPetSlots ? "UNLOCKED" : `$${item.cost.toLocaleString()}`}
          </button>
        `;

        if (isNext) {
          const btn = row.querySelector(".buy-btn");
          btn?.addEventListener("click", () => {
            this.room?.send("buyPetSlot");
          });
        }
        this.shopContentElement?.appendChild(row);
      });
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
