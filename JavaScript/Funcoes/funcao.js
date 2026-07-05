/*
  O que é?: É um conjunto de instruções que executa uma tarefa ou calcula um valor.
*/

//1- Function declaration
function isValid(){
    const soma = 1 + 2

    if (soma === 3) {
        return true; // trava a função, para de executar ela
    }
    return false;
}

console.log(isValid()); // Para chamar a função vc deve por nomeDaFuncao() dentro do console log


// 2- Functions expression:
const isValidEpression  = function () {
    return false; // Define a função direto dentro de uma variável 
// e serve para tratar funções como se fossem valores comuns
}


// 3- Arrow Functions
const isValidArrow = () =>  2*2; // Serve para encurtar a sintaxe, 
// onde a seta resolve tudo e o resultado do cálculo é devolvido na hora sem precisar da palavra return
