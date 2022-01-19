const inputtarefa = document.querySelector('.input-tarefa');
const btntarefa = document.querySelector('.add-tarefa')
const tarefas = document.querySelector('.tarefas');

function criali(){
    const li = document.createElement('li');
    return li;
}

inputtarefa,addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        if(!inputtarefa.value) return;
        criatarefa(inputtarefa.value);
    }
})

function limpain(){
    inputtarefa.value = '';
    inputtarefa.focus();
}

function criabtapa(li){
    li.innerText += ' ';
    const botaoapa = document.createElement('button');
    botaoapa.innerText = 'Apagar'
    botaoapa.setAttribute('class', 'apagar')
    botaoapa.setAttribute('title', 'apagar esta tarefa?')

    li.appendChild(botaoapa);
}

function criatarefa(txtinput){
    const li = criali();
    li.innerText = txtinput;
    tarefas.appendChild(li);
    limpain();
    criabtapa(li);
    savetarefa()
}

btntarefa.addEventListener('click' , function(){
    if(!inputtarefa.value) return;
    criatarefa(inputtarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        savetarefa();
    }

});

function savetarefa(){
    const lit = tarefas.querySelectorAll('li')
    const listt = []

    for(let tare of lit){
        let tatxt = tare.innerText;
        tatxt = tatxt.replace('Apagar', '').trim()
        listt.push(tatxt)
    }

    const tarefaJSON = JSON.stringify(listt);
    localStorage.setItem('tarefas', tarefaJSON);
}

function addtarefasave(){
    const tarefas = localStorage.getItem('tarefas')
    const listadetare = JSON.parse(tarefas);
    for(let tarefa of listadetare){
        criatarefa(tarefa)
    }
}
addtarefasave();