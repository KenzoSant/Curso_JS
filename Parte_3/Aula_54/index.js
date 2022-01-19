function rand(min=1000,max=2000){
    const val = Math.random() * (max-min)+min
    return Math.floor(val)
}

function f1(callback){
    setTimeout(function(){
        console.log('Mateus');
        if(callback) callback()
    },rand());
}

function f2(callback){
    setTimeout(function(){
        console.log('Kenzo');
        if(callback) callback()
    },rand());
}

function f3(callback){
    setTimeout(function(){
        console.log('Santos');
        if(callback) callback()
    },rand());
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('Nome');
        });
    });
});

/*

f1(f1callback);

function f1callback(){
    f2(callback)
}

function f2callback(){
    f3(callback)
}

*/ 
