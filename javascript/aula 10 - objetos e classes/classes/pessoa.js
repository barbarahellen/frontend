// Classe: define como os objetos são para que eles possam ser instanciados

class Pessoa{
    nome;
    idade;

    // método (não precisa do function)
    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

// Instância: uma ocorrência de um objeto
const vitor = new Pessoa();
vitor.nome = 'Vitor O. Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan J. Paula';
renan.idade = 30;

// Vitor e Renan são instâncias
console.log(vitor);
console.log(renan);

vitor.descrever();
renan.descrever();



// Criando classe com Constructor (o que acontece quando uma pessoa é instanciada)
class Pessoa2{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }
    // método
    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

const babi = new Pessoa2('babi', 20);

console.log(babi);