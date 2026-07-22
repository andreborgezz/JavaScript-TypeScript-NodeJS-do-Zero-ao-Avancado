let Tenis = {
    estoque:100,
    tamanho:41,
};

delete Tenis.estoque; // removendo estoque de Tenis

console.log(Tenis); //printando sem o estoque pq ja foi removido

Tenis.estoque = true; //adicionando estoque ao Tenis

console.log(Tenis);