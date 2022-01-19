function getsec(sec){
    const data = new Date(sec*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');

let sec = 0;
let timer;

function iniciarel(){
    timer = setInterval(function() {
        sec++;
        relogio.innerHTML = getsec(sec);
    },1000);
}

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciarel()
    }
    if(el.classList.contains('pausar')){
        relogio.classList.add('pausado')
        clearInterval(timer)
    }
    if(el.classList.contains('zerar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        relogio.innerHTML ='00:00:00'
        sec = 0
    }
    
})
