/*
    Uma sala contém 5 alunos e para cada aluno foi sortead um número de 1 - 100;
    Faça um programa que recebe os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const {gets, print} = require('./funcoes_auxiliares');

const qtdAlunos = gets();
let maiorValorEncontrado = 0;

for(let i = 0; i < qtdAlunos; i++){
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);