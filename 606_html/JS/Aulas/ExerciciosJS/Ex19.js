// Escreva um programa que mostre os primeiros 60 números da serie bonatchi.
// 1, 1, 2, 3, 5, 8, 13, 21.
// co se constrói.
// 1+1=2
//   1+2=3
//     2+3=5

const prompt = require('prompt-sync')();

let num = 60;
let a = 0, b = 1, c;

console.log("Série de Bonatchi:");
for (let i = 1; i <= num; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}
console.log("Fim da série.");
