//Somar tudo

const num = [1,2,3,4,5,6]

const total = num.reduce(function(ac,valor){
    ac += valor
    return ac
},0)
console.log(total);

const par = num.reduce(function(ac,valor){
    if(valor % 2 == 0) ac.push(valor)
    return ac
},[])
console.log(par);

const dobro= num.reduce(function(ac,valor){
    ac.push(valor*2)
    return ac
},[])
console.log(dobro);

const somapar = num.reduce(function(ac,valor){
    if(valor % 2 == 0){
        ac+=valor
    } 
    return ac
},0)
console.log(somapar);



// Retorne a pessoa mais velha

const pes = [
    {nome: 'Mateus', idade:18},
    {nome: 'Maria', idade:51},
    {nome: 'Vinicius', idade:20},
    {nome: 'Leticia', idade:70},
    {nome: 'Bruna', idade:32},
    {nome: 'Kenzo', idade:55}
]

const old = pes.reduce(function(ac,valor){
    if(ac.idade > valor.idade) return ac
    return valor
},0)
console.log(old);
