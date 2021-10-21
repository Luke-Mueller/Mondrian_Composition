import { defaultColors } from "./constants.js";
import mkRects from "./mkRects.js";
import mkLines from "./mkLines.js";

class MondrianCanvas {
  constructor(container) {
    this.height = window.getComputedStyle(container)["height"];
    this.width = window.getComputedStyle(container)["width"];
    this.colors = defaultColors;
    this.#createCanvas(container);
    this.#drawCanvas();
  }

  #createCanvas(container) {
    // Create canvas
    const canvas = document.createElement("canvas");
    canvas.id = `${container.id}-canvas`;
    canvas.style.height = this.height;
    canvas.style.width = this.width;

    // Append canvas to container
    container.innerHTML = "";
    container.appendChild(canvas);

    // Add canvas to the instance
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  #drawCanvas() {
    // Make rectangles
    mkRects(this.colors, this.ctx);
    // Make lines
    mkLines(this.colors, this.ctx);
  }
}

export default MondrianCanvas;
