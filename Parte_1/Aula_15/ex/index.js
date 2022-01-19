const n1 = Number(prompt('Digite um numero'));

//const n1 = Math.floor(Math.random() * 150) -100;

const numerotitulo = document.getElementById('numero');
const texto = document.getElementById('texto');

numerotitulo.innerHTML = n1;

texto.innerHTML += `Raiz quadrada: ${n1**0.5} <p>`;

texto.innerHTML += `${n1} é inteiro: ${Number.isInteger(n1)}<p>`;

texto.innerHTML += `${n1} é NaN: ${Number.isNaN(n1)}<p>`;

texto.innerHTML += `Arredondado para baixo: ${Math.floor(n1)}<p>`;

texto.innerHTML += `Arredondado para baixo: ${Math.ceil(n1)}<p>`;

texto.innerHTML += `Com duas casas decimais: ${n1.toFixed(2)}<p>`;

