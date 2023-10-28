function f() {
  document.getElementsByClassName('menu-suspenso')[0].classList.toggle('baixo');
  document.getElementsByClassName('seta')[0].classList.toggle('sem-seta');
  if (document.getElementsByClassName('menu-suspenso')[0].classList.contains('baixo')) {
    setTimeout(function() {
      document.getElementsByClassName('menu-suspenso')[0].style.overflow = 'visible'
    }, 500)
  } else {
    document.getElementsByClassName('menu-suspenso')[0].style.overflow = 'hidden'
  }
}

function Enviar() {

  var nome = document.getElementById("cNome");

  if(nome.value != "") {
      alert("Agradeço sua mensagem " + nome.value + ", seus dados foram encaminhados com sucesso!");
  }
}