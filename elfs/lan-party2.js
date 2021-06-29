var static = document.getElementById('canvas'),
  context = static.getContext('2d'),
  pixelHeight = 1;

//Event listeners that set the canvas size to that of the window when the page loads, and each time the user resizes the window
window.addEventListener('load', windowResize);
window.addEventListener('resize', windowResize);

function windowResize() {
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
}

function drawStatic() {
  for (var v = 0; v < window.innerHeight; v += pixelHeight) {
    for (var h = 0; h < window.innerWidth; h += pixelWidth) {
      pixelWidth = Math.floor(Math.random() * 10) + 5;

      let lum = Math.floor(Math.random() * 40);
      let clr = getClr();
      context.fillStyle = `hsl(${clr}, 98%, ${lum}%)`;
      context.fillRect(h, v, pixelWidth, pixelHeight);
    }
  }
  requestAnimationFrame(drawStatic);
}

function getClr() {
  clrLookupArr = [306, 119, 201, 306, 5, 276, 44, 119, 201];

  return clrLookupArr[Math.floor(Math.random() * 9)];
}

drawStatic();
