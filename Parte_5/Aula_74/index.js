// Construtora -> molde (classe)
function Pessoa(nome,sobrenome){
    this.nome= nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome +''+this.sobrenome
}

//instancia
const pes1 = new Pessoa('Mateus','Kenzo') // <- Pessoa = Função construtora
const pes2 = new Pessoa('Ken','Tokashiki')

console.dir(pes1)
console.dir(pes2)
