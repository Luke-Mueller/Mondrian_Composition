import colors from "./colors.js";

const mkLine = (xStart, yStart, xEnd, yEnd, ctx) => {
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
};

const mkLines = (ctx) => {
  // Horizontal lines
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = colors.black1;
  mkLine(5, 18.5, 280, 18.5, ctx);
  mkLine(6, 56.5, 32, 56.5, ctx);
  mkLine(189, 56.5, 281, 56.5, ctx);
  mkLine(33, 94.5, 281, 94.5, ctx);
  mkLine(5.5, 113.5, 33, 113.5, ctx);
  mkLine(114, 113.5, 300, 113.5, ctx);
  mkLine(33, 132.5, 190, 132.5, ctx);
  mkLine(110, 142.5, 281.5, 142.5, ctx);
  ctx.stroke();

  // Vertical lines
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.strokeStyle = colors.black1;
  mkLine(33, 18, 35.5, 146, ctx);
  mkLine(71, 4, 71, 18, ctx);
  mkLine(111, 95, 112, 148, ctx);
  mkLine(186, 3, 187, 142.5, ctx);
  mkLine(236, 56, 236, 95, ctx);
  mkLine(283, 4, 284, 148, ctx);
  ctx.stroke();
};

export default mkLines;
