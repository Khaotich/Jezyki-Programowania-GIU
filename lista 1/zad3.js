//a
function suma_a(...args)
{
    let sum = 0;
    for(let arg of args) if(typeof(arg) == 'number') sum += arg;
    return sum;
}

//b, c
function suma_b(...args)
{
    let sum = 0;
    for(let arg of args)
    {
        if(typeof(arg) == 'number') sum += arg;
        else if(Array.isArray(arg)) sum += suma_b(...arg);
    }
    return sum;
}

//test a
console.log(suma_a(1, 2, 3, 10, [], 20, 30, "marek", {a:4}));

//test b
console.log(suma_b(1, 2, 3, [4,5, "aa"], 10, "asda"));

//test c
console.log(suma_b(1, 2, 3, [4, 5, [5,5]], 10));