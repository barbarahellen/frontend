// Formas de seleção de elementos:

// Seleciona todos os elementos da tela que tenham a tag "img"
// let img = document.getElementsByTagName('img')

// Seleciona o primeiro elemento da tela que tenha a tag "img"
// let img = document.getElementsByTagName('img')[0]

// // Seleciona os elementos pela classe
// let img = document.getElementsByClassName('loading')

// Seleciona o elemento pelo identificador (id)
let img = document.getElementById('imgload')

// Seleciona um elemento por Query
// let img = document.querySelector('img[src="load.png"]')

// Seleciona todos os elementos por Query - traz uma lista
// let img = document.querySelectorAll('img[src="load.png"]')


let grau = 0;
function girar(){
    grau++;
    if(grau >= 360){
        grau = 0;
    }
    img.style.transform = `rotate(${grau}deg)`;
    setTimeout(girar, 10)  // muda o css para a cada 10 milissegundos ele rotacionar 1 grau
}


console.log(img)
