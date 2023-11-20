// Laços de repetição - DO-WHILE

let login;
let senha;
let repetir = false;

do{
    login = prompt("digite seu login");
    senha = prompt("digite sua senha");

    logado = login == 'barbara' && senha == '12345';
    if(!logado){
        confirm("login inválido! quer tentar novamente?")
    }else{
        alert("logado!")
    }

}while(!logado)