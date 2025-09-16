// Elabore um programa que constitua a média de 30 números pares que sejam introduzidos. 
// Validando a entrada de números inteiros entre 1 e 50.
const prompt = require('prompt-sync')();

let sum = 0;
let count = 0;

while(count < 30)
{
    let num = parseInt(prompt("Número: "));
    if(num >= 1 && num <= 50 && num % 2 === 0)
    {
        sum += num;
        count++;
    }
    else
    {
        console.log("Número inválido. Introduza um número par entre 1 e 50.");
    }
}
console.log("Média dos números pares introduzidos:", sum / 30);