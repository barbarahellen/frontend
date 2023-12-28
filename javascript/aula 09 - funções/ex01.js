// Função para escrever nome
function escreverNome(nome){
    return( nome);
}
escreverNome('barbara');


// Função para verificar maioridade
function verificarIdade(idade){
    idade >= 18 ? console.log('maior') : console.log('menor')
}
verificarIdade(20)


// Função dentro de função:

function verificarIdade(idade){
    idade > 18 ? console.log(escreverNome('bárbara') + ' é maior de idade') : console.log(escreverNome('bárbara') + ' é menor de idade')
}
verificarIdade(20)
