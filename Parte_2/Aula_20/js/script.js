function escopo(){
    const form = document.querySelector('.form');
    const resultado= document.querySelector('.res')

    /*form.onsubmit = function (evento){
        evento.preventDefault();
        alert(1);
        console.log('Enviado');
    };*/

    /*let cont = 1;
    function recebeForm (evento){
        evento.preventDefault();
        console.log('Form não enviado', cont);
        cont++;
    }*/

    const pessoas = [];

    function recebeForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const snome = form.querySelector('.snome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            snome: snome.value,
            peso: peso.value,
            altura: altura.value 
        });

        console.log(pessoas);

        resultado.innerHTML +=`<p>${nome.value} ${snome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeForm)
}

escopo();