class RGBClock {
  constructor(
    public clockface: HTMLElement,
    public background: HTMLElement,
    public generator: RGBTimeGenerator
  ) {
    //calling backgroundChange() once, so the inital-background doesnt have to wait for the interval
    this.backgroundChange();
    this.updateDisplay();
    this.interval();
    // this.initiateHexButton();
  }

  private toPaddedString(color: number) {
    return color.toString().padStart(3, "0");
  }

  get red() {
    return this.toPaddedString(this.generator.red);
  }
  get green() {
    return this.toPaddedString(this.generator.green);
  }
  get blue() {
    return this.toPaddedString(this.generator.blue);
  }

  // changes bg to the rgb-values
  private backgroundChange(): void {
    this.background.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  // Updates clockface (the visible RGB)
  private updateDisplay(): void {
    this.clockface.innerHTML = `${this.red},${this.green},${this.blue}`;
  }

  // Continues Update Function
  private interval(): void {
    const updateAll = () => {
      this.backgroundChange();
      this.updateDisplay();
    };

    updateAll();
    setInterval(() => {
      updateAll();
    }, 1000);
  }
}
