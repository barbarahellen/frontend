// Switch case

const codigo = prompt("digite o código do cargo:");
let cargo = "";
let nome = "babi"

switch(codigo){
    case 'p':
    case 'd':
        cargo = 'professor';
        break;
    case 's':
        cargo = 'servidor';
        break;
    case 'a':
        cargo = 'aluno';
        break;
    case 'v':
        cargo = 'vigilante';
        break;
    case 'm':
        cargo = 'motorista';
        break;
    default:
        cargo = 'convidado';
}

alert(`olá ${nome}, você é um ${cargo}`);