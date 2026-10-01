export class EventFeed {
  private container: HTMLElement | null;

  constructor(containerId: string = "event-feed-container") {
    this.container = document.getElementById(containerId);
  }

  public addMessage(text: string, rarity: string = "info", durationMs: number = 6000) {
    if (!this.container) return;

    const item = document.createElement("div");
    item.className = `event-feed-pill event-rarity-${rarity.toLowerCase()}`;
    
    // Icon badge based on rarity/type
    let icon = "📢";
    if (rarity === "secret") icon = "🦓";
    else if (rarity === "eternal") icon = "🌈";
    else if (rarity === "divine") icon = "✨";

    item.innerHTML = `<span class="feed-icon">${icon}</span> <span class="feed-text">${text}</span>`;
    
    this.container.appendChild(item);

    // Trigger enter animation
    requestAnimationFrame(() => {
      item.classList.add("show");
    });

    // Fade out and remove after duration
    setTimeout(() => {
      item.classList.remove("show");
      item.classList.add("hide");
      setTimeout(() => {
        item.remove();
      }, 400);
    }, durationMs);
  }
}
