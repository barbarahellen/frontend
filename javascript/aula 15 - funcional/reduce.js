// Reduce
// método que executa (para cada elemento do array), 
// a função que foi passada como parâmetro, resultando em um elemento único.


// exemplo 1: calcular a soma dos elementos de um array.
const numeros = [1, 2, 3, 4, 5];            // soma = 15

const soma = numeros.reduce((acumulador, elemento) => {
    return elemento + acumulador;
}, 0);        // sempre inicializar o acumulador com 0

console.log(soma);


// exemplo 2: calcular a média dos elementos
const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
    return elemento / arrayCompleto.length + acumulador;
}, 0); 

console.log(media);

// exemplo 3: somar só os pares
const somaDosPares = numeros.reduce((acumulador, numero) => {
    if(numero % 2 === 0){
        return numero + acumulador;
    }else{
        return acumulador;
    }
}, 0);

console.log(somaDosPares);


// exemplo 4: total a pagar do carrinho

const carrinho = [
    {produto: "Feijão", preco: 7.98, quantidade: 3},
    {produto: "Arroz", preco: 4.98, quantidade: 5},
    {produto: "Leite 1L", preco: 6.99, quantidade: 2}
];

const total = carrinho.reduce((acumulador, item) => {
    return (item.preco * item.quantidade) + acumulador;
}, 0)

console.log(total);