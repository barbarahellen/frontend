// Laços Numéricos: FOR

const input = require("readline-sync")

// o problema
//const nota1 = Number(input.question("Informe a nota 1: "))
//const nota2 = Number(input.question("Informe a nota 2: "))
//const nota3 = Number(input.question("Informe a nota 3: "))

//let media = (nota1 + nota2 + nota3) / 3

// acumulador
let acumulador = 0
acumulador = acumulador + 10

console.clear()

// estrutura for
let nota
let soma = 0

for(let i = 1; i <= 3; i++){
    nota = Number(input.question(`Informe a nota ${i} do aluno: `))
    soma += nota
}
let media = soma/3
console.log("media = ", media)



