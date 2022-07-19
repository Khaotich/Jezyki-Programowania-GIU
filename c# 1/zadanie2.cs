using System;

namespace Zadanie2
{
    internal class Liczba
    {
        private int operacje = 0;
        private int _wartosc = 0;
        private int pobrania = 0;
        private int nadania = 0;

        public Liczba(int operacje)
        {
            this.operacje = operacje;
        }

        public int wartosc
        {
            get
            {
                this.pobrania += 1;
                this.operacje -= 1;
                if (this.operacje < 0)
                {
                    Console.WriteLine("Pobranie niemożliwe, wykorzystano limit operacji!");
                    return -1;
                }
                else return this._wartosc;
            }

            set
            {
                this.nadania += 1;
                this.operacje -= 1;
                if (this.operacje < 0)
                {
                    Console.WriteLine("Nadanie niemożliwe, wykorzystano limit operacji!");
                }
                else this._wartosc = value;
            }
        }

        public void Ureguluj()
        {
            this.pobrania = 0;
            this.nadania = 0;
        }

        public void WypiszStan()
        {
            Console.WriteLine("Licznik pobrań wynosi: " + this.pobrania);
            Console.WriteLine("Licznik nadań wynosi: " + this.nadania);
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Liczba liczba = new Liczba(4);
            liczba.wartosc = 1;
            Console.WriteLine(liczba.wartosc);
            liczba.wartosc = 2;
            Console.WriteLine(liczba.wartosc);
            liczba.wartosc = 3;
            Console.WriteLine(liczba.wartosc);

            liczba.WypiszStan();
            liczba.Ureguluj();
            liczba.WypiszStan();
        }
    }
}
