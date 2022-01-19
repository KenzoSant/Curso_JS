/*
const thoras = 60 * 60 * 3 * 1000;
const umdia = 60 * 60 * 24 * 1000; //um dia a mais ou um dia a menos dependendo do sinal
const data = new Date( 0 + thoras + umdia);  
*/

/*
const data = new Date(2019,3,20,15,14,27,500) //a,m,d,h,M,s,ms
*/

// Dai e mes commeça do 0(ZERO)

/*
const data = new Date('2003')
console.log(Date.now());
*/

function zeroaesquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formatadata(data){
    const dia = zeroaesquerda(data.getDate())
    const mes = zeroaesquerda(data.getMonth() +1)
    const ano = zeroaesquerda(data.getFullYear())

    return (`${dia}/${mes}/${ano}`)
}
const data = new Date()
const dataBR = formatadata(data)
console.log(dataBR);
