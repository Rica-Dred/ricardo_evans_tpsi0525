// Crie um algoritmo que mostre os 10 primeiros números primos.

const prompt = require('prompt-sync')();

let count = 0;
let num = 2;

while (count < 10) 
{
    let Primo = true;
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
        console.log(num);
        count++;
    }
    num++;
}

