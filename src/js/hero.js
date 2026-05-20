import imgHero from '/img/vite-logo.png';

console.log(imgHero);

const markup = `<img src=${imgHero} alt='qwe' width='300'/>`;

document.body.innerHTML = markup;
