function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * i);
  });
}

const paragrafo = document.querySelector('p');

const link = document.querySelectorAll('a');
const liniOne = link[0];
const linkTwo = link[1];
const linktres = link[4];

const titles = document.querySelectorAll('h1');
const titleOne = titles[0];
const titleTwo = titles[1];

typeWriter(linkTwo);
typeWriter(linktres);
typeWriter(liniOne);

typeWriter(paragrafo);

typeWriter(titleOne);
typeWriter(titleTwo);
