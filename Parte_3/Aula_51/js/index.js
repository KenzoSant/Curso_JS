function soma (x,y){
    return x+y;
}
console.log(soma(5,8));

//--------------------------------------------

document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
});

//--------------------------------------------

function pessoa(nome,snome){
    return {nome:nome,snome:snome}
}
const pes = pessoa('Mateus', 'Kenzo')
const pes1 = pessoa('Joao', 'Paulo')
console.log(pes);
console.log(pes1);

//--------------------------------------------

function duplo(n){
    return n *2
}
function triplo(n){
    return n *3
}
function quadruplo(n){
    return n *4
}
console.log(duplo(2));
console.log(triplo(2));
console.log(quadruplo(2));

//--------------------------------------------

function criamult(n){
    return function (n1){
        return n1*n
    }
}
const dois = criamult(2)
const tres = criamult(3)

console.log(dois(5));
console.log(tres(5));