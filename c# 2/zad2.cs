using System;
using System.Collections.Generic;

namespace Zadanie2
{
    internal class Oceny
    {
        private int[][] oceny;
        private static int ile = 0;
        private int lim = 0;
        public Oceny(int n)
        {
            this.oceny = new int[n][];
            this.lim = n;
        }

        public void dodajOceny(int[] marks)
        {
            if(ile < lim)
            {
                this.oceny[ile] = marks;
                ile++;
            }
            else
            {
                Console.WriteLine("Limit uczniów osiągnięty!");
            }
        }

        public void pokazOceny()
        {
            for (int i = 0; i < this.oceny.Length; i++)
            {
                for (int j = 0; j < this.oceny[i].Length; j++)
                {
                    Console.Write(this.oceny[i][j] + " ");
                }
                Console.WriteLine();
            }
        }

        public void srednia()
        {
            for (int i = 0; i < this.oceny.Length; i++)
            {
                float s = (float)this.oceny[i].Length;
                float sum = 0;
                for (int j = 0; j < s; j++) sum += this.oceny[i][j];
                Console.WriteLine(sum / s);
            }
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Oceny oceny = new Oceny(5);
            for (int i = 0; i < 5; ++i)
            {
                int[] tmp = new int[i + 1];
                for (int j = 0; j <= i; ++j)
                {
                    tmp[j] = j + 1;
                }
                oceny.dodajOceny(tmp);
            }

            oceny.pokazOceny();
            oceny.srednia();
        }
    }
}
