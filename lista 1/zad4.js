class Kwadrat
{
    constructor(a) { this.a = a; }
    get bok() { return this.a; }
    set bok(a) { this.a = a; }
    get obwod() { return 4 * this.a; }
    set obwod(len) { this.a = len / 4; }
    get pole() { return this.a * this.a; }
    set pole(P) { this.a = Math.sqrt(P); }
    
    toString()
    {
        return `a=${this.bok}\n
                L=${this.obwod}\n
                P=${this.pole}\n`;
    }
}

class Kolo
{
    constructor(r) {this.r = r;}
    
    get R(){return this.r;}
    set R(r){this.r = r;}
    
    get srednica(){return this.R * 2;}
    set srednica(srd)
    {
        this.R = srd / 2;
    }
    
    get obwod(){return 2 * Math.PI * this.R}
    set obwod(obw)
    {
        this.R = (obw / 2) / Math.PI;
    }
    
    get pole(){return this.R * this.R * Math.PI;}
    set pole(pol)
    {
        this.R = Math.sqrt(pol / Math.PI);
    }
    
    print()
    {
        console.log(`promień = ${this.R}\nśrednica = ${this.srednica}\nobwód = ${this.obwod}\npole = ${this.pole}\n`);
    }
}

let k = new Kwadrat(1);
k.bok = 12;console.log(k+"");
k.obwod = 12;console.log(k+"");
k.pole=12;console.log(k+"");

let kol = new Kolo(4);
kol.print();
kol.promien = 8;
kol.print();
kol.srednica = 10;
kol.print();
kol.pole = 4;
kol.print();
kol.obwod = 7;
kol.print();

let tab = [];
for(let i = 0; i < 10; i++)
{
    tab.push(new Kolo(i));
    tab.push(new Kwadrat(i));
}

let sum_pole = 0;
let sum_obwod = 0;
for(let obj of tab)
{
    sum_pole += obj.pole;
    sum_obwod += obj.obwod;
}

console.log(`Suma pól: ${sum_pole}`);
console.log(`Suma obwodów: ${sum_obwod}`);