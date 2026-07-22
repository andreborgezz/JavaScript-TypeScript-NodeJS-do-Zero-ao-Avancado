// const arrayNomes = [
//     {
//         nome:"André Borges",
//     },
//     {
//         nome: "Gustavo Grubl",
//     },
//     {
//         nome: "Nicolas Zanata",
//     },
//     {
//         nome: "Lucas Santana",
//     }
// ];

// //for:
// for(let i = 0; i < arrayNomes.length; i++){
// console.log(arrayNomes[i].nome);
// }

//for OF
// for (let item of arrayNomes) {
//     console.log(item);
    
// }

const obj = { nome: "andre", sobrenome: "borges"};

//for in
for(let item in obj){
    console.log(item)
}

obj.forEach((item) => {
    console.log(item)
    
});