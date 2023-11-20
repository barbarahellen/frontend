// Fila: FIFO

var fila = []

function filaAdd(nome){
    fila.push(nome);
}

function filaProx(){
    return fila.shift();
}


// Pilha: LIFO

var pilha = []

function pilhaAdd(nome){
    fila.push(nome);
}

function pilhaProx(){
    return fila.pop();
}
