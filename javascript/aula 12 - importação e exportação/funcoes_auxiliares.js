const entradas = [5, 50, 10, 98, 100, 23];
let i = 0;  // contador de chamadas

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

// define um objeto literal com os métodos para exportar
module.exports = {gets, print};



