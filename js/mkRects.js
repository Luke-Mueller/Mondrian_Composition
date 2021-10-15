import colors from "./colors.js";

const mkRect = (x, y, xSize, ySize, color, ctx) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, xSize, ySize);
};

const mkRects = (ctx) => {
  mkRect(0, 0, 68, 17, colors.gray1, ctx);
  mkRect(68, 0, 115, 17, colors.gray2, ctx);
  mkRect(183, 0, 103, 55, colors.yellow1, ctx);
  mkRect(286, 0, 14, 112, colors.gray3, ctx);
  mkRect(0, 17, 30, 41, colors.gray4, ctx);
  mkRect(36, 20, 148, 75, colors.red1, ctx);
  mkRect(0, 58, 31, 54, colors.gray5, ctx);
  mkRect(190, 57.5, 90, 55, colors.gray6, ctx);
  mkRect(37, 133, 245, 17, colors.gray8, ctx);
  mkRect(37, 96, 72, 35, colors.black2, ctx);
  mkRect(114, 96, 70, 35, colors.gray7, ctx);
  mkRect(190, 115, 91, 26, colors.blue, ctx);
  mkRect(0, 112, 38, 50, colors.yellow2, ctx);
  mkRect(114, 134, 71, 7, colors.black2, ctx);
  mkRect(281, 115, 19, 35, colors.red1, ctx);
};

export default mkRects;
