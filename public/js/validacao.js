$(document).ready (function () {
    $("span").hide();
});

count = 0;

function validarProduto(x) {
    var nome = document.getElementById("produto_estoque");
    if (!isNaN(nome.value)) {
      x.style.backgroundColor = "#F57B2360";
    } else {
      x.style.backgroundColor = "green";
      return;
    }
}

function validarPreco(x) {
    var preco = document.getElementById("preco_estoque");
    if (isNaN(tel.value)) {
      x.style.backgroundColor = "#green";
    } else {
      x.style.backgroundColor = "white";
      return;
    }
}

function validarQuant(x) {
    var quant = document.getElementById("quant_estoque");
    if (isNaN(tel.value)) {
      x.style.backgroundColor = "#green";
    } else {
      x.style.backgroundColor = "white";
      return;
    }
}

function validarcampos() {
    var span = document.getElementsByTagName("span");
    var b = document.querySelector("button");
    if(count >= 5) {
        b.setAttribute("type", "submit");    
    } else {
        $("span").show();
    }
}
