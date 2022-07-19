function f(a, b)
{
    let sum_a = 0;
    let sum_b = 0;
    const d = 10;

    for(let i = 0; i < toString(a).length; i++)
    {
        sum_a += a % d;
        sum_b += b % d;
        a = (a - a % d) / d;
        b = (b - b % d) / d;
    }
    return (sum_a - sum_b);
}

let tab = [1, 2, 3, 271, 12313, 123, 21313, 541, 42];

console.log(tab.sort((a, b) => b - a));
console.log(tab.sort((a, b) => a % 10 - b % 10));
console.log(tab.sort((a, b) => (a % 100 - a % 10) - (b % 100 - b % 10)));
console.log(tab.sort(f));