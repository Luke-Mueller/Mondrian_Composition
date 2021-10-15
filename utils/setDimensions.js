const setDimensions = (html, body, canvas) => {
  const height = html.clientHeight,
    width = html.clientWidth;

  let measurement;
  if (height < width) measurement = height;
  else measurement = width;

  body.style.height = `${(height * 0.9) / 10}rem`;
  const dimensions = `${(measurement * 0.7) / 10}rem`;
  canvas.style.height = dimensions;
  canvas.style.width = dimensions;
};

export default setDimensions;
