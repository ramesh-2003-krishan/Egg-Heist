import { EGG_TIERS } from "../config";

export class IndexModal {
  private modalElement: HTMLElement | null;
  private closeBtnElement: HTMLElement | null;
  private openBtnElement: HTMLElement | null;
  private contentElement: HTMLElement | null;

  constructor(
    modalId: string = "index-modal",
    openBtnId: string = "open-index-btn",
    closeBtnId: string = "index-close-btn",
    contentId: string = "index-content"
  ) {
    this.modalElement = document.getElementById(modalId);
    this.openBtnElement = document.getElementById(openBtnId);
    this.closeBtnElement = document.getElementById(closeBtnId);
    this.contentElement = document.getElementById(contentId);

    if (this.openBtnElement) {
      this.openBtnElement.addEventListener("click", () => this.open());
    }
    if (this.closeBtnElement) {
      this.closeBtnElement.addEventListener("click", () => this.close());
    }
  }

  public open() {
    this.renderContent();
    this.modalElement?.classList.remove("hidden");
  }

  public close() {
    this.modalElement?.classList.add("hidden");
  }

  private renderContent() {
    if (!this.contentElement) return;

    this.contentElement.innerHTML = `
      <div class="index-section-title">🥚 Egg Discovery & Tiers</div>
      <div class="index-grid">
        ${Object.values(EGG_TIERS)
          .map(
            (tier) => `
          <div class="index-card" style="border-color: ${tier.color}">
            <div class="index-card-header" style="background-color: ${tier.color}33">
              <span class="index-card-title" style="color: ${tier.color}">${tier.name}</span>
              <span class="index-card-weight">Spawn: ${tier.spawnWeight}%</span>
            </div>
            <div class="index-card-body">
              <div>⏱️ Hatch Time: <strong>${tier.hatchTimeSec}s</strong></div>
              <div>💰 Pet Multiplier: <strong>${tier.moneyMultiplier}x</strong></div>
              <div>⚖️ Weight Slowdown: <strong>${tier.weightMultiplier}x</strong></div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="index-section-title" style="margin-top: 20px;">🐾 Pet Rarity & Mutations</div>
      <div class="index-grid">
        <div class="index-card">
          <div class="index-card-header">
            <span class="index-card-title">Pet Mutations</span>
          </div>
          <div class="index-card-body">
            <div>🟡 <strong>Golden</strong>: 2x Income Boost (15% chance)</div>
            <div>🌈 <strong>Rainbow</strong>: 4x Income Boost (8% chance)</div>
            <div>✨ <strong>Shiny</strong>: 8x Income Boost (2% chance)</div>
          </div>
        </div>
        <div class="index-card">
          <div class="index-card-header">
            <span class="index-card-title">Pet Sizes</span>
          </div>
          <div class="index-card-body">
            <div>🔹 <strong>Small</strong>: 0.8x Size & Income (20% chance)</div>
            <div>🟢 <strong>Normal</strong>: 1.0x Standard (70% chance)</div>
            <div>💥 <strong>Giant</strong>: 1.8x Mega Size (10% chance)</div>
          </div>
        </div>
      </div>
    `;
  }
}
