// Dobre os numeros 

const numeros = [10,2,8,12,32]

const n1 = numeros.map(valor => valor * 2)
console.log(n1);
console.log("\n");

// Para cada elmento:
//Retorne apenas uma String com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Add uma chave ID em cada obj
const pessoa=[
    {nome: 'Mateus', idade:18},
    {nome: 'Maria', idade:51},
    {nome: 'Vinicius', idade:20},
    {nome: 'Leticia', idade:70},
    {nome: 'Bruna', idade:32},
    {nome: 'Kenzo', idade:55}
]
const nome = pessoa.map(nome => nome.nome)
console.log(nome);

/*const nome1 = pessoa.map(function(nome1){
    delete nome1.nome
    return nome1
    // return {idade: nome1.idade}
})
console.log(nome1);
*/
const comid = pessoa.map(function(n1,max,min,){
    max=12
    min=1
    id = Math.round(Math.random() * (max - min) + min);
    n1.id = id
    return n1
})
console.log(comid);