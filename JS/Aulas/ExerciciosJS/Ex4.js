//Crie um algoritmo que leia um número inteiro, e diga se ele é um número primo ou não.
const prompt = require('prompt-sync')();

let num = parseInt(prompt("Número inteiro: "));
let Primo = true;
if (num <= 1) 
{
    Primo = false;
}
for (let i = 2; i < (num); i++) 
{
    if (num % i === 0) 
    {
        Primo = false;
        break;
    }
}

if (Primo) 
{
    console.log(`${num} é um número primo.`);
} else 
{
    console.log(`${num} não é um número primo.`);
}