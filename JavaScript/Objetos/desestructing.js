const Tenis = {
    estoque:100,
    tamanho:"41",
};

const {estoque, tamanho} = Tenis;

// console.log("Temos " +estoque+ " tênis em estoque no tamanho: " + tamanho);

// const {estoque: e, tamanho: t} = Tenis;

// console.log(e,t);

//Verficação de existencia de propriedade
console.log(Tenis.hasOwnProperty("tamanho"));//true
console.log(Tenis.hasOwnProperty("nome"));//false

console.log("tamanho" in Tenis);
console.log("nome" in Tenis);
