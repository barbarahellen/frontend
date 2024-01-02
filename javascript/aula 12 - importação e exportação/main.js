// Importação
const {gets, print} = require('./funcoes_auxiliares');

//console.log(funcoes);

print(gets());

// Object Destructuring: destruir o objeto
const pessoa = {
    nome: 'babi'
};

const {nome} = pessoa; // equivale a const nome = pessoa.nome

