const pessoa = {
    nome: "mateus",
    sobrenome: "Santos"
};

const chave = 'nome'
console.log(pessoa[chave]);
console.log("-----------");

/*---------------------*/


const pes = new Object()
pes.nome = "Kenzo"
pes.idade = 18
pes.altura = 1.65
pes.fala = function(){
    return(`${this.nome} esta falando seu nome`);
}
pes.getdatanasc = function(){
    const dataatual = new Date()
    return dataatual.getFullYear() - this.idade
}

//delete pes.idade
console.log(pes.idade);
console.log(pes.altura);
pes.fala();
console.log(pes.getdatanasc());
console.log("-----------");

//FUNCTION dentro de OBJ = METODO

/*---------------------------------*/

//Factory functions / Constructors functions / Classes

function criapes(nome,sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}
const n1 = criapes('Kenzo','Mateus')
console.log(n1.nomeCompleto());
console.log("-----------");

/*-------------------------------*/

function Pessoa(nome,sobrenome){
    this.Nome = nome,
    this.Sobrenome = sobrenome,
    Object.freeze(this) //Ninguem muda no n2.nome = "x"
}
const n2 = new Pessoa('Santos','MK')
console.log(n2);
