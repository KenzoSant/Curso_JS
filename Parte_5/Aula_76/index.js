function Produto(nome,valor){
    this.nome = nome,
    this.valor = valor
};

Produto.prototype.aumento = function(quant){
    this.valor = this.valor + (this.valor * (quant/100))
};
Produto.prototype.desconto = function(quant){
    this.valor = this.valor - (this.valor * (quant/100))
};

function Camiseta(nome,valor,cor){
    Produto.call(this, nome, valor)
    this.cor = cor
};

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta

Produto.prototype.aumento = function(quant){
    this.valor = this.valor + (this.valor * (quant/100))
};

function Caneca(nome,valor,material,estoque){
    Produto.call(this,nome,valor)
    this.material = material
    
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(qt){
            if(typeof qt !== 'number') return
            estoque = qt
        }
    })

}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca

const camiseta = new Camiseta('Regata', 20, 'Azul')
camiseta.aumento(10)
console.log(camiseta);

const prod = new Produto ('Blusa', 100, 'Preta' )
prod.desconto(10)
console.log(prod);

const caneca = new Caneca ('Caneca', 25,'Porcelana', 10)
console.log(caneca);

//console.log(caneca.estoque);