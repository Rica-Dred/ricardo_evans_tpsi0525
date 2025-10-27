// Elabore um programa que leia quantos números quer que se efetue a soma, subtrações, divisões, multiplicações e no 
// fim por meio de um acumulador diga quantas operações foram efetuadas. 
// Exemplo introduzindo o número 60 o programa deve apresentar 60 a somar, dividir multiplicar e subtrair por todos os números menores que ele.
const prompt = require('prompt-sync')();

let menor = parseInt(prompt("Número: "));

for(let i = 1; i < menor; i++)
{
    console.log(menor, "+", i, "=", menor + i);
    console.log(menor, "-", i, "=", menor - i);
    console.log(menor, "*", i, "=", menor * i);
    console.log(menor, "/", i, "=", menor / i);
}



