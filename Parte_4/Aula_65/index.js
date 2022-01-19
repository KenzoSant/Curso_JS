//Filter, Map, Reduce

//Retorne os números maiores que 10

const num = [5, 65, 2, 54, 90, 21, 5, 34, 7]
const num1 = num.filter((valor) => {
    return valor >= 10
})
console.log(num1);

// Retorne as pessoas que tem o nome com 5 lt ou +
// Retorne as pessoas +50 idade
// Retorne as pessoas que o nome termina com 'A'
const pes = [
    {nome: 'Mateus', idade:18},
    {nome: 'Maria', idade:51},
    {nome: 'Vinicius', idade:20},
    {nome: 'Leticia', idade:70},
    {nome: 'Bruna', idade:32},
    {nome: 'Kenzo', idade:55}
]

const pes1 = pes.filter(nome => nome.nome.length > 5)
console.log(pes1);

const pes2 = pes.filter(idade => idade.idade > 50)
console.log(pes2);

const pes3 = pes.filter(nomeA => {
    return nomeA.nome.toLowerCase().endsWith('a')
});
console.log(pes3);
