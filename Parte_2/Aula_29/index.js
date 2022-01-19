function getdiasemanatxt(diasemana){

    let diasemanatxt;

    switch(diasemana){ 
    
        case 0:
            diasemanatxt = 'Domingo'
            return diasemanatxt
        case 1: 
            diasemanatxt = 'Segunda'
            return diasemanatxt
        case 2:
            diasemanatxt = 'Terça'
            return diasemanatxt 
        case 3:
            diasemanatxt = 'Quarta'
            return diasemanatxt  
        case 4:
            diasemanatxt = 'Quinta'
            return diasemanatxt   
        case 5:
            diasemanatxt = 'Sexta'
            return diasemanatxt 
        case 6:
            diasemanatxt = 'Sabado'
            return diasemanatxt        
        default:
            diasemanatxt = ''  
            
    }

}

const data = new Date();
let diasemana = data.getDay();
const diasemanatxt = getdiasemanatxt(diasemana);

console.log(diasemana,diasemanatxt);