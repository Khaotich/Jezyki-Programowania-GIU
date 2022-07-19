function* fibonacci()
{
    let x = 0;
    let y = 1;

    while(1)
    {
        yield BigInt(x + y);
        [x, y] = [y, x + y];
    }
}

function* fragment(iter, skip, limit=1)
{
    for(let i = 0; i < skip + limit; i++)
    {
        if(i >= skip) yield "i = " + i + " " + iter.next().value;
        else iter.next().value;
    }
}

for(let x of fragment(fibonacci(), 100, 3)) console.log(x)