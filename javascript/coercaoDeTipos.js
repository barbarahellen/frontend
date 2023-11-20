// Coerção (conversão) de Tipos

// 1 - Coerção Explícita
const num = 10
console.log(num, typeof num)

const numeroEmFormatoString = String(num)
console.log(numeroEmFormatoString, typeof numeroEmFormatoString)

console.log(Number('125486'))
console.log(Number('523.23'))
console.log(Boolean(1))

// 2 - Coerção Implícita
console.log(10 + '1')    // retorna 101 - concatena
console.log(10 -'1')     // retorna 9
console.log(10 * '3')    // retorna 30
console.log(10 - 'aabc') // retorna NaN - not a number

let n = 1 + '1'  // retorna 11

n = n - 1        // retorna 10

console.log("n = ", n)  

console.log(2 + 3 + 4 +"5")            // retorna 95
console.log("5" + 2 + 3 + 4)           // retorna 5234
console.log("10" - "4" - "3" - 2 + 5)  // retorna 6