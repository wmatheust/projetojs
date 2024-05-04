function msg() {
  alert("Hello World!");
}

function calcular() {
  let a = parseFloat(document.getElementById("valor1").value);
  let b = parseFloat(document.getElementById("valor2").value);

  if ((a == 0) & (b == 0)) {
    document.getElementById("resultado").value = 0;
  } else {
    document.getElementById("resultado").value = eval(a + b);
  }
}

function mudaCor() {
  let altera_Cor = document.getElementById("altera_Cor");

  if (altera_Cor.style.backgroundColor == "white") {
    altera_Cor.style.backgroundColor = "black";
    altera_Cor.style.color = "white";
  } else {
    altera_Cor.style.backgroundColor = "white";
    altera_Cor.style.color = "black";
  }
}

function alteraName() {
  var seleciona_nome = document.querySelector('label[name="altera_Name"]');

  if (seleciona_nome.textContent == "Clique para alterar por Name") {
    seleciona_nome.textContent = "Alterado por Name";
  } else {
    seleciona_nome.textContent = "Clique para alterar por Name";
  }
}

function alteraClasse() {
  classes = document.getElementsByClassName("classe_Comum");

  for (var i = 0; i < classes.length; i++) {
    classes[i].textContent = "Todos que possuem a mesma Classe foram alterados";
  }
}
