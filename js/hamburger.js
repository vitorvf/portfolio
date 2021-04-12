const menuHamburguer = document.querySelector('.hamburguer--menu');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('#menu a');
const menuXfechar = document.querySelector('.xfechar');

menuHamburguer.addEventListener('click', (e) => {
  menu.style.display = 'flex';
  menuXfechar.style.display = 'flex';

  menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      menu.style.display = 'none';
      menuXfechar.style.display = 'none';

      console.log(item);
    });
  });
  // if ($('#hbmenu').hasClass('ativo')) {
  //   $('#hbmenu').addClass('desativado'); //coloca a classe "ativo" no id=menu
  // } else {
  //   console.log('Lambe meu ovo');
  // }
});

window.addEventListener('resize', (e) => {
  if (window.innerWidth < 575.98) {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
});

menuXfechar.addEventListener('click', (e) => {
  menu.style.display = 'none';
  menuXfechar.style.display = 'none';
});

// menu.addEventListener('click', (e) => {
//   if (menu.style.display === 'flex') {
//     console.log('ddkodk');
//   }
// });
