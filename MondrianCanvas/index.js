import MondrianCanvas from "./js/MondrianCanvas.js";
import { selector } from "./js/constants.js";

let containers;

window.onload = () => {
  containers = document.querySelectorAll(selector);
  containers.forEach((container) => {
    new MondrianCanvas(container);
  });
};

window.onresize = () => {
  containers.forEach((container) => {
    const newWidth = window.getComputedStyle(container)["width"];
    const newHeight = window.getComputedStyle(container)["height"];
    if (container.children[0].style.width !== newWidth) {
      container.children[0].style.width = newWidth;
    }
    if (container.children[0].style.height !== newHeight) {
      container.children[0].style.height = newHeight;
    }
  });
};
