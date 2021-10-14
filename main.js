import colors from "./utils/colors.js";
import setDimensions from "./utils/setDimensions.js";

const html = document.querySelector("html");
const body = document.querySelector("body");
const canvas = document.querySelector("canvas");

window.onload = () => {
  setDimensions(html, body, canvas);
  const ctx = canvas.getContext("2d");

  // 1st box
  ctx.fillStyle = colors.gray1;
  ctx.fillRect(0, 0, 68, 17);
  // 2nd box
  ctx.fillStyle = colors.gray2;
  ctx.fillRect(68, 0, 115, 17);
  // 3rd box
  ctx.fillStyle = colors.yellow1;
  ctx.fillRect(183, 0, 103, 55);
  // 4th box
  ctx.fillStyle = colors.gray3;
  ctx.fillRect(286, 0, 14, 112);
  // 5th box
  ctx.fillStyle = colors.gray4;
  ctx.fillRect(0, 17, 30, 41);
  // 6th box
  ctx.fillStyle = colors.red1;
  ctx.fillRect(36, 20, 148, 75);
  // 7th box
  ctx.fillStyle = colors.gray5;
  ctx.fillRect(0, 58, 31, 54);
  // 8th box
  ctx.fillStyle = colors.gray6;
  ctx.fillRect(190, 57.5, 90, 55);
  // 9th box
  ctx.fillStyle = colors.gray8;
  ctx.fillRect(37, 133, 245, 17);
  // 10th box
  ctx.fillStyle = colors.black;
  ctx.fillRect(37, 96, 72, 35);
  // 11th box
  ctx.fillStyle = colors.gray7;
  ctx.fillRect(114, 96, 70, 35);
  // 12th box
  ctx.fillStyle = colors.blue;
  ctx.fillRect(190, 115, 91, 26);
  // 13th box
  ctx.fillStyle = colors.yellow2;
  ctx.fillRect(0, 112, 38, 50);
  // 14th box
  ctx.fillStyle = colors.black;
  ctx.fillRect(114, 134, 71, 7);
  // 15th box
  ctx.fillStyle = colors.red1;
  ctx.fillRect(281, 115, 19, 35);

  // Horizontal lines
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = colors.black;

  // 1st
  ctx.moveTo(5, 18.5);
  ctx.lineTo(280, 18.5);
  // 2nd
  ctx.moveTo(6, 56.5);
  ctx.lineTo(32, 56.5);
  // 3rd
  ctx.moveTo(189, 56.5);
  ctx.lineTo(281, 56.5);
  // 4th
  ctx.moveTo(33, 94.5);
  ctx.lineTo(281, 94.5);
  // 5th
  ctx.moveTo(5.5, 113.5);
  ctx.lineTo(33, 113.5);
  // 6th
  ctx.moveTo(114, 113.5);
  ctx.lineTo(300, 113.5);
  // 7th
  ctx.moveTo(33, 132.5);
  ctx.lineTo(190, 132.5);
  // 8th
  ctx.moveTo(110, 142.5);
  ctx.lineTo(281.5, 142.5);

  ctx.stroke();

  // Vertical lines
  ctx.beginPath();
  ctx.strokeStyle = colors.black;
  ctx.lineWidth = 6;

  // 1st
  ctx.moveTo(33, 18);
  ctx.lineTo(35.5, 146);
  // 2nd
  ctx.moveTo(71, 4);
  ctx.lineTo(71, 18);
  // 3rd
  ctx.moveTo(111, 95);
  ctx.lineTo(112, 148);
  // 4th
  ctx.moveTo(186, 3);
  ctx.lineTo(187, 142.5);
  // 5th
  ctx.moveTo(236, 56);
  ctx.lineTo(236, 95);
  // 6th
  ctx.moveTo(283, 4);
  ctx.lineTo(284, 148);

  ctx.stroke();
};

window.onresize = setDimensions.bind(this, html, body, canvas);

// const img = document.createElement("img");
// img.src = "assets/download.png";

body.appendChild(img);
