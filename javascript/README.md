# JavaScript

<details>
<summary>✅ O que é?</summary>

O JavaScript é uma linguagem de programação de alto nível, que integra o desenvolvimento de apps e páginas web. É uma das linguagens de programação mais usadas no mundo do desenvolvimento.

### Como Surgiu?
Em 1995 o programador Brendan Eich que trabalhava na Netscape, implementou uma linguagem de programação chamada Mocha depois o nome mudou para LiveScript, mas na época a linguagem Java era popular, então mudaram LiveScript para JavaScript como jogada de marketing.

### Para que serve?
Para criar scripts dinâmicos que realizam a interação de apps ou páginas web.
Como se o HTML fosse a estrutura, o CSS o design, e o JavaScript a parte interativa do desenvolvimento.

[Leia mais](https://developer.mozilla.org/pt-BR/docs/Glossary/JavaScript)
</details>

<details>
<summary> ✅ Entendendo variáveis e seus valores</summary>

### Tipagem:
A tipagem funciona como uma regra de uso de dados, quanto mais forte for a tipagem, mais obrigatória é a declaração do tipo de dado. A tipagem em JavaScript é fraca, a declaração dos dados acontece de modo dinâmico.

Ex.: Ao criarmos uma variável com valor entre aspas (“valor”), o JavaScript já converte o dado para o tipo String.

```
Ex.: var numero = 1;
// o JavaScript já converte o valor 1 para o tipo Number.
```

### Tipos primitivos:
Variáveis podem guardar valores dos tipos: Boolean; null; undefined; Number; String; Array; Object; Function.

### Declaração de variáveis:
Existem 3 modos de declarar as variáveis em JavaScript:

var – escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

let – escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

const – escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado.

### Escopo
O escopo em JavaScript define a limitação e visibilidade de um
bloco de código.

Escopo global – quando a variável é declarada fora de qualquer
bloco, sua visibilidade fica disponível em todo o código.

Escopo local – quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.

### Regra de uso de variáveis
- Iniciar com letras, underscore _ ou cifrão ($)
- Não iniciar com número
- Não usar espaços (Usar camelCase ou _)
- Não usar palavras reservadas
- Declarar variáveis no topo do bloco de código -> boa prática

### Atribuição
O sinal de igualdade “=“ em JavaScript, significa atribuição.

### Comparação
```
var nome = “meu nome”;
```
Para fazermos uma comparação de valores em Javascript, usamos "==".

```
"0" == 0;  // lê-se “0” tem o valor igual a 0? - retorna true
```

### Comparação idêntica
Para fazermos uma comparação de valores e tipos em JavaScript usamos “===“.
```
"0" === 0; // lê-se "0" tem o valor e o tipo idêntico a 0? - retorna false
```
</details>

<details>
<summary>✅ Operadores</summary>

### Operadores matemáticos:
São tipos de operadores matemáticos com valor numérico:

- adição: +
- subtração: -
- multiplicação: *
- divisão real: /
- divisão inteira: %
- potenciação: **

### Operadores relacionais:
São tipos de operadores que consultam a relação entre valores:

- maior que: >
- menor que: <
- maior ou igual a: >=
- menor ou igual a: <=

### Operadores lógicos:
São tipos de operadores que consultam valores lógicos:

- && - “e” – considera que todos os valores sejam true;
- || - “ou” – considera que qualquer valor seja true;
- ! - “não” – inverte o valor de true para false ou vice-versa;

</details>


<details>
    <summary>✅ Vetores ou arrays:</summary>

### Arrays:
Arrays são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos.
```
let array = ['string', 1, true, ['array1']...]
```
O array deve ser declarado entre colchetes “[]”, e podem guardar qualquer valor dentro de seus índices: inclusive outros arrays.

### Manipulando arrays
Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo.

- forEach() – itera um array;
- push() – add item no final do array;
- pop() – remove item no final do array;
- shift() – remove item no início do array;
- unshift() – add item no início do array;
- indexOf() – retorna o índice de um valor;
- splice() – remove ou substitui um item pelo índice;
- slice() – retorna uma parte de um array existente;

</details>

<details>
    <summary>✅ Objetos e Classes </summary>

### Objetos
Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves “{}”.

Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções. Pode ser declarada assim:
```
var xicara = {
    cor: ‘azul’,
    tamanho: ‘p’,
    funcao: tomarCafe()
}
```
### Manipulando objetos
As propriedades de ojbetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação.
```
var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}

var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomarCafe();
```
Outra forma de fazer a desestruturação é utilizando chaves ao
declarar a variável:
```
var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}

var { cor, tamanho, funcao } = xicara;
```
</details>


<details>
    <summary>✅ Funções </summary>

### Funções declarativas
São funções que possuem o uso mais comum, deve ser declarada usando a palavra reservada “function” seguida do nome da
função, parênteses “()” e chaves “{}”:
```
function nomeDaFuncao(){
    ${instrucao};
}
```

### Expressões de funções
São funções atribuídas à expressões. A nomeação das funções por expressão é opcional:
```
var funcao = function nomeDaFuncao() {
    ${instrucao};
}

var funcao = function() {
    ${instrucao};
}
```

### Arrow Function

São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas. Deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}".
```
var funcao = () => {
    ${instrucao};
}
```

