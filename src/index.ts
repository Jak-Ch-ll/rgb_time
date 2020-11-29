enum timeunit {
  hour = 3600000,
  min = 60000,
  sec = 1000
}

class RgbTime {
  constructor(public root: HTMLElement){
    //calling backgroundChange() once, so the inital-background doesnt have to wait for the interval
    this.backgroundChange();
    this.builder();
    this.interval();
    this.initiateHexButton();
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

  // changes bg to the rgb-values
  backgroundChange(): void {
    this.root.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  // creates the outer part of the "clock"
  builder(): void {
    this.root.innerHTML = `
      <div id="clockContainer">
        <div>rgb(<span id="clockFace"></span>)</div>
      </div>
      `
    this.updateDisplay();
  }

  // Updates clockface (the visible RGB)
  updateDisplay(): void {
    const clockFace = document.getElementById("clockFace");
    if (clockFace) {
      clockFace.innerHTML = `${this.red},${this.green},${this.blue}`;
    }
  }

  // Continues Update Function
  interval(): void {
    setInterval(() => {
      this.backgroundChange();
      this.updateDisplay();
    }, 1000);
  }

  // creates button and click event
  initiateHexButton(): void {
    const clockContainer = document.getElementById("clockContainer");
    if (clockContainer) {
      const Button = document.createElement("button");
      Button.innerHTML = "Copy Hex"

      const hexRed = (+this.red).toString(16);
      const hexGreen = (+this.green).toString(16);
      const hexBlue = (+this.blue).toString(16);

      Button.addEventListener("click", () => {
        navigator.clipboard.writeText("#" + hexRed + hexGreen + hexBlue)
      })
      clockContainer.appendChild(Button);
    }
  }
}

const main = () => {
  const root = document.getElementById("root");
  if (root) {
    new RgbTime(root);
  }
  else {
    throw new Error("No element with id 'root' found.")
  }
}

main();


// Funfact: While coding I witnessed RGB(0,0,0) on the 27.11.2020 at 19:00 GMT+1