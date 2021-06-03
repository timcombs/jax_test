const seedLinks = document.querySelectorAll('.seed__link')
  .forEach(seedLink => {
    seedLink.addEventListener('click', ev => {
      ev.preventDefault();
      console.log(ev);
    })
  })

function makePopUp(ev){
  const mouseX = ev.screenX;
  const mouseY = ev.screenY;

  ev.par

  for (let i=0; i<3; i++) {

    const pop = document.createElement('p');
    pop.innerHtml('pop');
    pop.classList.add('pop');

  }
}