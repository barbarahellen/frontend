// Operadores Booleanos

// Igualdade:         == (ou ===)
// desigualdade:      !=
// Maior que:         >
// Maior ou igual:    >=
// Menor que:         <
// Menor ou igual:    <=

const num = 10;


console.log(num > 70)

console.log(num == 10)
console.log(num =='10')
console.log(10 == '10')  // usando 2 iguais (==) o javascript compara apenas o conteúdo (então fica a mesma coisa ??)
// usando 3 iguais (===) ele diz que é diferente
console.log(10 === '10')

console.clear()

console.log(10 != 10)     // retorna false
console.log(10 != '10')   // retorna false
console.log(10 !== '10')  // retorna true


// Conjunções Lógicas

// AND => &&
let idade = 26
let tenhoCNH = true
const possoDirigir = idade >= 18 && tenhoCNH === true

console.log("posso dirigir? ", possoDirigir)

// OR => ||
idade = 40
const votoFacultativo  = idade < 18 || idade >= 70

// NOT => !
const estouGostandoDoCurso = false
console.log(!estouGostandoDoCurso)
