import { EventFeed } from "./EventFeed";
import { Leaderboard } from "./Leaderboard";
import { IndexModal } from "./IndexModal";
import { SettingsModal } from "./SettingsModal";
import { TutorialArrows } from "./TutorialArrows";
import { Player, Pet } from "../network/schema/GameState";
import { EGG_TIERS, TREADMILL_UPGRADES, BASE_UPGRADES, PET_SLOT_UPGRADES } from "../config";

export class UIManager {
  public eventFeed: EventFeed;
  public leaderboard: Leaderboard;
  public indexModal: IndexModal;
  public settingsModal: SettingsModal;
  public tutorialArrows: TutorialArrows;

  // DOM Elements
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

  public updatePlayerHUD(player: Player, playersMap: Map<string, Player>, localSessionId: string | null) {
    // 1. Leaderboard Update
    this.leaderboard.update(playersMap, localSessionId);

    // 2. Speed & Money
    if (this.speedStatElement) {
      this.speedStatElement.textContent = `${(player.speed || 10).toFixed(1)} (${(player.speedStat || 1).toFixed(1)}x)`;
    }
    if (this.moneyStatElement) {
      this.moneyStatElement.textContent = `$${Math.floor(player.money || 0).toLocaleString()}`;
    }

    // 3. Passive Income Calculator (+$X/s)
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

    // 4. Shop Affordability Badge (!)
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

    // 5. Carried Egg & Incubator Panel update
    const currentEggTier = player.carriedEggTier || "";
    const isEggDeposited = this.previousEggTier !== "" && currentEggTier === "";
    this.previousEggTier = currentEggTier;

    const carriedEggSlot = document.getElementById("hotbar-egg-slot");
    if (carriedEggSlot) {
      if (currentEggTier && EGG_TIERS[currentEggTier]) {
        const tierConfig = EGG_TIERS[currentEggTier];
        carriedEggSlot.innerHTML = `<span class="hotbar-icon">🥚</span> <span style="color: ${tierConfig.color}">${tierConfig.name}</span>`;
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
          <strong>Carried Egg:</strong> ${
            currentEggTier && EGG_TIERS[currentEggTier]
              ? `<span style="color: ${EGG_TIERS[currentEggTier].color}">${EGG_TIERS[currentEggTier].name}</span>`
              : "None"
          }
        </div>
        <div class="egg-overlay-item">
          <strong>Incubator Eggs:</strong> ${incCount}/${maxIncCap}${incTimer}
        </div>
      `;
    }

    // 6. Tutorial Arrows State Update
    this.tutorialArrows.updateState(Boolean(player.onTreadmill), Boolean(currentEggTier), isEggDeposited);
  }

  public updateCountdownTimer(seconds: number) {
    if (!this.countdownChipElement) return;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    this.countdownChipElement.textContent = `next special egg in ${mins}m ${secs}s`;
  }
}
