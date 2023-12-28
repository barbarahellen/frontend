// Laços Condicionais

const input = require('readline-sync') // não existe método pra ler dados do usuário - precisa de uma biblioteca
const numero_sorteado = 5

let numero = Number(input.question("qual numero voce escolhe? "))
//console.log(numero, typeof numero)

while(numero !== numero_sorteado){
    console.log("voce errou, tente novamente...")
    numero = Number(input.question("qual numero voce escolhe? "))
}
console.log("voce acertou!")
