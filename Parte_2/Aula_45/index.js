/*try{
    //console.log(b);
    console.log('Arquivo');
    console.log('Arquivo corrompido');
    console.log('Arquivo fechado');
    // executada quando não há erros
}catch(e){
    console.log('Tratando o erro');
    //executa quando há erros
} finally {
    console.log('Sempre sou executado');
    //Sempre
}*/

function rhora (data){
    if(data && !(data instanceof Date)){
        throw new Error('Esperando instância de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const dataa = new Date('01-01-1970 12:58:48')
    const hora = rhora(dataa);
    console.log(hora);
}catch(e){
    console.log('Tratar erro');
}finally{
    console.log('Tenha um bom dia');
}
