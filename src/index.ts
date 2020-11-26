enum timeunit {
  hour = 3600000,
  min = 60000,
  sec = 1000
}

class rgbTime {
  constructor(public root: HTMLElement){
    this.backgroundChange();
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
    setInterval(() => {
      this.root.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`
    }, 500)
  }

}

const main = () => {
  const body = document.querySelector("body");
  if (body) {
    new rgbTime(body);
  }
}

main();




