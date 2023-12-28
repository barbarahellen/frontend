// Objeto: coleção dinâmica de dados com chave e valor

const pessoa = {
    nome: 'bárbara hellen',
    idade: 20,

    descrever: function(){  // método
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);

// invocar método
pessoa.descrever();

// pode-se incrementar ele dinamicamente
pessoa.altura = 1.47;
console.log(pessoa);

// pode-se remover algum dado
delete pessoa.nome
console.log(pessoa)

// sobrescrevendo a função
pessoa.descrever = function(){
    console.log(`meu nome é ${this.nome}`);
}


// acessando dinamicamente valores de um objeto:
const atributo = 'idade';
console.log(pessoa[atributo])

