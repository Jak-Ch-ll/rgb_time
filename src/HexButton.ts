class HexButton {
  constructor(public button: HTMLElement, public generator: RGBGenerator) {
    this.initiateHexButton();
  }

  get red(): string {
    return this.generator.red.toString(16);
  }
  get green(): string {
    return this.generator.green.toString(16);
  }
  get blue(): string {
    return this.generator.blue.toString(16);
  }

  initiateHexButton(): void {
    this.button.addEventListener("click", () => {
      console.log(
        this.generator.red,
        this.generator.green,
        this.generator.blue
      );
      navigator.clipboard.writeText("#" + this.red + this.green + this.blue);
    });
  }
}
