function Produto(nome, preco, estoque) {
	this.Nome = nome;
	this.Preço = preco;

	let estoque1 = estoque

	Object.defineProperty(this, 'estoque', {
		enumerable: true, // mostra a chave
		configurable: false, // configurvel
		get: function () {
			return estoque1
		},
		set: function (val) {

			if (typeof val !== 'number') {
				throw new TypeError('Valor inválido')
			}
			estoque1 = val
		}
	})
}

// Getter -> Obter valor
// Setter -> Setar o valor

//const n1 = new Produto('Camiseta', 30, 10)
//n1.estoque = 60 // -> graças ao SET posso 'mudar o valor do estoque'
//console.log(n1.estoque);

function criaProduto(nomes){
	return{
		get nomes(){
			return nomes
		},
		set nomes(val){
			val = val.replace('pet','')
			nomes = val
		}
	}
}

const n2 = criaProduto('Nana do Nana')
n2.nomes = 'Garrafa pet'
console.log(n2.nomes);