class Osoba(var imie : String, var nazwisko : String)
{
    override fun toString() = "$imie $nazwisko"
}

var osoby=listOf(
    Osoba("Jan","Kowalski"),
    Osoba("Ewa","Nowak"),
    Osoba("Artur","Kowalski"),
    Osoba("Adam","Nowak")
)

fun main()
{
    //Zadanie 1.A
    println(osoby.sortedBy{ it.imie })

    //Zadanie 1.B
    val compare = Comparator { a : Osoba, b : Osoba ->
        when{
            a.imie > b.imie -> 1
            a.imie < b.imie -> -1
            else -> 0
        }
    }
    println(osoby.sortedWith(compare))

    //Zadanie 1.C
    val compare2 = Comparator { a : Osoba, b : Osoba ->
        when{
            a.nazwisko > b.nazwisko -> 1
            a.nazwisko < b.nazwisko -> -1
            a.imie > b.imie -> 1
            a.imie < b.imie -> -1
            else -> 0
        }
    }
    println(osoby.sortedWith(compare2))

    //Zadanie 1.D
    println(osoby.sortedBy { it.nazwisko + it.imie })
}