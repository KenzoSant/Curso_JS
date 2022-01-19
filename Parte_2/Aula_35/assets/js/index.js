const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div' ,texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},  
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i=0; i < elementos.length; i++){
    const {tag , texto } = elementos[i] ; //desestruturação
    let tagCri = document.createElement(tag);
    let textoCri = document.createTextNode(texto)

    //tagCri.innerText = texto; //ou innerHTML
    tagCri.appendChild(textoCri)
    div.appendChild(tagCri);
}
container.appendChild(div);