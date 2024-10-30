const fs = require('fs');

// 1. Callbacks

//console.log("ANTES da função de ler o arquivo...");

// função assíncrona (ler um arquivo leva um tempo)
/*
fs.readFile('javascript/aula 16 - programação assíncrona/arquivo.txt', (erro, conteudoDoArquivo) => {
    if(erro){
        console.log("Ocorreu um erro ao tentar ler o arquivo: ", erro);
    } else {
        console.log(String(conteudoDoArquivo));
    }
});

console.log("DEPOIS da função de ler o arquivo...");
*/

// Exemplo 2: setTimeout (função que cria um timer)

console.log("ANTES do setTimeout...");

setTimeout(() => {
    console.log("Isso vai ser executado após 2 segundos!")
}, 2000);


// 2. Promises (promessas)

console.log("Antes da criação da promise...")

function lerArquivoPromise(){
    return promessa = new Promise((resolve, reject) => {
        fs.readFile('javascript/aula 16 - programação assíncrona/arquivo.txt', (erro, conteudoDoArquivo) => {
            if(erro){
                reject("Ocorreu um erro ao tentar ler o arquivo: ", erro);
            } else {
                resolve(String(conteudoDoArquivo));
            }
        });
    });
}

lerArquivoPromise().then ((retornoDoResolveDaPromise) => {             // then: recebe um callback
    console.log("Deu certo: ", retornoDoResolveDaPromise);
}).catch((erro) => {
    console.log("Deu ruim: ", erro);
}).finally(() => {
    console.log("Isso aqui vai ser executado independente do sucesso ou fracasso da promessa, no final dela.")
}) 

console.clear();

// 3. async/await

async function leituraDeDados(){  // função assíncrona
    console.log("Isso é executado ANTES da promise ser resolvida!");

    try{
        const dadosDoArquivoLido = await lerArquivoPromise();  // espera a promessa ser resolvida para avançar no código

        console.log(dadosDoArquivoLido);
        console.log("Isso é executado DEPOIS da promise ser resolvida!");
    } catch (err){
        console.log(err);
        console.log("Isso é executado depois da promise (com erro).")
    } finally{
        console.log("Dentro do finally!");
    }
}

leituraDeDados();




