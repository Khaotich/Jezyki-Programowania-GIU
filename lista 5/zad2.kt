import kotlin.math.sqrt

class Prostokat(var a: Double, var b: Double)
{
    var pole : Double
        get() = a * b
        set(value)
        {
            a = sqrt(value)
            b = a
        }

    var obwod : Double
        get() = 2 * (a + b)
        set(value)
        {
            a = value / 4
            b = a
        }

    val przekatna : Double
        get() = sqrt(a * a + b * b)

    override fun toString() = "Wymiary: $a $b"
}

fun main()
{
    val list = listOf<Prostokat>(
        Prostokat(5.5, 6.0),
        Prostokat(7.2, 5.1),
        Prostokat(2.0, 5.0),
        Prostokat(10.1, 20.8)
    )

    //Zadanie 2.A
    println("Zadanie 2A")
    for(i in list)
    {
        println(i.toString())
    }

    //Zadanie 2.B
    println("Zadanie 2B")
    list.forEach{
        println(it.toString())
    }

    //Zadanie 2.C
    println(list.sortedBy { it.a })
    println(list.sortedBy { it.b })
    println(list.sortedBy { it.pole })
    println(list.sortedBy { it.obwod })
    println(list.sortedBy { it.przekatna })
}