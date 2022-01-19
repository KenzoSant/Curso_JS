const nome = ['Mateus', 'Kenzo']

/*for(let i in nome){
    console.log(nome[i]);
}*/

/*for (let i of nome){

    console.log(i);
}*/

/*nome.forEach(function(valor,indice,array) {

    console.log(valor,indice, array);
});*/

const pes ={
    nome: 'kenzo',
    idade: 17
};

for (let i of pes){
    console.log(i, pes[i]);
} // OF não funfa 

// FOR classíco -> Geralmente retorna iteráveis (array ou String)
// FOR in -> Retorna índice ou chave (String, arrays ou objetos)
//FOR  of -> Retorna o valor em si (interáveis, arrays ou strings)