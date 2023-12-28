// Funções: são trechos de código que podemos reutilizar em outros locais do código

// Funções Nativas:
console.log("oi");
//confirm("confirmado");

// Funções personalizadas:
function echo(msg = 'mensagem em branco'){
    console.log(msg);
}
echo()



// Função para acrescentar juros
function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));



// Função para calcular o IMC
function calcularIMC(peso, altura){
    return peso / Math.pow(altura, 2);
}

// Função para classificar IMC
function classificarIMC(imc){
    if(imc < 18.5){
        return('abaixo do peso')
    }else if(imc >= 18.5 && imc < 25){
        return('peso normal')
    }else if(imc >= 25 && imc <= 30){
        return('acima do peso')
    }else if(imc >= 30 && imc < 40){
        return('obeso')
    }else{
        return('obesidade grave')
    }
}

function main(){
    const peso = 45;
    const altura = 1.50;

    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));
}

main()


/*
Função invocada imediatamente:

(function main(){
    const peso = 45;
    const altura = 1.50;

    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));
})();
*/


// Função para escrever nome
function escreverNome(nome){
    return( nome);
}
escreverNome('barbara');


// Função para verificar maioridade
function verificarIdade(idade){
    idade >= 18 ? console.log('maior') : console.log('menor')
}
verificarIdade(20)