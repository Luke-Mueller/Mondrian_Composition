const _mkRect = (x, y, xSize, ySize, color, ctx) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, xSize, ySize);
};

const mkRects = (colors, ctx) => {
  _mkRect(0, 0, 68, 17, colors.gray1, ctx);
  _mkRect(68, 0, 116, 17, colors.gray2, ctx);
  _mkRect(184, 0, 103, 55, colors.yellow1, ctx);
  _mkRect(286, 0, 14, 112, colors.gray3, ctx);
  _mkRect(0, 17, 32, 41, colors.gray4, ctx);
  _mkRect(36, 20, 148, 75, colors.red1, ctx);
  _mkRect(0, 58, 32, 54, colors.gray5, ctx);
  _mkRect(190, 57.5, 90, 55, colors.gray6, ctx);
  _mkRect(37, 133, 245, 17, colors.gray8, ctx);
  _mkRect(37, 96, 72, 35, colors.black2, ctx);
  _mkRect(114, 96, 70, 35, colors.gray7, ctx);
  _mkRect(190, 115, 91, 26, colors.blue, ctx);
  _mkRect(0, 112, 38, 50, colors.yellow2, ctx);
  _mkRect(114, 134, 71, 7, colors.black2, ctx);
  _mkRect(280, 115, 20, 35, colors.red2, ctx);
};

export default mkRects;
