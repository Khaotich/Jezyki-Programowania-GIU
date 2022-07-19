function* dzielniki(n)
{
    for(let i = 1; i <= n; i++) if(n % i == 0) yield i;
}

function* pierwsze(n)
{
    for(let i = 2; i <= n; i++)
    {
        let tab = [1];
        for(let j = 2; j <= i; j++)
        {
            if(tab.length > 2) break;
            if(i % j == 0) tab.push(j);
        }
        if(tab.length == 2) yield i;
    } 

}

function* rozklad(n)
{
    let k = 2;
    while(n > 1)
    {
        while(n % k == 0)
        {
            yield k;
            n /= k;
        }
        k++;
    }
}

function wypisz(gen)
{
    for(let x of gen) console.log(x);
}
    
function wypisz2(gen)
{
    while(!(x = gen.next()).done) console.log(x.value);
}

function sklej(gen, glue=',')
{
    let result = '';
    for(let x of gen) result += x + glue;
    console.log(result);
}

function suma(gen)
{
    let result = 0;
    for(let x of gen) result += x ;
    console.log(result);
}

function iloczyn(gen)
{
    let result = 1;
    for(let x of gen) result *= x ;
    console.log(result);
}

console.log(Array.from(dzielniki(20)));
console.log(Array.from(pierwsze(20)));
console.log(Array.from(rozklad(20)));

wypisz(dzielniki(20));
wypisz(pierwsze(20));
wypisz(rozklad(20));

wypisz2(dzielniki(20));
wypisz2(pierwsze(20));
wypisz2(rozklad(20));

sklej(dzielniki(20));
sklej(pierwsze(20));
sklej(rozklad(20));

suma(dzielniki(20));
suma(pierwsze(20));
suma(rozklad(20));

iloczyn(dzielniki(20));
iloczyn(pierwsze(20));
iloczyn(rozklad(20));