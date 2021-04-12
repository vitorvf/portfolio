// Alterar cor da barra ao acontecer a rolagem
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 40) {
    // se rolar 40px ativa o evento
    $('#header').addClass('ativo'); //coloca a classe "ativo" no id=menu
  } else {
    $('#header').removeClass('ativo'); //se for menor que 40px retira a classe "ativo" do id=menu
  }
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 40) {
    // se rolar 40px ativa o evento
    $('#menu').addClass('ativo'); //coloca a classe "ativo" no id=menu
  } else {
    $('#menu').removeClass('ativo'); //se for menor que 40px retira a classe "ativo" do id=menu
  }
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 40) {
    // se rolar 40px ativa o evento
    $('#logo').addClass('ativo'); //coloca a classe "ativo" no id=menu
    $('#xdiv').addClass('ativo'); //coloca a classe "ativo" no id=menu
  } else {
    $('#xdiv').removeClass('ativo'); //coloca a classe "ativo" no id=menu

    $('#logo').removeClass('ativo'); //se for menor que 40px retira a classe "ativo" do id=menu
  }
});

$('ul a').click(function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    menuHeight = $('nav').innerHeight(),
    targetOffset = $(id).offset().top;
  $('html, body').animate(
    {
      scrollTop: targetOffset - menuHeight,
    },
    500,
  );
});
