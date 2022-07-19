using System;
using System.Collections.Generic;

namespace Zadanie1
{
    internal class Lista
    {
        public List<int> lista = new List<int>();
        public static Random random = new Random();

        public Lista()
        {
            for (int i = 0; i < random.Next(1, 5); ++i)
            {
                lista.Add(random.Next(1, 101));
            }
        }

        public Lista(int n)
        {
            for (int i = 0; i < n; ++i)
            {
                lista.Add(random.Next(1, 101));
            }
        }

        public override string ToString()
        {
            String result = "";
            for(int i = 0; i < lista.Count; ++i)
                result = result + lista[i].ToString() + " ";

            return result;
        }
    }

    internal class Lista1: Lista, IComparable<Lista1>
    {
        public Lista1() : base(){}
        public Lista1(int n) : base(n){}

        public int CompareTo(Lista1 other)
        {
            if(lista.Count > other.lista.Count)
            {
                for(int i = 0; i < other.lista.Count; ++i)
                {
                    if(lista[i] > other.lista[i]) return 1;
                    else if(lista[i] < other.lista[i]) return -1;
                }

                return 0;
            }
            else if(lista.Count < other.lista.Count)
            {
                for(int i = 0; i < lista.Count; ++i)
                {
                    if(lista[i] > other.lista[i]) return 1;
                    else if(lista[i] < other.lista[i]) return -1;
                }

                return 0;
            }
            else
            {
                for(int i = 0; i < other.lista.Count; ++i)
                {
                    if(lista[i] > other.lista[i]) return 1;
                    else if(lista[i] < other.lista[i]) return -1;
                }

                return 0;
            }
        }
    }

    internal class Lista2 : Lista, IComparable<Lista2>
    {
        public Lista2() : base(){}
        public Lista2(int n) : base(n){}

        public int CompareTo(Lista2 other)
        {
            if(lista.Count > other.lista.Count) return 1;
            else if(lista.Count < other.lista.Count) return -1;
            else
            {
                for(int i = 0; i < other.lista.Count; ++i)
                {
                    if(lista[i] > other.lista[i]) return 1;
                    else if(lista[i] < other.lista[i]) return -1;
                }
                return 0;
            }
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            List<Lista1> lista = new List<Lista1>
            {
                new Lista1(),
                new Lista1(),
                new Lista1(),
                new Lista1()
            };

            for(int i = 0; i < lista.Count; ++i)
                Console.Write(lista[i].ToString() + " ; ");

            lista.Sort();
            Console.WriteLine();

            for(int i = 0; i < lista.Count; ++i)
                Console.Write(lista[i].ToString() + " ; ");

            Console.WriteLine();

            List<Lista2> lista2 = new List<Lista2>
            {
                new Lista2(),
                new Lista2(),
                new Lista2(),
                new Lista2()
            };

            for(int i = 0; i < lista2.Count; ++i)
                Console.Write(lista2[i].ToString() + " ; ");

            lista2.Sort();
            Console.WriteLine();

            for (int i = 0; i < lista2.Count; ++i)
                Console.Write(lista2[i].ToString() + " ; ");
        }
    }
}
