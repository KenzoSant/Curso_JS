/*

Object.values
Object.entries
Objects.getOwnPropertydescriptor(o,'prop')
Object.assign(des, any)
...(spread)


//Já vimos
Obejct.keys (retorna as chaves)
Object.frezze (congela o objeto)
Object.defineProperties (define varias propriedades)
Objct.Propert (define apenas uma propriedade)

*/ 

const prod = {nome:'Caneca', preco: 8}
const prod1 = {...prod , material: 'Porcelana'}
//const prod1 = Object.assign({}, prod ,{material: 'Porcelana'} )

for(let [n1,n2] of Object.entries(prod)){
    console.log(n1,n2);
}

/*for(let [n1] of Object.entries(prod)){
    console.log(n1[0],n1[1]);
}*/

prod1.nome = 'Papel'
console.log(prod);
console.log(prod1);