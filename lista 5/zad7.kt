fun rozkład(n: Int=1, operations: (Int) -> Unit)
{
    var d = 2
    var tmp = n
    while(tmp >= d)
    {
        if(tmp % d == 0)
        {
            tmp /= d
            operations(d)
        }
        else d += 1
    }
}

fun dzielniki(n: Int=1, operations: (Int) -> Unit)
{
    var d = 0
    do
    {
        d += 1
        if(n % d == 0) operations(d)
    }
    while(d <= n)
}

fun main()
{
    print("120 =")
    rozkład(120){ print(" $it") }

    print("\n120 =")
    dzielniki(120){ print(" $it") }

    var sum: Int = 0
    dzielniki(144){ sum += it }
    print("\nSuma dzielników liczby 144 = $sum")
}