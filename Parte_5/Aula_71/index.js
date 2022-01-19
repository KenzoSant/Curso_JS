function Produto (nome,preço,codigo){
    
    Object.defineProperty(this, 'Código', {
        enumerable: true, // mostra a chave
        value: codigo, // valor
        writable: false, // pode alterar
        configurable: false // configurvel
    })

    Object.defineProperties(this, {
        Nome:{
            enumerable: true, 
            value: nome, 
            writable: false, 
            configurable: false 
        },

        Preco:{
            enumerable: true, 
            value: preço, 
            writable: false, 
            configurable: false 
        }
    })

}

const n1 = new Produto('Camiseta', 35, 01)

console.log(n1);
console.log("----------------");

console.log(Object.keys(n1));
console.log("----------------");

for(let chave in n1){
    console.log(chave);
}