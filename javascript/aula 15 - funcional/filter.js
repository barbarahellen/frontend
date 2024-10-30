// Filter

// map: sempre retorna um array de mesmo tamanho do array original.

// filter: sempre retorna um array de tamanho igual ou inferior ao tamanho do array original.


const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const pares = valores.filter((valor) => valor % 2 === 0);

console.log(pares);


// exemplo 1: filtrar pelos alunos com media > 85
const alunos =[ 
    {nome: "quincy", media: 96},
    {nome: "jason", media: 84},
    {nome: "alexis", media: 100},
    {nome: "sam", media: 65},
    {nome: "katie", media: 98}
];

const alunosComMediaSuperiorA85 = alunos.filter((aluno) => aluno.media > 85);

console.log(alunosComMediaSuperiorA85);


// exemplo 2: filtrar pelos produtos que o preço é menor do que R$ 10,00 e não são bebida.
console.clear();

const produtos = [
    { nome: "suco de laranja", preco: 7.50, tipo: "bebida" },
    { nome: "batata frita", preco: 10.50, tipo: "comida" },
    { nome: "pizza", preco: 12.49, tipo: "comida" },
    { nome: "chocolate", preco: 1.50, tipo: "comida" },
    { nome: "pastel", preco: 4.50, tipo: "comida" },
    { nome: "coca", preco: 6.99, tipo: "bebida" },
];

const produtosFiltrados = produtos.filter((produto) => produto.preco < 10 && produto.tipo !== "bebida");

console.log(produtosFiltrados);