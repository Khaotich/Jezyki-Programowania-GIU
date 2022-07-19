operator fun String.times(int: Int): String
{
    var result: String = ""
    for(i in this)
        for(j in 1..int) result += i
    return result
}

fun main()
{
    print("Ala ma kota" * 3)
}