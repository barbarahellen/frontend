function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação(**)\n'));

    if(!operacao || operacao >= 7){
        alert('Erro! operação inválida');
        calculadora();

    }else{
        let n1 = Number(prompt("insira o primeiro valor"));
        let n2 = Number(prompt("insira o segundo valor"));
        let resultado;

        if(!n1 || !n2){
            alert('parâmetros inválidos')
            calculadora();
        }else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
            }

            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
            }

            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
            }

            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
            }

            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
            }

            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
                novaOperacao();
            }

            function novaOperacao(){
                let opcao = prompt('deseja fazer outra operação?\n 1 - Sim\n 2 - Não\n');
                if(opcao == 1){
                    calculadora();
                }else if(opcao == 2){
                    alert('até mais');
                }else{
                    alert('digite uma opção válida');
                    novaOperacao();
                }
            }
        }

       switch(operacao){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
       }
    }
}

calculadora()