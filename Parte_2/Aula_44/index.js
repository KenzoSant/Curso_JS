function soma (x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw /*new Error*/('X e Y não são numeros')
    }
    return x + y
}

try{
    console.log(soma('1',2));
}catch(erro){
    //console.log(erro);
    console.log('Erro');
}
