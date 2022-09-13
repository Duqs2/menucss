const lista = document.querySelectorAll('.lista')
function activelink (){
    lista.forEach((item) =>
    item.classList.remove('ativa'))
    this.classList.add('ativa');
}

lista.forEach((item) =>
item.addEventListener('click', activelink));

function delay (URL) {
    setTimeout( function() { window.location = URL }, 1000 );
}