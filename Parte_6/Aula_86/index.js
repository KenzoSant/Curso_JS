function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperar(msg,tempo){
    return new Promise((resolve, reject ) => {
        if(typeof msg !== 'string' ) reject("Erro")

        setTimeout(() =>{
            resolve(msg);
        },tempo);
    })
}

esperar("A", rand(1,2))
    .then(resposta =>{
        console.log(resposta);
        return esperar("B", rand(1,2))
    }).then(resposta => {
        console.log(resposta);
        return esperar(1, rand(1,2))
    }).then(resposta => {
        console.log(resposta);
    }).then(()=>{
        console.log("Ultimo");
    }).catch(e =>{
        console.log("Situação: ",e);
    })

console.log("Antes de Tudo");
/*
function esperar(msg,tempo,cb){
    setTimeout(() =>{
        console.log(msg);
        if(cb) cb();
    },tempo);
}

esperar("1", rand(1,3), function(){
    esperar("2", rand(1,3), function(){
        esperar("3", rand(1,3))
    })
})
*/

