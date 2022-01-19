//Function HOISTING
function falaoi(){
    console.log('Oi');
}
falaoi()

//First-class objects (objetos de primeira classe)
//Usar a FUNCTION como um dado
const souumdado = function(){
    console.log('sou um dado');
}
souumdado()

function exe(funcao){
    funcao()
}
exe(souumdado)

//Arrow FUNCTION
const funcaoarrow = () =>{
    console.log('arrow function');
}
funcaoarrow()

//setInterval(funcaoarrow, 1000);

//Dentro de um OBJ
const obj ={
    falar(){
        console.log('estou falando');
    }
};obj.falar()