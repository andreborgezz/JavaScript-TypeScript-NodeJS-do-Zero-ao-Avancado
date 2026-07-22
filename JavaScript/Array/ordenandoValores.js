const arrayNomes = [
    {
        nome:"André Borges",
    },
    {
        nome: "Gustavo Grubl",
    },
    {
        nome: "Nicolas Zanata",
    },
    {
        nome: "Lucas Santana",
    }
];

console.log(arrayNomes.sort((a,b) => a.nome.localeCompare(b.nome)));
console.table(arrayNomes.sort((a,b) => a.nome.localeCompare(b.nome)));