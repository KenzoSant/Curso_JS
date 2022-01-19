const paragrafos = document.querySelector('.paragrafo');
const p = paragrafos.querySelectorAll('p');

const estilos = getComputedStyle(document.body);
const back = estilos.backgroundColor;


for (let i of p) {
    i.style.backgroundColor = back;
    i.style.color = 'white';   
}