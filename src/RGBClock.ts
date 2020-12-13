class RGBClock {
  constructor(
    public clockface: HTMLElement,
    public background: HTMLElement,
    public generator: RGBGenerator
  ) {
    //calling backgroundChange() once, so the inital-background doesnt have to wait for the interval
    this.backgroundChange();
    this.builder();
    this.interval();
    // this.initiateHexButton();
  }

  toPaddedString(color: number) {
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
  backgroundChange(): void {
    this.background.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  // creates the outer part of the "clock"
  builder(): void {
    this.clockface.innerHTML = `
      <div id="clockContainer">
        <div>rgb(<span id="clockFace"></span>)</div>
      </div>
      `;
    this.updateDisplay();
  }

  // Updates clockface (the visible RGB)
  updateDisplay(): void {
    this.clockface.innerHTML = `${this.red},${this.green},${this.blue}`;
  }

  // Continues Update Function
  interval(): void {
    setInterval(() => {
      this.backgroundChange();
      this.updateDisplay();
    }, 1000);
  }
}
