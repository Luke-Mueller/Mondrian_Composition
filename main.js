import mkLines from "./utils/mkLines.js";
import mkRects from "./utils/mkRects.js";
import setDimensions from "./utils/setDimensions.js";

const html = document.querySelector("html");
const body = document.querySelector("body");
const canvas = document.querySelector("canvas");

window.onload = () => {
  setDimensions(html, body, canvas);
  const ctx = canvas.getContext("2d");
  mkRects(ctx);
  mkLines(ctx);
};

window.onresize = setDimensions.bind(this, html, body, canvas);
