// Funções de Alta Ordem de Arrays


// Array.prototype.forEach();
const numeros = [48, 34, 67, 89, 23, 10];

function imprimirElemento(elemento){
    console.log(elemento);
}

numeros.forEach((item, index, arrayCompleto) => {
    console.log(index, item, arrayCompleto);
});

console.clear();

// 2. Arrar.prototype.find(): útil para encontrar um elemento dentro do array

const encontrado = numeros.find((numero) => {
    return numero > 50;
})

console.log(encontrado)

console.clear();

// array de objetos
const pessoas = [
    {
        nome: 'pessoa1',
        idade: 34,
        altura: 1.77,
    },
    {
        nome: 'pessoa2',
        idade: 25,
        altura: 1.56,
    },
    {
        nome: 'pessoa3',
        idade: 46,
        altura: 1.82,
    },

];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 20 && pessoa.altura < 1.70);

console.log(pessoaEncontrada);


// 3. Array.prototype.findIndex(): retorna o índice do elemento encontrado.

const indexPessoaEncontrada = pessoas.findIndex(
    (pessoa) => pessoa.idade > 20 && pessoa.altura < 1.70
);

console.log(indexPessoaEncontrada);