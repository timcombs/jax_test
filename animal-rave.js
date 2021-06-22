const floor = document.getElementById('aviary');
// floor.addEventListener('mousemove', addParrot);
floor.addEventListener('mousemove', addParrot);
console.log('hree');

const aviary = [
  'partyparrot',
  'headbangingparrot',
  'zombieparrot',
  'confusedparrot',
  'gothparrot',
  'congaparrot',
  'beerparrot',
  'discoparrot',
  'pumpkinparrot',
  'congapartyparrot',
  'mardigrasparrot',
  'beretparrot',
];

function addParrot(e) {
  const xCoord = e.pageX;
  const yCoord = e.pageY;

  const parrot = createParrot();
  parrot.style.setProperty(
    'transform',
    `translate(${xCoord}px, ${yCoord}px) scale(25%)`
  );
  parrot.setAttribute('alt', `party parrot`);
  parrot.classList.add('parrot');

  floor.appendChild(parrot);

  if (floor.childNodes.length > 50) {
    // floor.remove(floor.firstElementChild);
    floor.removeChild(floor.childNodes[0]);
  }
}

function createParrot(xCoord, yCoord) {
  const perch = document.createElement('img');

  const parrot = aviary[Math.floor(Math.random() * 12)];
  perch.setAttribute(
    'src',
    `https://cultofthepartyparrot.com/parrots/hd/${parrot}.gif`
  );

  return perch;
}
