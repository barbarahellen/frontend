/*
    Ex01: Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.]
    Crie um método que dada a quantidade de quilômetros e o preço do combustível, nos dê o valor gasto em reais para realizar o percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGasto(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const fox = new Carro('volkswagen', 'prata', 1/7);
console.log(fox)
console.log(fox.calcularGasto(50, 5.59))

const palio = new Carro('fiat', 'preto', 1/12);
console.log(palio)
console.log(palio.calcularGasto(70, 5))