// Variáveis

// não se define o tipo da variável em javascript, apenas coloca-se a palavra reservada let, que serve para dizer que eu estou guardando uma variável - também não é obrigatório colocar ;

let idade = 21     // criando primeira variável

console.log(idade)

// alterando o conteúdo da variável
idade = 30            // tipo Number

let altura = 1.50     // tipo Number
let nome = "babi"     // tipo string
let estudando = true  // tipo booleano

console.log(idade, typeof idade)
console.log(nome, typeof nome)
console.log(altura, typeof altura)
console.log(estudando, typeof estudando)

// criando variável não definida
let outra;
console.log(outra)

// criando variável nula
let nula = null
console.log(nula)

// variável constante - que não se pode alterar
const constante = 100

/*
versão mais antiga de como criar variável
       não é mais utilizada
*/
var variavel = 40;