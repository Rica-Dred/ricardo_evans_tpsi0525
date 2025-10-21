//Média de 10 alunos
const prompt = require('prompt-sync')();
let soma = 0;
for (let i = 1; i <= 10; i++) 
{
    let num = parseInt(prompt(`Nota do aluno ${i} : `));
    soma += num;
}
let media = soma / 10;
console.log("A média dos 10 alunos é: ${media}");
