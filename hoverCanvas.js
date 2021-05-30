
var canvas = document.querySelector('canvas'),
  context = canvas.getContext('2d');

context.beginPath();
context.moveTo(100, 150);
context.lineTo(350, 50);
context.stroke();