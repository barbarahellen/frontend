/*

Crie um sistema de senhas para nosso consultório,
ele deve ter três opções: Normal, Preferencial e Retorno.
Cada vez que o usuário chamar a função correspondente, ele deve
adicionar um número a senha chamada.
Utilize seu conhecimento de closures para resolver o problema.

*/

function senha(){
    let cont = 0;
    let pre = prefixo;
    function increment(){
        return pre+(++cont);
    }
    return increment;
}

normal = senha('N');
preferencial = senha('N');
retorno = senha('N');