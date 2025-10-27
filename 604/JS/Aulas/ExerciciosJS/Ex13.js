// Elabore um programa que leia um número e mostre a tabuada. (multiplicar de 1 a 10)

const prompt = require('prompt-sync')();

let num = parseInt(prompt("Número: "));

for(let i = 1; i <= 10; i++)
{
    console.log(num, "x", i, "=", num * i);
}