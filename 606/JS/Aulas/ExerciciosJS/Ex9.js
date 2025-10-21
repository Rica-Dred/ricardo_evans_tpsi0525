// Escreva um programa que solicite um número ao utilizador até que o valor deste esteja entre os valores 1 e 100.
// (Use o ciclo do ... while)
const prompt = require('prompt-sync')();

let num;

do 
{
    num = parseInt(prompt("Escolha um número até estar dentro do intervalo correto :  "));
}
while (num < 1 || num > 100);
console.log(`Número ${num} válido!`);

