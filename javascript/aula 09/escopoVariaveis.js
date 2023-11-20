// Escopo let vs. var

let x;

function escopo(){
    if(true){
        let x = 8;
        console.log(x);  // 8
    }
    console.log(x);  // 9
}

escopo();

console.log(x);  // undefined