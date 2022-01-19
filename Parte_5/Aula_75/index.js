//new Object -> Object.prototype
/*
const objA = {
    chaveA : 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB : 'B'
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveB);
*/

function Produto(nome, valor){
    this.nome = nome;
    this.valor = valor;
};

Produto.prototype.desconto = function(percentual){
    this.valor = this.valor - (this.valor * (percentual / 100));
};
Produto.prototype.aumento = function(percentual){
    this.valor = this.valor + (this.valor * (percentual / 100));
};

const n1 = new Produto('Camiseta', 50);
n1.desconto(20);
n1.aumento(10)
console.log(n1);

const n2 ={
    nome: 'Caneca',
    valor: 20
};
Object.setPrototypeOf(n2, Produto.prototype);
n2.desconto(10)
console.log(n2);

const n3 = Object.create(Produto.prototype,{
    nome:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Calça'
    },
    valor:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 80
    },
    tamanho:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 36
    }
});
n3.aumento(10);
console.log(n3);