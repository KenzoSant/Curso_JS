const num = [1,2,3,4,5,6,7,8,9];

for(let n1 of num){

    if(n1 == 2){
        console.log('pulei o numero 2');
        continue;
    }

    console.log(n1);

    if(n1 == 7){
        console.log('7 encontrado');
        break;
    }

}