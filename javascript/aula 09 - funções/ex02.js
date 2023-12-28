/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de Pagamento:
    1 - À vista Débito, recebe 10% de desconto
    2 - À vista no dinheiro ou PIX, recebe 15% de desconto
    3 - Em duas vezes, preço normal de etiqueta sem juros
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%

*/

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto/100)))
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)))
}

const precoEtiqueta = 100;
const formaPagamento = 4;

if(formaPagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if(formaPagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if(formaPagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(aplicarJuros(precoEtiqueta, 10));
}

console.log(200 * 0.10);
console.log(10 / 100);