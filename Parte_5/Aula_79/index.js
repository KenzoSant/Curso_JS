//Factory Functions
function criaPessoa(nome,sobrenome){
    return Object.create(pessoaPrototype,{
        nome: {value:nome},
        sobrenome: {value:sobrenome},
    })
}

const falar= {
    falar(){
        console.log(`${this.nome} esta falando`);
    }
}

const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`);
    }
}

const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo`);
    }
}

//const pessoaPrototype ={...falar, ...comer, ...beber} 
const pessoaPrototype =Object.assign({}, falar,comer,beber) 


const p1 = criaPessoa('kenzo', 'Sant')
const p2 = criaPessoa('Yudi', 'Sant')
console.log(p1,p2)
