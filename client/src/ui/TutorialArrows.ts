export class TutorialArrows {
  private treadmillArrowElement: HTMLElement | null;
  private incubatorArrowElement: HTMLElement | null;

  private hasSteppedOnTreadmill: boolean = false;
  private hasDepositedEgg: boolean = false;

  constructor(
    treadmillArrowId: string = "tutorial-treadmill-arrow",
    incubatorArrowId: string = "tutorial-incubator-arrow"
  ) {
    this.treadmillArrowElement = document.getElementById(treadmillArrowId);
    this.incubatorArrowElement = document.getElementById(incubatorArrowId);

    this.hasSteppedOnTreadmill = localStorage.getItem("egg_heist_treadmill_done") === "true";
    this.hasDepositedEgg = localStorage.getItem("egg_heist_incubator_done") === "true";

    this.updateVisibility(false, false);
  }

  public updateState(onTreadmill: boolean, hasCarriedEgg: boolean, isEggDeposited: boolean) {
    // 1. Treadmill check
    if (!this.hasSteppedOnTreadmill && onTreadmill) {
      this.hasSteppedOnTreadmill = true;
      localStorage.setItem("egg_heist_treadmill_done", "true");
    }

    // 2. Incubator check
    if (!this.hasDepositedEgg && hasCarriedEgg && isEggDeposited) {
      this.hasDepositedEgg = true;
      localStorage.setItem("egg_heist_incubator_done", "true");
    }

    const showTreadmillArrow = !this.hasSteppedOnTreadmill;
    const showIncubatorArrow = !this.hasDepositedEgg && hasCarriedEgg;

    this.updateVisibility(showTreadmillArrow, showIncubatorArrow);
  }

  private updateVisibility(showTreadmill: boolean, showIncubator: boolean) {
    if (this.treadmillArrowElement) {
      this.treadmillArrowElement.classList.toggle("hidden", !showTreadmill);
    }
    if (this.incubatorArrowElement) {
      this.incubatorArrowElement.classList.toggle("hidden", !showIncubator);
    }
  }
}
