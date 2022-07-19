class Dzielniki(var n: Int=1)
{
    var d: Int = 0
    operator fun iterator() = this
    operator fun hasNext() = d != n
    operator fun next(): Int
    {
        do d += 1 while(n % d != 0)
        return d
    }
}

fun main()
{
    print("120 =")
    for(x in Dzielniki(120)) print(" $x")
}