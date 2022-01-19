//const nome = ['Mateus', 'Kenzo']
const nome = new Array('Mateus', 'Kenzo', 'Santos','Gengar', 'Hayabusa')

// const n2 = nome.join(' ') TRANSFORMA ARRAY EM NOME FULL

const nomee = 'Mateus Kenzo Santos'
const n1 = nomee.split(' ')

//const novo = [...nome]

//novo.pop() REMOVE O ULTIMO

//novo.shift() REMOVE O PRIMEIRO

//const removido = novo.pop() USA O REMOVIDO COMO VARIAVEL

//console.log(removido)

//nome[2] = 'Yudi'

//delete nome[1]

//nome.push('Gengar') ADD UM TXT NO FINAL
//nome.unshift('FF') ADD UM TXT NO INICIO

const novo = nome.slice(2,4)
console.log(nome);
console.log(novo);
console.log(nome.length);
console.log(n1);
console.log(n2);