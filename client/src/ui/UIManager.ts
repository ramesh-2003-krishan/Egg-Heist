import { EventFeed } from "./EventFeed";
import { Leaderboard } from "./Leaderboard";
import { IndexModal } from "./IndexModal";
import { SettingsModal } from "./SettingsModal";
import { TutorialArrows } from "./TutorialArrows";
import { Player, Pet } from "../network/schema/GameState";
import { EGG_TIERS, TREADMILL_UPGRADES, BASE_UPGRADES, PET_SLOT_UPGRADES, GAME_CONFIG } from "../config";

export class UIManager {
  public eventFeed: EventFeed;
  public leaderboard: Leaderboard;
  public indexModal: IndexModal;
  public settingsModal: SettingsModal;
  public tutorialArrows: TutorialArrows;

  private speedStatElement: HTMLElement | null;
  private moneyStatElement: HTMLElement | null;
  private passiveIncomeElement: HTMLElement | null;
  private shopBadgeElement: HTMLElement | null;
  private countdownChipElement: HTMLElement | null;

  private carriedEggBtn: HTMLElement | null;
  private petListBtn: HTMLElement | null;
  private eggPanelModal: HTMLElement | null;
  private eggPanelContent: HTMLElement | null;

  private activeSlotIndex: number = 1;
  private previousEggTier: string = "";

  constructor() {
    this.eventFeed = new EventFeed();
    this.leaderboard = new Leaderboard();
    this.indexModal = new IndexModal();
    this.settingsModal = new SettingsModal();
    this.tutorialArrows = new TutorialArrows();

    this.speedStatElement = document.getElementById("hud-speed-val");
    this.moneyStatElement = document.getElementById("hud-money-val");
    this.passiveIncomeElement = document.getElementById("hud-passive-income");
    this.shopBadgeElement = document.getElementById("shop-badge");
    this.countdownChipElement = document.getElementById("countdown-timer-text");

    this.carriedEggBtn = document.getElementById("btn-carried-egg");
    this.petListBtn = document.getElementById("btn-pet-list");
    this.eggPanelModal = document.getElementById("egg-status-modal");
    this.eggPanelContent = document.getElementById("egg-status-content");

    this.setupHotbar();
    this.setupPanelEvents();
  }

