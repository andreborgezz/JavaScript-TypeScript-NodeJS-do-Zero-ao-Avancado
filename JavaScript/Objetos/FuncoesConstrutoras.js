//declarando variaveis
function Pessoa(name, cidade, estado) {
    this.name = name;
    this.cidade = cidade;
    this.estado = estado;
}

//passando os valores que serão adiciionados nas variaveis
const andre = new Pessoa("André", "Sorocaba", "SP");

console.log(Pessoa);