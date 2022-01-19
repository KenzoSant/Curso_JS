// ? ;

const pontuacao = 100

const nivel = pontuacao >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corusuario = null;
const corpadrao = corusuario || 'Preta'; 

console.log(nivel, corpadrao);


/*
if(pontuacao >= 1000){
    console.log('Usuário VIP');
}else{
    console.log('Usuário normal');
}
*/