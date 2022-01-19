/*let i = 0 

while(i<=10){
    console.log(i);
    i++;
}

console.log('\n');

const nome =   'Mateus'

let n1 = 0
while(n1 < nome.length){
    console.log(nome[n1]);
    n1++
}*/

function ran(min,max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
const min = 1
const max = 20
let rand = ran(1,20)

while (rand !== 10){
    rand = ran(1,20)
    console.log(rand);
}