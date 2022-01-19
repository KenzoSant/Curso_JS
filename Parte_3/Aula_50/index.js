function funcao() {
    console.log('oi');
}; funcao('salve')

function funcao1() {
    console.log(arguments[2]);
}; funcao1('salve', 1, 2, 3)

function funcao2(a, b, c) {

    let soma = 0

    for (let i of arguments) {
        soma += i
    }

    console.log(soma, a, b, c);

}; funcao2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function funcao3(a,b=0){
    console.log(a+b);

};funcao3(5)

function funcao4(op,ac,...nu){

    console.log(op,ac,nu);

};funcao4('+',0,10,20,30,40,50)

function funcao5(op,ac,...nu){

    for(let num of nu){
       if(op=='+') ac += num
       if(op=='-') ac -= num
       if(op=='*') ac *= num
       if(op=='/') ac /= num
    }
    console.log(ac);

};funcao5('+',1,10,20,30,40,50)