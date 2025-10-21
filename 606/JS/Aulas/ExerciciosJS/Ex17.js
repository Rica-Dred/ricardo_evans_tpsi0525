// Elabore um programa que determine os múltiplos de 5 mas não múltiplos de 3 …. De 1 a 1000 deve ser a sequência. a começar no 1

for(let i = 1; i <= 1000; i++)
{
    if(i % 5 === 0 && i % 3 !== 0)
    {
        console.log(i);
    }
}
