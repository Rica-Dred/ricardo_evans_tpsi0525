// Altere o programa anterior para que mostre todas as tabuadas de 1 a 100. (ciclos for). sem pedir prompt

for(let i = 1; i <= 2; i++)
{
    console.log(`Tabuada do ${i}:`);
    for(let x = 1; x <= 10; x++)
    {
        console.log(x, "x", i, "=", i * x);
    }
    console.log('-------------------');
}

