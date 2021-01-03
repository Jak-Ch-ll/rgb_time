export class HideButton {
  constructor(
    private button: HTMLElement,
    private hideables: NodeListOf<Element>
  ) {
    this.button.addEventListener("click", this.toggleHidden);
  }

  private toggleHidden = (): void => {
    console.log("Toggle visibility");
    this.hideables.forEach(el => el.classList.toggle("hidden"));
  };
}
