/* Kenzo Santos tem 17 anos, pesa 55kg tem 1.65 de 
altura e seu IMC é de ? */

const nome = 'Kenzo'
const sobrenome = 'Santos'
const anoNascimento= 2003
const peso = 55
const altura = 1.65
const Imc = peso/Math.pow(altura, 2)
const idade = 2020 - anoNascimento

console.log(nome,sobrenome, 'tem',idade,'anos, pesa',peso,'kg tem',altura,'de altura e seu IMC é de:',Imc)
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem altura de ${altura} e seu IMC é de: ${Imc}`)