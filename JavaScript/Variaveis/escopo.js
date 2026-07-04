// Escopo:
// Determina quais sao os dados 
// que podem ser acessados 
// em uma determinada parte de codigo

//let nome = "André" //escopo global 
//console.log(nome) FUNCIONARIA NORMALMENTE

{ //Escopo
let nome = "André" 
console.log(nome) //Esse console log funcionara normalmente, pq está dentro do escopo

var nomeComVar = "André" 
console.log(nomeComVar) //Utilizando var funcionaria normalmente, pois o var sempre está no escopo global

}

console.log(nome) // nao vai funcionar, pq não consegue acessar o que esta dentro do escopo
