//Retorne a soma do doro de todos os pares 
// --> Filtrar pares
// --> Dobrar os valores
// --> reduzir (somar tudo)

const num = [2,2,3,3,4,4,5,5,]

const pares = num.filter(numeros => numeros % 2 == 0)
.map(dobro => dobro * 2)
.reduce((ac,val)=> ac + val)
console.log(pares);
