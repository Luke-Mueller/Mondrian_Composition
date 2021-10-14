const html = document.querySelector("html");
const body = document.querySelector("body");
const canvas = document.querySelector("canvas");

const getDimensions = () => {
  const height = html.clientHeight,
    width = html.clientWidth;
  if (height < width) return height;
  return width;
};

const setDimensions = () => {
  const height = html.clientHeight,
    width = html.clientWidth;

  let length;
  if (height < width) length = height;
  else length = width;

  const dimensions = `${length * 0.7}px`;

  body.style.height = `${height}px`;
  canvas.style.height = dimensions;
  canvas.style.width = dimensions;
};

window.onload = () => {
  setDimensions();
};

window.onresize = setDimensions;
