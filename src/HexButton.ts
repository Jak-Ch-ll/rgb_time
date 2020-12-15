class HexButton {
  constructor(public button: HTMLElement, public generator: RGBGenerator) {
    this.initiateHexButton();
  }

  private toHex = (num: number): string => {
    return num.toString(16).padStart(2, "0");
  };

  get red(): string {
    return this.toHex(this.generator.red);
  }
  get green(): string {
    return this.toHex(this.generator.green);
  }
  get blue(): string {
    return this.toHex(this.generator.blue);
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
