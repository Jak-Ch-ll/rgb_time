enum timeunit {
  hour = 3600000,
  min = 60000,
  sec = 1000
}

class rgbTime {
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

}

const rgbTest = new rgbTime();

const body = document.querySelector("body");

body?.getAttribute("background");

setInterval(() => {
  if (body) {
    body.style.backgroundColor = `rgb(${rgbTest.red}, ${rgbTest.green}, ${rgbTest.blue})`
  }
}, 500)