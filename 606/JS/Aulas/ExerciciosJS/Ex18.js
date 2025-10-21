// Elabore um programa que leia uma entrada e diga quantos números perfeitos existem. Exemplo de numero perfeito em que somando todos os divisores ele da o numero inicial.
// 6=3+2+1 .

const prompt = require('prompt-sync')();
let num = parseInt(prompt("Número: "));

let Perfeito = 0;
for(let i = 1; i <= num; i++)
{
    let sumDivisors = 0;
    for(let x = 1; x < i; x++)
    {
        if(i % x === 0)
        {
            sumDivisors += x;
        }
    }
    if(sumDivisors === i)
    {
        Perfeito++;
        console.log(i, "é um número perfeito.");
    }
}
console.log("Existem", Perfeito, "números perfeitos entre 1 e", num);