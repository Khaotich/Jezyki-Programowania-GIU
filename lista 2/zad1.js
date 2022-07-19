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

let fibo = fibonacci();
for(let i = 1; i <= 200; i++) console.log(i, "  ", fibo.next().value);