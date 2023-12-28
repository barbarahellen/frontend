// Closure: função dentro de outra

function contador(){
    let count = 0;
    function increment(){
        return ++count;
    }

    return increment;
}

const meuContador = contador();

console.log(meuContador());
console.log(meuContador());
console.log(meuContador());
console.log(meuContador());
