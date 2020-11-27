enum timeunit {
  hour = 3600000,
  min = 60000,
  sec = 1000
}

class RgbTime {
  constructor(public root: HTMLElement){
    //calling backgroundChange() once, so the inital-background, doesnt have to wait for the interval
    this.backgroundChange();
    this.builder();
    this.interval();
  }

  timeToColorStr(timeNumber: number): String {
    let value = Math.floor(Date.now() / timeNumber) % 510;
    value = value > 255 ? 255 - (value - 255) : value;
    return value.toString().padStart(3, "0");
  }

  get red(): String {
    return this.timeToColorStr(timeunit.hour);
  }
  get green(): String {
    return this.timeToColorStr(timeunit.min);
  }
  get blue(): String {
    return this.timeToColorStr(timeunit.sec);
  }

  backgroundChange(): void {
    this.root.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  builder(): void {
    this.root.innerHTML = `
      <div id="timeContainer">
        <div id="timeDisplay">#
        <div>
      </div>
      `
    this.updateDisplay();
  }

  updateDisplay(): void {
    const timeDisplay = document.getElementById("timeDisplay");
    if (timeDisplay) {
      timeDisplay.innerHTML = `RGB(${this.red},${this.green},${this.blue})`;
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