  private setupHotbar() {
    const slots = document.querySelectorAll(".hotbar-slot");
    slots.forEach((slot) => {
      slot.addEventListener("click", (e) => {
        const slotNum = parseInt((e.currentTarget as HTMLElement).getAttribute("data-slot") || "1", 10);
        this.setActiveHotbarSlot(slotNum);
      });
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "1") this.setActiveHotbarSlot(1);
      if (e.key === "2") this.setActiveHotbarSlot(2);
      if (e.key === "3") this.setActiveHotbarSlot(3);
    });
  }

  private setActiveHotbarSlot(num: number) {
    this.activeSlotIndex = num;
    const slots = document.querySelectorAll(".hotbar-slot");
    slots.forEach((slot) => {
      const sNum = parseInt(slot.getAttribute("data-slot") || "1", 10);
      slot.classList.toggle("active", sNum === num);
    });
  }

  private setupPanelEvents() {
    if (this.carriedEggBtn && this.eggPanelModal) {
      this.carriedEggBtn.addEventListener("click", () => {
        this.eggPanelModal?.classList.toggle("hidden");
      });
    }

    const eggCloseBtn = document.getElementById("egg-status-close-btn");
    if (eggCloseBtn) {
      eggCloseBtn.addEventListener("click", () => {
        this.eggPanelModal?.classList.add("hidden");
      });
    }
  }

  public triggerRedAlertEffect(count: number, max: number, reason: string) {
    this.playRedAlertSound();
    this.triggerRedFlash();
    this.eventFeed.addMessage(`🚨 RED ALERT! (${count}/${max}) - ${reason}`, "epic");
  }

  public playRedAlertSound() {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.25);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.5);

      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
      // Ignore browser autoplay policy restrictions
    }
  }

  public triggerRedFlash() {
    let flashEl = document.getElementById("red-alert-flash-overlay");
    if (!flashEl) {
      flashEl = document.createElement("div");
      flashEl.id = "red-alert-flash-overlay";
      flashEl.style.position = "fixed";
      flashEl.style.top = "0";
      flashEl.style.left = "0";
      flashEl.style.width = "100vw";
      flashEl.style.height = "100vh";
      flashEl.style.pointerEvents = "none";
      flashEl.style.backgroundColor = "rgba(239, 68, 68, 0.4)";
      flashEl.style.boxShadow = "inset 0 0 120px rgba(220, 38, 38, 0.95)";
      flashEl.style.zIndex = "999999";
      flashEl.style.transition = "opacity 0.5s ease-out";
      document.body.appendChild(flashEl);
    }
    flashEl.style.opacity = "1";
    setTimeout(() => {
      if (flashEl) flashEl.style.opacity = "0";
    }, 120);
  }

  public updatePlayerHUD(player: Player, playersMap: Map<string, Player>, localSessionId: string | null) {
    this.leaderboard.update(playersMap, localSessionId);

    if (this.speedStatElement) {
      this.speedStatElement.textContent = `${(player.speed || 10).toFixed(1)} (${(player.speedStat || 1).toFixed(1)}x)`;
    }
    if (this.moneyStatElement) {
      this.moneyStatElement.textContent = `$${Math.floor(player.money || 0).toLocaleString()}`;
    }

    // Update Red Alert & Frozen Status Display
    const redAlerts = (player as any).redAlerts || 0;
    const frozenSecs = (player as any).frozenTimer || 0;

    let alertHudEl = document.getElementById("hud-red-alert-indicator");
    if (!alertHudEl) {
      const topBar = document.getElementById("hud-top-bar") || document.body;
      alertHudEl = document.createElement("div");
      alertHudEl.id = "hud-red-alert-indicator";
      alertHudEl.style.fontSize = "13px";
      alertHudEl.style.fontWeight = "bold";
      alertHudEl.style.marginLeft = "12px";
      alertHudEl.style.display = "flex";
      alertHudEl.style.alignItems = "center";
      alertHudEl.style.gap = "4px";
      topBar.appendChild(alertHudEl);
    }

    if (frozenSecs > 0) {
      const mins = Math.floor(frozenSecs / 60);
      const secs = Math.floor(frozenSecs % 60).toString().padStart(2, "0");
      alertHudEl.innerHTML = `<span style="background: rgba(220, 38, 38, 0.9); color: white; padding: 4px 10px; border-radius: 8px; font-weight: bold; font-size: 14px;">❄️ FROZEN (${mins}:${secs})</span>`;
    } else if (redAlerts > 0) {
      let dots = "";
      for (let i = 0; i < 3; i++) {
        dots += i < redAlerts ? "🔴" : "⚪";
      }
      alertHudEl.innerHTML = `<span style="background: rgba(249, 115, 22, 0.85); color: white; padding: 3px 8px; border-radius: 6px; font-size: 12px;">🚨 Alerts: ${dots}</span>`;
    } else {
      alertHudEl.innerHTML = "";
    }

    let totalIncome = 0;
    if (player.pets) {
      const petsArr = Array.from(player.pets) as unknown as Pet[];
      petsArr.forEach((pet) => {
        totalIncome += pet.moneyPerSec || 0;
      });
    }
    if (this.passiveIncomeElement) {
      if (totalIncome > 0) {
        this.passiveIncomeElement.textContent = `+$${Math.floor(totalIncome)}/s`;
        this.passiveIncomeElement.classList.remove("hidden");
      } else {
        this.passiveIncomeElement.classList.add("hidden");
      }
    }

    const canAffordTreadmill = TREADMILL_UPGRADES.some(
      (u) => u.tier === (player.treadmillTier || 1) + 1 && player.money >= u.cost
    );
    const canAffordBase = BASE_UPGRADES.some(
      (u) => u.tier === (player.baseTier || 1) + 1 && player.money >= u.cost
    );
    const canAffordPets = PET_SLOT_UPGRADES.some(
      (u) => u.multiplier > (player.maxPetSlots || 6) && player.money >= u.cost
    );

    if (this.shopBadgeElement) {
      if (canAffordTreadmill || canAffordBase || canAffordPets) {
        this.shopBadgeElement.classList.remove("hidden");
      } else {
        this.shopBadgeElement.classList.add("hidden");
      }
    }

    const trapCountEl = document.getElementById("hotbar-trap-count");
    if (trapCountEl) {
      trapCountEl.textContent = `(x${player.trapCount ?? 0})`;
    }

    const currentEggTier = player.carriedEggTier || "";
    const carriedPet = (player as any).carriedPet;
    const isEggDeposited = this.previousEggTier !== "" && currentEggTier === "";
    this.previousEggTier = currentEggTier;

    const carriedEggSlot = document.getElementById("hotbar-egg-slot");
    if (carriedEggSlot) {
      if (currentEggTier && EGG_TIERS[currentEggTier]) {
        const tierConfig = EGG_TIERS[currentEggTier];
        carriedEggSlot.innerHTML = `<span class="hotbar-icon">🥚</span> <span style="color: ${tierConfig.color}">${tierConfig.name} Egg</span> <span style="font-size: 10px; color: #cbd5e1;">[G / V]</span>`;
      } else if (carriedPet) {
        const tierConfig = EGG_TIERS[carriedPet.rarity] || EGG_TIERS.common;
        carriedEggSlot.innerHTML = `<span class="hotbar-icon">🐾</span> <span style="color: ${tierConfig.color}">${carriedPet.name}</span> <span style="font-size: 10px; color: #cbd5e1;">[G / E: Sell / F: Base]</span>`;
      } else {
        carriedEggSlot.innerHTML = `<span class="hotbar-icon">🥚</span> <span class="hotbar-empty">Empty</span>`;
      }
    }

    if (this.eggPanelContent) {
      const incCount = player.incubatorEggs ? player.incubatorEggs.length : 0;
      const maxIncCap = BASE_UPGRADES[Math.min(BASE_UPGRADES.length - 1, (player.baseTier || 1) - 1)]?.multiplier || 3;
      let incTimer = "";
      if (incCount > 0) {
        const minSec = Math.min(...Array.from(player.incubatorEggs).map((e: any) => e.hatchTimeRemaining));
        incTimer = ` (${Math.max(0, minSec).toFixed(0)}s remaining)`;
      }

      this.eggPanelContent.innerHTML = `
        <div class="egg-overlay-item">
          <strong>Carried Item:</strong> ${
            currentEggTier && EGG_TIERS[currentEggTier]
              ? `<span style="color: ${EGG_TIERS[currentEggTier].color}">${EGG_TIERS[currentEggTier].name} Egg</span>`
              : carriedPet
              ? `<span style="color: ${EGG_TIERS[carriedPet.rarity]?.color || "#38bdf8"}">Pet ${carriedPet.name}</span>`
              : "None"
          }
        </div>
        <div class="egg-overlay-item">
          <strong>Incubator Eggs:</strong> ${incCount}/${maxIncCap}${incTimer}
        </div>
      `;
    }

    this.tutorialArrows.updateState(Boolean(player.onTreadmill), Boolean(currentEggTier || carriedPet), isEggDeposited);
  }

  public updateDayNightBanner(progress: number) {
    const iconEl = document.getElementById("day-night-icon");
    const textEl = document.getElementById("day-night-text");
    if (!iconEl || !textEl) return;

    if (progress < 0.4) {
      iconEl.textContent = "☀️";
      const secsLeft = Math.floor((0.4 - progress) * 120);
      textEl.textContent = `DAYTIME (${secsLeft}s)`;
    } else if (progress < 0.5) {
      iconEl.textContent = "🌅";
      textEl.textContent = "SUNSET";
    } else if (progress < 0.9) {
      iconEl.textContent = "🌙";
      const secsLeft = Math.floor((0.9 - progress) * 120);
      textEl.textContent = `NIGHTTIME (${secsLeft}s)`;
    } else {
      iconEl.textContent = "🌅";
      textEl.textContent = "SUNRISE";
    }
  }

  public updateCountdownTimer(seconds: number) {
    if (!this.countdownChipElement) return;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    this.countdownChipElement.textContent = `next special egg in ${mins}m ${secs}s`;
  }

  public updateGuardRotationTimer(seconds: number) {
    const textEl = document.getElementById("guard-rotation-timer-text");
    if (!textEl) return;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    textEl.textContent = `Guards change in ${mins}:${secs.toString().padStart(2, "0")}`;
  }

  public showFloatingCashText(amount: number) {
    const el = document.createElement("div");
    el.className = "floating-cash-text";
    el.textContent = `+$${amount.toLocaleString()}`;
    el.style.left = `${window.innerWidth / 2 + (Math.random() - 0.5) * 100}px`;
    el.style.top = `${window.innerHeight / 2 - 50 + (Math.random() - 0.5) * 40}px`;
    document.body.appendChild(el);
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 1200);
  }

  public playCashChimeSound() {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.setValueAtTime(880.00, audioCtx.currentTime + 0.1); // A5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } catch (e) {
      // AudioContext fallback
    }
  }

  public updateShopStorageModal(player: Player, sendCallback: (msg: string, data?: any) => void) {
    const modal = document.getElementById("shop-storage-modal");
    const content = document.getElementById("shop-storage-content");
    const closeBtn = document.getElementById("shop-storage-close-btn");

    if (closeBtn) {
      closeBtn.onclick = () => modal?.classList.add("hidden");
    }

    if (!modal || !content) return;

    const shopPetsArray: any[] = (player as any).shopPets ? Array.from((player as any).shopPets) : [];

    if (shopPetsArray.length === 0) {
      content.innerHTML = `<div style="text-align: center; color: #94a3b8; padding: 24px; font-size: 14px;">Your Shop Storage is empty! Store pets here by carrying them to the central Sell Stall.</div>`;
      return;
    }

    content.innerHTML = "";
    shopPetsArray.forEach((pet) => {
      if (!pet) return;

      const itemCard = document.createElement("div");
      itemCard.className = "shop-storage-item";

      const basePrice = (GAME_CONFIG as any).PET_SELL_BASE_PRICES?.[pet.rarity] || 100;
      const sizeMult = (GAME_CONFIG as any).PET_SIZE_MULTIPLIERS?.[pet.size] || 1.0;
      const mutMult = (GAME_CONFIG as any).PET_MUTATION_MULTIPLIERS?.[pet.mutation] || 1.0;
      const finalPrice = Math.floor(basePrice * sizeMult * mutMult);

      const rarityColors: Record<string, string> = {
        common: "#94a3b8",
        rare: "#3b82f6",
        epic: "#a855f7",
        secret: "#ef4444",
        eternal: "#f59e0b",
        divine: "#ec4899",
      };
      const badgeBg = rarityColors[pet.rarity] || "#94a3b8";

      itemCard.innerHTML = `
        <div class="shop-pet-info">
          <div class="shop-pet-name-row">
            <span class="shop-pet-name">${pet.name || "Pet"}</span>
            <span class="shop-pet-badge" style="background: ${badgeBg}; color: white;">${(pet.rarity || "common").toUpperCase()}</span>
          </div>
          <div class="shop-pet-details">Size: ${pet.size || "normal"} • Mutation: ${pet.mutation || "none"} • +$${(pet.moneyPerSec || 1).toFixed(1)}/s</div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div class="shop-pet-price">+$${finalPrice.toLocaleString()}</div>
          <div class="shop-pet-actions">
            <button class="sell-confirm-btn" data-petid="${pet.id}">SELL ($${finalPrice.toLocaleString()})</button>
            <button class="keep-pet-btn" data-petid="${pet.id}">KEEP (Income)</button>
          </div>
        </div>
      `;

      const sellBtn = itemCard.querySelector(".sell-confirm-btn") as HTMLButtonElement;
      if (sellBtn) {
        sellBtn.onclick = () => {
          sellBtn.disabled = true;
          sellBtn.textContent = "SELLING...";
          sellBtn.style.opacity = "0.7";
          setTimeout(() => {
            sendCallback("sellShopPet", { petId: pet.id });
          }, 1000); // 1-second sell animation
        };
      }

      const keepBtn = itemCard.querySelector(".keep-pet-btn") as HTMLButtonElement;
      if (keepBtn) {
        keepBtn.onclick = () => {
          sendCallback("keepShopPet", { petId: pet.id });
        };
      }

      content.appendChild(itemCard);
    });
  }

  public updateInteractionPrompt(player: Player, mapEggs: Map<string, any>) {
    const promptContainer = document.getElementById("interaction-prompt-container");
    const promptText = document.getElementById("interaction-prompt-text");
    if (!promptContainer || !promptText) return;

    // 1. If frozen or locked: hide prompt
    const frozenSecs = (player as any).frozenTimer || 0;
    if (frozenSecs > 0) {
      promptContainer.classList.add("hidden");
      return;
    }

    // Check distance to Market Sell Stall
    const stallPos = GAME_CONFIG.MARKET_STALL_POS;
    const distToStall = Math.hypot(player.x - stallPos.x, player.z - stallPos.z);

    // 2. If carrying a PET
    if (player.carriedPet) {
      promptContainer.classList.remove("hidden", "guarded");
      if (distToStall <= GAME_CONFIG.MARKET_STALL_RADIUS) {
        promptText.textContent = "Press G to store pet in shop";
      } else {
        promptText.textContent = "Press G to drop pet";
      }
      return;
    }

    // 3. If carrying an EGG
    if (player.carriedEggTier) {
      if (player.baseIndex >= 0 && player.baseIndex < GAME_CONFIG.BASE_POSITIONS.length) {
        const basePos = GAME_CONFIG.BASE_POSITIONS[player.baseIndex];
        const incX = basePos.x + GAME_CONFIG.INCUBATOR_OFFSET.x;
        const incZ = basePos.z + GAME_CONFIG.INCUBATOR_OFFSET.z;
        const distToInc = Math.hypot(player.x - incX, player.z - incZ);

        if (distToInc <= 3.5) {
          promptContainer.classList.remove("hidden", "guarded");
          promptText.textContent = "Press G to drop egg";
          return;
        }
      }
      promptContainer.classList.add("hidden");
      return;
    }

    // 4. Check standing near ground pets
    const groundPets = (player as any).groundPets ? Array.from((player as any).groundPets) : [];
    let closestGroundPet: any = null;
    let closestPetDist = 3.5;
    groundPets.forEach((p: any) => {
      if (!p || !p.isGroundPet) return;
      const dist = Math.hypot(player.x - p.x, player.z - p.z);
      if (dist <= closestPetDist) {
        closestPetDist = dist;
        closestGroundPet = p;
      }
    });

    if (closestGroundPet) {
      promptContainer.classList.remove("hidden", "guarded");
      promptText.textContent = `Press E to carry ${closestGroundPet.name || "pet"}`;
      return;
    }

    // 5. Check closest map egg within pickup range (3.5 units)
    let closestEgg: any = null;
    let closestDist = 3.5;

    mapEggs.forEach((egg) => {
      if (!egg || egg.dropCooldown > 0) return;
      const dist = Math.hypot(player.x - egg.x, player.z - egg.z);
      if (dist <= closestDist) {
        closestDist = dist;
        closestEgg = egg;
      }
    });

    if (closestEgg) {
      promptContainer.classList.remove("hidden");
      if (closestEgg.isGuarded) {
        promptContainer.classList.add("guarded");
        promptText.textContent = "Press E to carry egg (guarded!)";
      } else {
        promptContainer.classList.remove("guarded");
        promptText.textContent = "Press E to carry egg";
      }
      return;
    }

    // Default: hide prompt if no valid interaction context
    promptContainer.classList.add("hidden");
  }
}
