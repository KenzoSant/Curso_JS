// Funçaõ construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome,sobrenome){
    //Atributos ou metodos Privados
    const ID = 1234
    const privado = function(){

    }
    //Atributos ou metodos Publicos 
    this.Nome = nome
    this.Sobrenome = sobrenome
    
    this.metodo = function(){
        console.log(this.Nome + ': Sou em método');
    }
}
const p = new Pessoa('Kenzo','Santos')
p.metodo()