import kotlin.math.sqrt

open class Prostokat(var a: Double, var b: Double)
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

class Plakat(a : Double = 15.0,
             b : Double = 15.0,
             var kolor : String = "#FFF",
             var tekst : String = "Witaj!"
            ) : Prostokat(a, b)
{
    override fun toString()= "$tekst (plakat $a x $b w kolorze $kolor)"
}

fun main()
{
    val list = listOf<Prostokat>(
        Prostokat(5.5, 6.0),
        Prostokat(7.2, 5.1),
        Prostokat(2.0, 5.0),
        Prostokat(10.1, 20.8),
        Plakat(tekst = "Kotlin rulez!"),
        Plakat(kolor = "#000", tekst = "Moje zadanie")
    )

    println(list.sortedBy { it.a })
    println(list.sortedBy { it.b })
    println(list.sortedBy { it.pole })
    println(list.sortedBy { it.obwod })
    println(list.sortedBy { it.przekatna })

    for(i in list) println(i.toString())
    list.forEach { println(it.toString()) }
}