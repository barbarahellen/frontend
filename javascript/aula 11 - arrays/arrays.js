// Arrays

let array = ['bárbara', 21, 1.50, true]
console.log(array)

// acessando elementos
console.log("primeiro elemento: ", array[0])
console.log("segundo elemento: ", array[1])
console.log("segundo elemento: ", array[2])
console.log("terceiro elemento: ", array[3])

// tamanho do array
console.log("tamanho: ", array.length)

// percorrendo arrays
console.clear()
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

for(let elemento of array){
    console.log(elemento)
 }