### First Class Function
Uma linguagem de programação tem First Class Function quando as funções nessa linguagem são tratadas como qualquer outra variável. Por exemplo, uma função pode ser passada como parâmetro para outra função, assim como pode ser retornada por uma função e esse retorno pode ser atribuído a uma variável.


### High Order Function
é uma função que recebe outra função como parâmetro/argumento, ou uma função que retorna outra função.

</details>

<details>
<summary>✅ Assincronismo</summary>

### Assincronismo
Em JavaScript, a programação assíncrona pode ser aplicada de três formas:
1. Por Callbacks (função de retorno ou chamada de retorno);
2. Por promises (promessas);
3. Resolvendo promises utilizando async/await.

- Promise: é um objeto que guarda uma promessa de que algo será realizado.
    - É útil para os casos em que estamos lidando com operações assíncronas:
    - A promise está em algum dos estados abaixo:
        1. Pending: A promise foi iniciada, mas está pendente.
        2. Fullfield: A promise foi concretizada com sucesso.
        3. Rejected: A promise foi rejeitada, porque houve um erro
    - Exemplo de utilização: pegar dados do back-end (API).
</details>
<details>
<summary>✅ DOM</summary>

### DOM (Document Object Model)
O DOM é a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na Web.

### Árvore DOM
exemplo:
![](img/árvoreDom.jpg)


### Selecionar componentes pelo JavaScript
Seleciona todos os elementos da tela que tenham a tag "img"<br>
```let img = document.getElementsByTagName('img')```

Seleciona o primeiro elemento da tela que tenha a tag "img"<br>
```let img = document.getElementsByTagName('img')[0]```

Seleciona os elementos pela classe<br>
```let img = document.getElementsByClassName('loading')```

Seleciona o elemento pelo identificador (id)<br>
```let img = document.getElementById('imgload')```

Seleciona um elemento por Query<br>
```let img = document.querySelector('img[src="load.png"]')```

Seleciona todos os elementos por Query - traz uma lista<br>
```let img = document.querySelectorAll('img[src="load.png"]')```

</details>

<details>
<summary>✅ Exercícios</summary>

### Criando uma calculadora
Para este exercício vamos utilizar alguns métodos nativos do
JavaScript:

- Number() – para converter valores em números;
- Prompt() – para registrar entradas de usuário;
- Alert() – para mostrar mensagem ao usuário;
- Template Strings – para usar strings junto com expressões;

[Clique aqui para ver o código](https://github.com/barbarahellen/frontend/tree/main/javascript/exerc%C3%ADcios/calculadora)


### Criando um relógio analógico
[Clique aqui para ver o código](https://github.com/barbarahellen/frontend/tree/main/javascript/exerc%C3%ADcios/rel%C3%B3gio)


</details>