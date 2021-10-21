const _mkLine = (xStart, yStart, xEnd, yEnd, ctx) => {
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
};

const mkLines = (colors, ctx) => {
  // Horizontal lines
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = colors.black1;
  _mkLine(5, 18.5, 280, 18.5, ctx);
  _mkLine(6, 56.5, 32, 56.5, ctx);
  _mkLine(189, 56.5, 281, 56.5, ctx);
  _mkLine(33, 94.5, 281, 94.5, ctx);
  _mkLine(5.5, 113.5, 33, 113.5, ctx);
  _mkLine(114, 113.5, 300, 113.5, ctx);
  _mkLine(33, 132.5, 190, 132.5, ctx);
  _mkLine(110, 142.5, 281.5, 142.5, ctx);
  ctx.stroke();

  // Vertical lines
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.strokeStyle = colors.black1;
  _mkLine(35, 18, 35, 146, ctx);
  _mkLine(71, 4, 71, 18, ctx);
  _mkLine(111, 95, 111, 148, ctx);
  _mkLine(187, 3, 187, 143, ctx);
  _mkLine(236, 56, 236, 95, ctx);
  _mkLine(283, 4, 283, 148, ctx);
  ctx.stroke();
};

export default mkLines;
