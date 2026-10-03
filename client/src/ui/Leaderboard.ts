import { Player } from "../network/schema/GameState";

export class Leaderboard {
  private panelElement: HTMLElement | null;
  private listElement: HTMLElement | null;
  private toggleBtnElement: HTMLElement | null;
  private countSpanElement: HTMLElement | null;
  private isVisible: boolean = true;

  constructor(
    panelId: string = "leaderboard-panel",
    listId: string = "leaderboard-list",
    toggleId: string = "leaderboard-toggle-btn",
    countId: string = "leaderboard-player-count"
  ) {
    this.panelElement = document.getElementById(panelId);
    this.listElement = document.getElementById(listId);
    this.toggleBtnElement = document.getElementById(toggleId);
    this.countSpanElement = document.getElementById(countId);

    if (this.toggleBtnElement && this.panelElement) {
      this.toggleBtnElement.addEventListener("click", () => {
        this.isVisible = !this.isVisible;
        this.panelElement?.classList.toggle("collapsed", !this.isVisible);
        this.toggleBtnElement!.textContent = this.isVisible ? "✕" : "📊";
      });
    }
  }

  public update(playersMap: Map<string, Player>, localSessionId: string | null) {
    if (!this.listElement) return;

    const players: Array<{
      id: string;
      player: Player;
      income: number;
      netWorth: number;
      stolenTotal: number;
      hatchedTotal: number;
    }> = [];

    playersMap.forEach((player, id) => {
      let income = 0;
      let petAssetValue = 0;
      if (player.pets) {
        player.pets.forEach((pet) => {
          income += pet.moneyPerSec || 0;
          petAssetValue += (pet.moneyPerSec || 0) * 100;
        });
      }
      const netWorth = (player.money || 0) + petAssetValue;
      const stolenTotal = (player as any).stolenMoneyTotal || 0;
      const hatchedTotal = (player as any).hatchedEggsTotal || 0;

      players.push({ id, player, income, netWorth, stolenTotal, hatchedTotal });
    });

    // Sort by Net Worth descending (or Income)
    players.sort((a, b) => b.netWorth - a.netWorth);

    if (this.countSpanElement) {
      this.countSpanElement.textContent = `Leaderboard (${players.length})`;
    }

    this.listElement.innerHTML = "";

    players.forEach((entry, index) => {
      const isLocal = entry.id === localSessionId;
      const row = document.createElement("div");
      row.className = `leaderboard-row ${isLocal ? "local-player" : ""}`;

      const displayName = entry.player.name || `Player_${entry.id.slice(0, 4)}`;
      const netWorthText = `$${Math.floor(entry.netWorth).toLocaleString()}`;
      const crownTag = index === 0 && entry.netWorth > 0 ? "👑 " : "";

      const alerts = (entry.player as any).redAlerts || 0;
      const frozenSecs = (entry.player as any).frozenTimer || 0;
      let alertTag = "";
      if (frozenSecs > 0) {
        alertTag = ` <span style="color: #ef4444; font-weight: bold;" title="FROZEN">🚨❄️</span>`;
      } else if (alerts > 0) {
        alertTag = ` <span style="color: #f97316; font-weight: bold;" title="${alerts}/3 Red Alerts">🚨(${alerts})</span>`;
      }

      row.innerHTML = `
        <span class="lb-rank">#${index + 1}</span>
        <span class="lb-name" title="${displayName}">${crownTag}${displayName}${alertTag}${isLocal ? " (You)" : ""}</span>
        <span class="lb-income" title="Net Worth">${netWorthText}</span>
        <span class="lb-stats" style="font-size: 11px; opacity: 0.85; margin-left: 6px;">🥷$${entry.stolenTotal} | 🐣${entry.hatchedTotal}</span>
      `;

      this.listElement?.appendChild(row);
    });
  }
}
