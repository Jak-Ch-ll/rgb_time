import { HexButton } from "./HexButton";
import { RGBClock } from "./RGBClock";
import { RGBTimeGenerator } from "./RGBTimeGenerator";

import "./css/main.scss";
import { HideButton } from "./HideButton";

const main = (
  clockfaceID: string,
  backgroundID: string,
  hexButtonID: string,
  hideButtonID: string
): void => {
  const clockface = document.getElementById(clockfaceID);
  const background = document.getElementById(backgroundID);
  const hexButton = document.getElementById(hexButtonID);
  const hideButton = document.getElementById(hideButtonID);
  const hideables = document.querySelectorAll(".hideable");

  const generator = new RGBTimeGenerator();

  if (clockface && background) {
    new RGBClock(clockface, background, generator);
  } else {
    throw new Error(`No element with id ${clockface} found!`);
  }

  if (hexButton) {
    new HexButton(hexButton, generator);
  } else {
    throw new Error("Button with id testbutton not found");
  }

  if (hideButton && hideables.length > 0) {
    new HideButton(hideButton, hideables);
  } else {
    throw new Error("Either no hidebutton or no hideables found");
  }
};

main("clocktime", "background", "hexButton", "hideButton");

// Funfact: While coding I witnessed RGB(0,0,0) on the 27.11.2020 at 19:00 GMT+1
