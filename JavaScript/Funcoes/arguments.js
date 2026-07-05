function soma(num1, num2){ // Parametros são criados dentro do ()
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
        
    }
    return "Você passou dados diferentes";
}

console.log(soma(1,4)) // Atribuimos valor dentro do () quando criamos

function subtracao() {
    return arguments;
}

console.log(subtracao(1,2))