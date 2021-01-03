import { HexButton } from "./HexButton";
import { RGBClock } from "./RGBClock";
import { RGBTimeGenerator } from "./RGBTimeGenerator";

import "./css/main.scss";
import { HideButton } from "./HideButton";

const main = (): void => {
  const getEl = (id: string): HTMLElement => {
    const el = document.getElementById(id);

    if (!el) throw new Error(`No element with id '${id}' found!`);
    return el;
  };

  const getEls = (className: string): NodeListOf<Element> => {
    const els = document.querySelectorAll(`.${className}`);

    if (els.length === 0)
      throw new Error(`No element with class '${className} found!`);
    return els;
  };

  const generator = new RGBTimeGenerator();

  const clockface = getEl("clocktime");
  const background = getEl("background");
  new RGBClock(clockface, background, generator);

  const hexButton = getEl("hexButton");
  new HexButton(hexButton, generator);

  const hideButton = getEl("hideButton");
  const hideables = getEls("hideable");
  new HideButton(hideButton, hideables);
};

main();

// Funfact: While coding I witnessed RGB(0,0,0) on the 27.11.2020 at 19:00 GMT+1
