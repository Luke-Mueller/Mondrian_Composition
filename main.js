import setDimensions from "./utils/setDimensions.js";

const html = document.querySelector("html");
const body = document.querySelector("body");
const canvas = document.querySelector("canvas");

window.onload = () => {
  setDimensions(html, body, canvas);
  const ctx = canvas.getContext("2d");
};

window.onresize = setDimensions.bind(this, html, body, canvas);
