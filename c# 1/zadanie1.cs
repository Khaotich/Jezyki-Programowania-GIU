using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zadanie1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Podaj liczbę: ");
            int n = int.Parse(Console.ReadLine());

            for (int i = 1;  i <= n; i++)
            {
                Console.Write(String.Format("{0, 4}", i));
            }
            Console.Write("\n");

            for (int i = 1; i <= n; i++)
            {
                for (int j = 1; j <= n; j++)
                {
                    Console.Write(String.Format("{0, 4}", i*j));
                }
                Console.Write("\n");
            }
        }
    }
}
