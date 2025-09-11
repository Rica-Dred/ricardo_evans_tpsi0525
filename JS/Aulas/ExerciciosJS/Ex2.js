//Ler 10 números e dizer se são pares ou ímpares

const prompt = require('prompt-sync')();
for (let i = 1; i <= 10; i++) 
{
    let num = prompt("Numero : ");
    if (num % 2 === 0)
    {
        console.log(`${num} é par.`);
    }
    else
    {
        console.log(`${num} é ímpar.`);
    }
}