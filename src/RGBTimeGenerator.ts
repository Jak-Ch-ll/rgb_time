enum timeunit {
  hour = 3600000,
  min = 60000,
  sec = 1000,
}

interface RGBGenerator {
  red: number;
  green: number;
  blue: number;
}

class RGBTimeGenerator implements RGBGenerator {
  calcColor(timeNumber: number): number {
    let value = Math.floor(Date.now() / timeNumber) % 510;
    value = value > 255 ? 255 - (value - 255) : value;
    return value;
  }

  get red(): number {
    return this.calcColor(timeunit.hour);
  }
  get green(): number {
    return this.calcColor(timeunit.min);
  }
  get blue(): number {
    return this.calcColor(timeunit.sec);
  }
}
