const h1 = document.querySelector('.container h1')

const data = new Date();

// Na função nao use switch USE array
// const diasemana = ['segunda','terça'...]; return diasemana

function getdiasemanatxt
(diasemana){

    let diasemanatxt;

    switch(diasemana){ 
    
        case 0:
            diasemanatxt = 'Domingo'
            return diasemanatxt
        case 1: 
            diasemanatxt = 'Segunda-feira'
            return diasemanatxt
        case 2:
            diasemanatxt = 'Terça-feira'
            return diasemanatxt 
        case 3:
            diasemanatxt = 'Quarta-feira'
            return diasemanatxt  
        case 4:
            diasemanatxt = 'Quinta-feira'
            return diasemanatxt   
        case 5:
            diasemanatxt = 'Sexta-feira'
            return diasemanatxt 
        case 6:
            diasemanatxt = 'Sabado'
            return diasemanatxt        
    
    }

}

function getmes(mes){

    let nomemestxt;

    switch(mes){ 
    
        case 0:
            nomemestxt = 'Janeiro'
            return nomemestxt
        case 1: 
            nomemestxt = 'Fevereiro'
            return nomemestxt
        case 2:
            nomemestxt = 'Março'
            return nomemestxt 
        case 3:
            nomemestxt = 'Abril'
            return nomemestxt 
        case 4:
            nomemestxt = 'Maio'
            return nomemestxt   
        case 5:
            nomemestxt = 'Junho'
            return nomemestxt
        case 6:
            nomemestxt = 'Julho'
            return nomemestxt   
        case 7:
            nomemestxt = 'Agosto'
            return nomemestxt   
        case 8:
            nomemestxt = 'Setembro'
            return nomemestxt 
        case 9:
            nomemestxt = 'Outubro'
            return nomemestxt 
        case 10:
            nomemestxt = 'Novembro'
            return nomemestxt 
        case 11:
            nomemestxt = 'Dezembro'
            return nomemestxt     
    }

}

function zeroaesquerda(zero){
    return zero >= 10? zero : `0${zero}`
}

function criadata(data){
    const diasemana = data.getDay()
    const mes = data.getMonth()

    const nomeDia = getdiasemanatxt(diasemana);
    const nomeMes = getmes(mes);

    return(
        `${nomeDia}, ${data.getDate()} de ${nomeMes}`+
        ` de ${data.getFullYear()} `+
        `${zeroaesquerda(data.getHours())}:${zeroaesquerda(data.getMinutes())}`
    )
}

h1.innerHTML = criadata(data);

/*const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle:'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR',opcoes)
*/
 

