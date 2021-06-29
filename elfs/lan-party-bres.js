// Setting up the canvas - size, setting a background, and getting the image data(all of the pixels) of the canvas.
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;
canvasData = ctx.createImageData(canvas.width, canvas.height);

//Event listeners that set the canvas size to that of the window when the page loads, and each time the user resizes the window
window.addEventListener('load', windowResize);
window.addEventListener('resize', windowResize);

function windowResize() {
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
}

//A function that manipulates the array of pixel colour data created above using createImageData()
function setPixel(x, y, r, g, b, a) {
  var index = (x + y * canvasData.width) * 4;

  canvasData.data[index] = r;
  canvasData.data[index + 1] = g;
  canvasData.data[index + 2] = b;
  canvasData.data[index + 3] = a * ((r + g + b) / 30);
  // canvasData.data[index + 4] = a;
  // canvasData.data[index + 5] = a;
  // canvasData.data[index + 5] = a;
  // canvasData.data[index + 6] = a;
}

window.requestAnimationFrame(mainLoop);

function mainLoop() {
  // Looping through all the colour data and changing each pixel to a random colour at a random coordinate, using the setPixel function defined earlier
  for (i = 0; i < canvasData.data.length / 4; i++) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var randX = Math.floor(Math.random() * canvas.width);
    var randY = Math.floor(Math.random() * canvas.height);

    def get_circle_points_bresenham_integer_ene_2order_leq(r):
    """ Like draw_circle_bresenham_integer_ene_2order, but use 'f_m <= 0'
    instead of 'f_m < 0'.
    """
    points = []
    x = 0
    y = -r
    F_M = 1 - r
    d_e = 3
    d_ne = -(r << 1) + 5
    points.extend(mirror_points_8(x, y))
    while x < -y:
        if F_M <= 0:
            F_M += d_e
        else:
            F_M += d_ne
            d_ne += 2
            y += 1
        d_e += 2
        d_ne += 2
        x += 1
        points.extend(mirror_points_8(x, y))
    return points


    setPixel(randX, randY, red, green, blue, 255);
  }

  //Place the image data we created and manipulated onto the canvas
  ctx.putImageData(canvasData, 0, 0);

  //And then do it all again...
  window.requestAnimationFrame(mainLoop);
}
