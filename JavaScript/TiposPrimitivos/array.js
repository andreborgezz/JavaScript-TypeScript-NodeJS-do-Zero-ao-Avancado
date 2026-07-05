console.log(["André", "Borges"]) //uma lista, agrupamento de dados, separados por listas
// primeiro valor é 0, o segundo é 1, o terceiro é 2 e assim por diante.

console.log(["André", "Borges"].length); // length é responsável por trazer a contagem de elementos presentes.

["André", "Borges"].forEach((res, index) => {
    console.log(res, index);
});