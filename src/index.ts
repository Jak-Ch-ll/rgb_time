enum timeunit {
  hour = 3600000,
  min = 60000,
  sec = 1000
}

class RgbTime {
  constructor(public root: HTMLElement){
    this.backgroundChange();
    this.builder();
    this.interval();
  }

  timeToColor(timeNumber: number): number {
    const value = Math.floor(Date.now() / timeNumber) % 510;
    return value > 255 ? 255 - (value - 255) : value;
  }

  get red(): number {
    return this.timeToColor(timeunit.hour);
  }
  get green(): number {
    return this.timeToColor(timeunit.min);
  }
  get blue(): number {
    return this.timeToColor(timeunit.sec);
  }

  backgroundChange(): void {
    this.root.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  builder(): void {
    this.root.innerHTML = `
      <div id="timeContainer">
        <div id="timeDisplay">
          RGB(${this.red}, ${this.green}, ${this.blue})
        <div>
      </div>
      `
  }

  updateDisplay(): void {
    const timeDisplay = document.getElementById("timeDisplay");
    if (timeDisplay) {
      timeDisplay.innerHTML = `RGB(${this.red}, ${this.green}, ${this.blue})`;
    }
  }

  interval(): void {
    setInterval(() => {
      this.backgroundChange();
      this.updateDisplay();
    }, 1000);
  }
}

const main = () => {
  const root = document.getElementById("root");
  if (root) {
    new RgbTime(root);
  }
}

main();


// Funfact: While coding I witnessed RGB(0,0,0) on the 27.11.2020 at 19:00 GMT+1