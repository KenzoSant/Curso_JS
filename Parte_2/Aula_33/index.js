const pessoa = {
    nome: 'Mateus',
    sobrenome: 'Santos',
    idade: 17,
    end: {
        rua: 'Sei la',
        num: 20
    }
}
//const ma = pessoa.nome; -->  coloca na variavel
// (...res tambem funfa)
//Atribuição via desestruturação

const {nome,sobrenome,idade} = pessoa
console.log(nome,sobrenome,idade);

const {end:{rua,num}} = pessoa
console.log(rua,num);