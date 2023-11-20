// Arrays - parte 2 - métodos de arrays

let arr1 = [30, 12, 45, 34, 29];
let arr2 = [];

// Fatiamento - slice
console.log(arr1.slice(0, 2)); // pega o 0 e o 1, sem incluir o 2
console.log(arr1.slice(2));
console.clear();

// Splice(2, 1): remove 1 elemento a partir do elemento 2 (meio do array)
console.log(arr2.splice(2, 1));

// Splice(2, 0): adiciona 2 elementos a partir do elemento 2
console.log(arr2.splice(2, 0, '25', '43'));


// Adicionando elementos: push | unshift
console.log("antes de adicionar: ", arr2);
arr2.push(10, 20, 30);
arr2.push(40);
console.log("depois de adicionar: ", arr2);

console.log("antes de adicionar com unshift ", arr2);
arr2.unshift(0);
console.log("depois de adicionar com unshift: ", arr2);

console.clear();

// Removendo elementos - pop | shift
console.log("antes de remover: ", arr2);

arr2.pop(0);       // pop: remove item ao final do array
console.log(arr2);