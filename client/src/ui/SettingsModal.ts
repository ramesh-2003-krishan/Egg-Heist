export class SettingsModal {
  private modalElement: HTMLElement | null;
  private closeBtnElement: HTMLElement | null;
  private openBtnElement: HTMLElement | null;
  private volumeSliderElement: HTMLInputElement | null;
  private masterVolume: number = 0.8;

  constructor(
    modalId: string = "settings-modal",
    openBtnId: string = "open-settings-btn",
    closeBtnId: string = "settings-close-btn",
    volumeSliderId: string = "volume-slider"
  ) {
    this.modalElement = document.getElementById(modalId);
    this.openBtnElement = document.getElementById(openBtnId);
    this.closeBtnElement = document.getElementById(closeBtnId);
    this.volumeSliderElement = document.getElementById(volumeSliderId) as HTMLInputElement;

    if (this.openBtnElement) {
      this.openBtnElement.addEventListener("click", () => this.open());
    }
    if (this.closeBtnElement) {
      this.closeBtnElement.addEventListener("click", () => this.close());
    }

    if (this.volumeSliderElement) {
      this.volumeSliderElement.value = "80";
      this.volumeSliderElement.addEventListener("input", (e) => {
        const val = parseInt((e.target as HTMLInputElement).value, 10);
        this.masterVolume = val / 100;
        // Optionally set global Web Audio gain node
        if (window.AudioContext || (window as any).webkitAudioContext) {
          // audio volume update hook
        }
      });
    }
  }

  public open() {
    this.modalElement?.classList.remove("hidden");
  }

  public close() {
    this.modalElement?.classList.add("hidden");
  }

  public getVolume(): number {
    return this.masterVolume;
  }
}
