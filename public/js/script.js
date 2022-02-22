function validarNome(x) {
  var nome = document.getElementById("nome");
  if (!isNaN(nome.value)) {
    x.style.backgroundColor = "#F57B2360";
  } else {
    x.style.backgroundColor = "white";
    return;
  }
}

function validacaoTel(x) {
  var tel = document.getElementById("tel");
  if (isNaN(tel.value)) {
    x.style.backgroundColor = "#F57B2360";
  } else {
    x.style.backgroundColor = "white";
    return;
  }
}

function converte(x) {
  var nome = document.getElementById("nome");
  nome.value = nome.value.toUpperCase();
}

function validarCpf(x) {
  var cpf = document.getElementById("cpf");
  cpf.value = cpf.value.replace(/\.|-/g, "");
  console.log(cpf.value);

  var soma = 0;
  soma += cpf.value[0] * 10;
  soma += cpf.value[1] * 9;
  soma += cpf.value[2] * 8;
  soma += cpf.value[3] * 7;
  soma += cpf.value[4] * 6;
  soma += cpf.value[5] * 5;
  soma += cpf.value[6] * 4;
  soma += cpf.value[7] * 3;
  soma += cpf.value[8] * 2;
  soma = (soma * 10) % 11;
  if (soma == 10 || soma == 11) soma = 0;
  console.log("d1 = ", soma);
  if (soma != cpf.value[9]) x.style.backgroundColor = "#F57B2360";
  else
    x.style.backgroundColor = "white";

  soma = 0;
  soma += cpf.value[0] * 10;
  soma += cpf.value[1] * 10;
  soma += cpf.value[2] * 9;
  soma += cpf.value[3] * 8;
  soma += cpf.value[4] * 7;
  soma += cpf.value[5] * 6;
  soma += cpf.value[6] * 5;
  soma += cpf.value[7] * 4;
  soma += cpf.value[8] * 3;
  soma += cpf.value[9] * 2;
  soma = (soma * 10) % 11;
  if (soma == 10 || soma == 11) soma = 0;
  console.log("d2= ", soma);
  if (soma != cpf.value[10]) x.style.backgroundColor = "#F57B2360";
  else
    x.style.backgroundColor = "white";
}




$(document).ready(function () {
  $('#btn-top').hide(); //Esconder o elemento após carregar o JQuery.

  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('#btn-top').fadeIn();
    } else {
      $('#btn-top').fadeOut();
    }
  });

  $('#scrollToTop').click(function () {
    $('html, body').animate({
      scrollTop: '0px'}
      , 400)
    return false;
  });

});

// function validacaoEmail(field) {
//   usuario = field.value.substring(0, field.value.indexOf("@"));
//   dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
//   if (
//     usuario.length >= 1 &&
//     dominio.length >= 3 &&
//     usuario.search("@") == -1 &&
//     dominio.search("@") == -1 &&
//     usuario.search(" ") == -1 &&
//     dominio.search(" ") == -1 &&
//     dominio.search(".") != -1 &&
//     dominio.indexOf(".") >= 1 &&
//     dominio.lastIndexOf(".") < dominio.length - 1
//   ) {
//     document.getElementById("msgemail").innerHTML = "E-mail válido";
//     alert("email valido");
//   } else {
//     document.getElementById("msgemail").innerHTML =
//       "<font color='red'>Email inválido </font>";
//     alert("E-mail invalido");
//   }
// }
