import { HexButton } from "./HexButton";
import { RGBClock } from "./RGBClock";
import { RGBTimeGenerator } from "./RGBTimeGenerator";

import "./css/main.scss";
import { HideUI } from "./HideUI";

const main = (
  clockfaceID: string,
  backgroundID: string,
  hexButtonID: string
): void => {
  const clockface = document.getElementById(clockfaceID);
  const background = document.getElementById(backgroundID);
  const hexButton = document.getElementById(hexButtonID);

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
};

main("clocktime", "background", "hexbutton");

// Funfact: While coding I witnessed RGB(0,0,0) on the 27.11.2020 at 19:00 GMT+1
