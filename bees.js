'use strict';

const whiteFlowers =
  document.getElementsByClassName('garden__plot--20')[0].children;
const purpleFlower = document.getElementById('lone-purple');
const yellowFlowers = document.getElementsByClassName('garden__plot--8');

// adding listeners to garden plot 20 opaque white flowers
for (let flower of whiteFlowers) {
  if (window.getComputedStyle(flower).getPropertyValue('opacity') === '1') {
    flower.addEventListener('click', goHome);
  }
}

// adding listeners to garden plot 20 opaque white flowers
for (let flower = 0; flower < yellowFlowers.length; flower++) {
  // console.log(yellowFlowers[i]);
  if (flower % 2 === 0) {
    yellowFlowers[flower].addEventListener('click', goBack);
  }
}

purpleFlower.addEventListener('click', goDeeper);

function goHome(e) {
  window.location = './index.html';
}

function goDeeper(e) {
  // pick random page
}

function goBack(e) {
  window.location = './key-2-my-heart.html';
}
