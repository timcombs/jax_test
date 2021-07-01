function buildTree({ branchingLimit = 10, branchCount = 1, tree = [] }) {
  if (branchingLimit > 0) {
    const branches = [...Array(branchCount).keys()].map((b) =>
      buildTree({
        branchingLimit: branchingLimit - 1,
        branchCount: 1 + Math.ceil(Math.random() * 2),
        tree,
      })
    );
    return tree.concat(branches);
  }
  return tree;
}

function reset(canvas) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  return {
    ctx: canvas.getContext('2d'),
    width,
    height,
  };
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function drawTree({
  context,
  width,
  height,
  tree,
  x,
  y,
  colors,
  depth = 0,
  branchLength = Math.min(width, height) / 6.5,
}) {
  if (!tree) {
    return;
  }
  const minDimension = Math.min(width, height);
  tree.forEach((branch) => {
    const newBranchLength =
      depth < 1
        ? branchLength / (1 + Math.random() / 0.5)
        : (1.2 * branchLength) / (1 + Math.random() / 12.4);
    const variance = minDimension / 10 + (Math.random() * minDimension) / 10;
    const directionX = Math.random() > 0.5 ? -1 : 1;
    const newX = x + directionX * (depth ? variance : 1);
    const directionY = depth > 3 ? 2 * (Math.random() > 0.8 ? 1 : -1) : -1;
    const newY = y + directionY * newBranchLength;
    const color =
      depth < 1
        ? colors.root
        : depth < 2
        ? getRandom([getRandom(colors.branches), colors.root])
        : getRandom(colors.branches);
    context.strokeStyle = color;
    context.lineCap = 'round';
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(x, y);
    context.arcTo(x, newX + 100, y, newY + 100, 30);
    // context.lineTo(newX, newY);
    context.stroke();
    drawTree({
      context,
      width,
      height,
      tree: branch,
      x: newX,
      y: newY,
      colors,
      depth: depth + 1,
      branchLength: newBranchLength,
    });
  });
}

function drawBackground(context, width, height, colors, dotColors) {
  const lineLength = width / 30 + (Math.random() * width) / 100;
  const lineWidth = 6;
  const variance = 25 + Math.random() * 30;
  let x = -lineLength;
  let y = lineWidth;
  while (y < height) {
    const stepY = height / 10 + (Math.random() * height) / 10;

    while (x < width) {
      const stepX = 10 + (Math.random() * width) / 10;
      const directionY = Math.random() > 0.5 ? -5 : 20;
      context.strokeStyle = getRandom(colors);
      context.lineCap = 'round';
      context.lineWidth = lineWidth;
      context.beginPath();
      context.moveTo(x, y + directionY * stepY);
      context.lineTo(
        x + (Math.random() * x * width) / 500,
        y + directionY * variance
      );
      context.stroke();
      x += stepX;

      let numDots = Math.floor(Math.random() * 4 + 3);

      for (let dot = 0; dot < numDots; dot++) {
        context.fillStyle = getRandom(dotColors);
        context.fillRect(
          x + variance + Math.floor(Math.random() * 400 + 100),
          y - variance + Math.floor(Math.random() * 400 + 100),
          6,
          6
        );
      }
    }
    x = -(width / 30 + (Math.random() * width) / 5);
    y += stepY;
  }
}

let branchCount = 0;
const branchingLimit = 7;

function draw() {
  const { ctx, width, height } = reset(c);

  const backgroundColors = ['rgba(255, 105, 180, .25)'];
  const dotColors = [
    'rgba(255, 105, 180, .25)',
    'rgba(0, 120, 177, .75)',
    'rgba(0, 160, 200, .75)',
    'rgba(130, 20, 180, .75)',
    'rgba(210, 100, 50, .75)',
    'rgba(140, 90, 90, .75)',
    'rgba(160, 100, 180, .75)',
  ];

  drawBackground(ctx, width, height, backgroundColors, dotColors);

  if (branchCount++ > branchingLimit) {
    branchCount = 0;
  }

  const tree = buildTree({
    branchingLimit: branchCount,
  });

  const treeColors = {
    root: 'brown',
    // branches: [
    //   'rgba(0, 255, 0, .75)',
    //   'rgba(0, 40, 0, .75)',
    //   'rgba(0, 80, 0, .75)',
    //   'rgba(0, 120, 0, .75)',
    //   'rgba(0, 160, 0, .75)',
    //   'rgba(0, 200, 0, .75)',
    //   'rgba(20, 200, 0, .75)',
    //   'rgba(40, 200, 0, .75)',
    //   'rgba(60, 200, 0, .75)',
    //   'rgba(150, 200, 0, .75)',
    //   'rgba(200, 200, 0, .75)',
    //   'rgba(200, 160, 0, .75)',
    //   'rgba(200, 120, 0, .75)',
    // ],
    branches: [
      'rgba(0, 255, 255, .75)',
      'rgba(0, 40, 120, .75)',
      'rgba(0, 80, 89, .75)',
      'rgba(0, 120, 177, .75)',
      'rgba(0, 160, 200, .75)',
      'rgba(130, 20, 180, .75)',
      'rgba(210, 100, 50, .75)',
      'rgba(140, 90, 90, .75)',
      'rgba(160, 100, 180, .75)',
      'rgba(150, 100, 0, .75)',
      'rgba(200, 50, 450, .75)',
      'rgba(160, 60, 120, .75)',
      'rgba(200, 110, 80, .75)',
    ],
  };

  // drawTree({
  //   context: ctx,
  //   width,
  //   height,
  //   tree,
  //   x: width / 2,
  //   y: height,
  //   colors: treeColors,
  // });
}

const throttle = 30;
let counter = 0;

function loop() {
  if (!(counter++ % throttle)) {
    draw();
  }
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
