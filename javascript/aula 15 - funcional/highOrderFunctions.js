// High order functions

// 1. função que retorna outra função como parâmetro (clojure):
function welcome(courseName){

    return(studentName) =>{
        console.log(
            `Olá, ${studentName}! Seja bem-vindo(a) ao curso de ${courseName}!`
        );
    }
}

// ao chamar o welcome, ele retorna outra função
const displayWelcomeToFrontendCourse = welcome("Front-end em React");

const displayWelcomeToBackendCourse = welcome("Back-end em Node.js");


displayWelcomeToFrontendCourse("bárbara");

//console.clear();

// 2. função que recebe outra função como parâmetro]:
const somar = (num1, num2) => num1 + num2;

const subtrair = (num1, num2) => num1 - num2;

const multiplicar = (num1, num2) => num1 * num2;

const dividir = (num1, num2) => num1 / num2;

// operação: uma função que realiza a operação entre dois números, ou seja, ela precisa ser uma função que receba dois números
const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);

somar(1, 2);

// calcular = (10, 5, somar) => somar(10, 5)
const retorno = calcular(10, 5, multiplicar);

console.log(retorno);


// o cálculo que eu quero fazer é: (num1 * num2) + (2 * num1 * num2)

const resultado = calcular(10, 5, (num1, num2) => num1 * num2 + 2 * num1 * num2);
console.log(resultado);

console.clear();

