// Laços de repetição - WHILE

let resposta = true;
let senha = 0;

while(resposta){
    alert(`senha nº ${++senha}`);
    resposta = confirm("quer chamar a próxima senha?")
}
