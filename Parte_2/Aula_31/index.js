// LET tem escopo de bloco {..............}
// VAR VAR só tem escopo de funçao

// O VAR muda nao importa onde a sua redeclaração esteja 
//(FUNCTION da ruim!!!)

const ve = true

let n = 'mateus'
var m = 'kenzo'

if(ve){

    let n = 'joao'
    var m = 'pedro'
    console.log(n,m);

    if(ve){
        let n = 'lucas'
        var m = 'luiza'
        console.log(n,m);
    }
}

console.log(n,m);