// Elabore um programa que lê um número e escreve quantos divisores ele possui.
const prompt = require('prompt-sync')();

let num = parseInt(prompt("Número: "));

let count = 0;

for(let i = 1; i <= num; i++)
{
    if(num % i === 0)
    {
        count++;
    }
}
console.log(`O número ${num} possui ${count} divisores.`);



