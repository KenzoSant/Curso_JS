/*const pessoa = {
    nome: 'Mateus',
    snome:'Santos',
    idade: 18   
};

console.log(pessoa.nome);
console.log(pessoa.snome);
console.log(pessoa.idade);
*/

/*function pes (nome,snome,idade){
    return{
        nome,snome,idade
    };
}
const p = pes('Mateus','Santos', 25)
const p1 = pes('Joao','Pedro', 32)
console.log(p.nome, p.snome, p.idade);
console.log(p1.nome);
*/

const pessoa = {
    nome: 'Mateus',
    snome:'Santos',
    idade: 18  , 

    fala(){
        console.log(`${this.nome} ${this.snome} mandou um salve`);
        console.log(`${this.idade}`);
    },
    fala1(){
        this.idade++;
    }
};

pessoa.fala()
pessoa.fala1()
pessoa.fala()
pessoa.fala1()
pessoa.fala()
