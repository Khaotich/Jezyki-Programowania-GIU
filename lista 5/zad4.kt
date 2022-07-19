interface Masywny {val masa : Double}

class Osoba(override val masa : Double) : Masywny
{
    override fun toString() = "Osoba o masie $masa"
}

class Zwierze(override val masa: Double) : Masywny
{
    override fun toString() = "Zwierzeo o masie $masa"
}

class Bagaz(override val masa: Double) : Masywny
{
    override fun toString() = "Bagaż o masie $masa"
}

class Auto(override val masa: Double) : Masywny
{
    override fun toString() = "Auto o masie $masa"
}

fun main()
{
    val cargo = listOf(
        Osoba(80.5),
        Zwierze(15.2),
        Bagaz(1.7),
        Auto(2315.2)
    )

    //Zadanie 4.A
    println(cargo.sortedByDescending { it.masa })

    //Zadanie 4.B
    println("Suma mas elementów: " + cargo.fold(0.0){ sum, element -> sum + element.masa })
    println("średnia masa elementów: " + cargo.fold(0.0){ sum, element -> sum + element.masa / cargo.size })

    //Zadanie 4.C
    val sr = cargo.fold(0.0){ sum, element -> sum + element.masa / cargo.size }
    cargo.filter{it.masa > sr}.forEach{ println("Elementy o masie powyżej średniej: " + it) }
}