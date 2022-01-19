function retornafuncao(nome){
    return function(){
        return nome;
    }
}

const funcao = retornafuncao('Luiz')
console.dir(funcao());


