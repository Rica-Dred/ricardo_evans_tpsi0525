// npm install prompt-sync
// Adivinha o nome

const prompt = require('prompt-sync')();

let nomeAdivinha = 'Andre'; 

function adivinharNome(nomeAdivinha)
{
let nomeAdivinhado = prompt('Qual o nome? ');
    if (nomeAdivinha === nomeAdivinhado)
    {
        console.log('Acertou o nome');
    }
else
{
    console.log('Errou o nome');
}
}

adivinharNome(nomeAdivinha);