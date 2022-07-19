fun gcd(a: Int, b: Int):Int
{
    var a_:Int = a
    var b_: Int = b
    while(b_ != 0)
    {
        val c = a_ % b_
        a_ = b_
        b_ = c
    }
    return a_
}

data class Ułamek(var licznik: Int=0, var mianownik: Int=1)
{
    init
    {
        val x = gcd(Math.abs(licznik), mianownik)
        licznik /= x
        mianownik /= x
    }

    override fun toString() = "$licznik/$mianownik"

    operator fun times(u:Ułamek) = Ułamek(licznik * u.licznik, mianownik * u.mianownik)
    operator fun div(u:Ułamek) = Ułamek(licznik * u.mianownik, mianownik * u.licznik)
    operator fun plus(u:Ułamek) = Ułamek(licznik * u.mianownik + mianownik * u.licznik, mianownik * u.mianownik)
    operator fun minus(u:Ułamek) = Ułamek(licznik * u.mianownik - mianownik * u.licznik, mianownik * u.mianownik)
    operator fun unaryMinus() = Ułamek(-licznik, mianownik)
    operator fun unaryPlus() = this
    operator fun times(u:Int): Ułamek = Ułamek(licznik * u, mianownik)
    operator fun div(u:Int): Ułamek = Ułamek(licznik, mianownik * u)
    operator fun plus(u:Int): Ułamek = Ułamek(licznik + u * mianownik, mianownik)
    operator fun minus(u:Int): Ułamek = Ułamek(licznik - u * mianownik, mianownik)
}

operator fun Int.times(u:Ułamek): Ułamek = Ułamek(this * u.licznik, u.mianownik)
operator fun Int.plus(u:Ułamek): Ułamek = Ułamek(u.licznik + this * u.mianownik, u.mianownik)
operator fun Int.minus(u:Ułamek): Ułamek = Ułamek(this * u.mianownik - u.licznik, u.mianownik)
operator fun Int.div(u:Ułamek): Ułamek = Ułamek(u.mianownik * this, u.licznik)

fun main()
{
    val a = Ułamek(2,5)
    val b = Ułamek(3,10)
    println("a=$a")
    println("b=$b")
    println("$a * $b = ${a*b}")
    println("$a / $b = ${a/b}")
    println("$a + $b = ${a+b}")
    println("$a - $b = ${a-b}")
    println("$a + 4 = ${a+4}")
    println("$a - 4 = ${a-4}")
    println("$a * 4 = ${a*4}")
    println("$a / 4 = ${a/4}")
    println("4 + $a = ${4+a}")
    println("4 - $a = ${4-a}")
    println("4 * $a = ${4*a}")
    println("4 / $a = ${4/a}")
}