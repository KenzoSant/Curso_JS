const alunos = ['mateus','kenzo','lucas','luisa'];


console.log(typeof alunos);
console.log(alunos instanceof Array);

/* TUDO ISSO PODE ALTERAR OS NUMEROS DO INDICE */

//console.log(alunos instanceof Array); retorna TRUE pq o ARRAY esta CONST

//console.log(typeof alunos);

//console.log(alunos.slice(1,4)); exibe do 1 ao 4

/*delete alunos[1]; deleta o indice e seu numero '<1 empty item>' */

/*const rem = alunos.shift()
console.log(rem); remove do começo e retorna o removido */

/*const rem = alunos.pop()
console.log(rem); remove do final e retorna o removido */ 

//alunos.unshift('Luiza') add no começo

//alunos.push('otavio'); add ao final da lista

//console.log(alunos.length);

// alunos[alunos.length] = 'alek' add mais nomes a lista

//alunos[1] = 'maria' muda o indice

//alunos[3]= 'Luiza' add mais 1 nome

//console.log(alunos[1]); exibe o indice que esta no cont 1