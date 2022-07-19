using System;
using System.Collections.Generic;

namespace Zadanie1
{
    internal class Tworca
    {
        public delegate void create(Obserwator obs);
        public delegate void introduce();
        public event create create_;
        public event introduce introduce_;
        public Tworca() { }
        public void Create()
        {
            Obserwator obserwator = new Obserwator();
            obserwator.Sub(this);
            create_(obserwator);
            introduce_();
        }
    }

    internal class Obserwator
    {
        private static readonly Random random = new Random();
        private static int len = 0;
        private double x;
        private double y;
        private string name;
        private List<Obserwator> watchers = new List<Obserwator>();

        public Obserwator()
        {
            this.x = random.NextDouble();
            this.y = random.NextDouble();
            this.name = "Obs" + len;
            len++;
        }

        public void Sub(Tworca tworca)
        {
            tworca.introduce_ += new Tworca.introduce(wypisz);
            tworca.create_ += new Tworca.create(update);
        }

        public void wypisz()
        {
            Console.WriteLine("\nObserwator {0} ", name);
            watchers.ForEach(a => { Console.WriteLine("{0}\t x: {1}\t y: {2}\t r: {3}", a.name, a.x, a.y, distance(a)); });
        }

        public double distance(Obserwator o)
        {
            double x_ = Math.Abs(x - o.x);
            double y_ = Math.Abs(y - o.y);
            
            return Math.Sqrt(x_ * x_ + y_ * y_);
        }

        public void update(Obserwator ob)
        {
            if(watchers.Count < 2 && ob.name != name) watchers.Add(ob);
            else if(ob.name != name)
            {
                double odl1 = distance(watchers[0]);
                double odl2 = distance(watchers[1]);
                double odl_ = distance(ob);

                if(odl_ < odl1)
                {
                    watchers[1] = watchers[0];
                    watchers[0] = ob;
                }
                else if(odl_ < odl2) watchers[1] = ob;
            }

            watchers.Sort((a, b) =>
            {
                if(distance(a) < distance(b)) return -1;
                else if(distance(a) > distance(b)) return 1;
                else return 0;
            });
        }
    }
    
    internal class Program
    {
        static void Main(string[] args)
        {
            Tworca tworca = new Tworca();

            Console.WriteLine("\n################################## Krok 0 ##################################\n");
            tworca.Create();
            Console.WriteLine("\n################################## Krok 1 ##################################\n");
            tworca.Create();
            Console.WriteLine("\n################################## Krok 2 ##################################\n");
            tworca.Create();
            Console.WriteLine("\n################################## Krok 3 ##################################\n");
            tworca.Create();
            Console.WriteLine("\n################################## Krok 4 ##################################\n");
            tworca.Create();
            Console.WriteLine("\n################################## Krok 5 ##################################\n");
            tworca.Create();
            Console.WriteLine("\n################################## Krok 6 ##################################\n");
            tworca.Create();
            Console.WriteLine("\n################################## Krok 7 ##################################\n");
            tworca.Create();
        }
    }
}