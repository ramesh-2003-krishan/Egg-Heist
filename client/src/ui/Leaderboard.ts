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

    const players: Array<{ id: string; player: Player; income: number }> = [];

    playersMap.forEach((player, id) => {
      let income = 0;
      if (player.pets) {
        player.pets.forEach((pet) => {
          income += pet.moneyPerSec || 0;
        });
      }
      players.push({ id, player, income });
    });

    // Sort by Money/s descending
    players.sort((a, b) => b.income - a.income);

    if (this.countSpanElement) {
      this.countSpanElement.textContent = `People (${players.length})`;
    }

    this.listElement.innerHTML = "";

    players.forEach((entry, index) => {
      const isLocal = entry.id === localSessionId;
      const row = document.createElement("div");
      row.className = `leaderboard-row ${isLocal ? "local-player" : ""}`;

      const displayName = entry.player.name || `Player_${entry.id.slice(0, 4)}`;
      const speedText = (entry.player.speed || 10).toFixed(1);
      const incomeText = `$${Math.floor(entry.income)}/s`;

      row.innerHTML = `
        <span class="lb-rank">#${index + 1}</span>
        <span class="lb-name" title="${displayName}">${displayName}${isLocal ? " (You)" : ""}</span>
        <span class="lb-income">${incomeText}</span>
        <span class="lb-speed">⚡${speedText}</span>
      `;

      this.listElement?.appendChild(row);
    });
  }
}
