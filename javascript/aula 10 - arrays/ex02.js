/*
    Crie um programa que seja capaz de percorrer uma lista de números e imprime cada número par encontrado
*/

const array = [2, 4, 12, 3, 1, 6, 5, 7, 8];

for(let i = 0; i < array.length; i++){
    const numero = array[i];
    if(numero % 2 === 0){
        console.log(numero);
    }
}
