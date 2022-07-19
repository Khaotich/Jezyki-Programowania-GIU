class arytmetyczne
{
    constructor(dane)
    {
        this.a1 = null;
        this.r = null;

        let keys = [];
        for(let i in dane) keys.push(i);
    
        let a1 = false;
        let r = false;
        let suma = false;
        let suma_count = 0;
        let a_ = false;
        let a_count = 0;
    
        for(let i of keys)
        {
            if(i === 'r') r = true;
            if(i === 'a0' || i === 'a1') a1 = true;
            if(i[0] === 'a' && i !== 'a0' && i !== 'a1')
            {
                a_count++;
                a_ = true;
            }
            if(i[0] === 's')
            {
                suma_count++;
                suma = true;
            }
        }
    
        if(a1 && r)
        {
            this.a1 = Number(dane['a1']);
            this.r = Number(dane['r']);
        }
        else if(a_ && r)
        {
            this.r = Number(dane['r']);   
            for(let i of keys)
            {
                if(i[0] === 'a' && i !== 'a0' && i !== 'a1')
                {
                    let a_index = Number(i.substring(1)) -1;
                    let a_value = Number(dane[i]);
                    this.a1 = a_value - a_index * this.r;
                    break;
                }
            } 
        }
        else if(a_ && a_count > 1)
        {
            let a_first_value = 0;
            let a_first_index = 0;
            let a_second_value = 0;
            let a_second_index = 0;
    
            let ac = 0;
            for(let i of keys)
            {
                if(i[0] === 'a' && i !== 'a0' && i !== 'a1')
                {
                    ac++;
                    if(ac === 1)
                    {
                        a_first_index = Number(i.substring(1)) -1;
                        a_first_value = Number(dane[i]);
                    }
                    else if(ac === 2)
                    {
                        a_second_index = Number(i.substring(1)) -1;
                        a_second_value = Number(dane[i]);
                    }
                    if(ac === 2) break;
                }
            }
            
            if(a_second_index > a_first_index)
            {
                this.r = (a_second_value - a_first_value) / (a_second_index - a_first_index);
                this.a1 = a_second_value - a_second_index * this.r;
            }
            else
            {
                this.r = (a_first_value - a_second_value) / (a_first_index - a_second_index);
                this.a1 = a_second_value - a_second_index * this.r;
            }         
        }
        else if(suma && r)
        {
            this.r = Number(dane['r']);
            
            let sum = 0;
            let sum_index = 0;
            for(let i of keys)
            {
                if(i[0] === 's')
                {
                    sum_index = Number(i.substring(4));
                    sum = Number(dane[i]);
                    break;
                }
            }
            let r_ = 0;
            for(let i = 1; i < sum_index; i++) r_ += this.r * i;
    
            this.a1 = (sum - r_) / sum_index;
        }
        else if(suma && suma_count > 1)
        {
            let sum_first_value = 0;
            let sum_first_index = 0;
            let sum_second_value = 0;
            let sum_second_index = 0;
    
            let ac = 0;
            for(let i of keys)
            {
                if(i[0] === 's')
                {
                    ac++;
                    if(ac === 1)
                    {
                        sum_first_index = Number(i.substring(4));
                        sum_first_value = Number(dane[i]);
                    }
                    else if(ac === 2)
                    {
                        sum_second_index = Number(i.substring(4));
                        sum_second_value = Number(dane[i]);
                    }
                    if(ac === 2) break;
                }
            }
    
            if(sum_second_index > sum_first_index)
            {
                let r1 = 0;
                let r2 = 0;
                for(let x = 1; x < sum_first_index; x++) r1 += x;
                for(let x = 1; x < sum_second_index; x++) r2 += x;
                
                this.r = (sum_second_value - (sum_second_index * sum_first_value) / sum_first_index) / ((-sum_second_index * r1) / sum_first_index + r2);
                this.a1 = (sum_second_value - r2 * this.r) / sum_second_index;
            }
            else
            {
                let r1 = 0;
                let r2 = 0;
                for(let x = 1; x < sum_first_index; x++) r1 += x;
                for(let x = 1; x < sum_second_index; x++) r2 += x;
                
                this.r = (sum_first_value - (sum_first_index * sum_second_value) / sum_second_index) / ((-sum_first_index * r2) / sum_second_index + r1);
                this.a1 = (sum_second_value - r2 * this.r) / sum_second_index;
            } 
        }
        else if(a_ && suma)
        {
            let sum_value = 0;
            let sum_index = 0;
            let a_value = 0;
            let a_index = 0;
    
            let at = false;
            let st = false;
            for(let i of keys)
            {
                if(at && st) break;
                
                if(i[0] === 's')
                {
                    sum_index = Number(i.substring(4));
                    sum_value = Number(dane[i]);
                    st = true;
                }
                if(i[0] === 'a' && i !== 'a0' && i !== 'a1')
                {
                    a_index = Number(i.substring(1));
                    a_value = Number(dane[i]);
                    at = true;
                }
            }
    
            let t = 0;
            let r = a_index - 1;
            for(let x = 1; x < sum_index; x++) t += x;
    
            this.r = (sum_value - sum_index * (a_value / a_index)) / ((-r / a_index) + t);
            this.a1 = a_value - (r * this.r);
        }
    }

    a(i)
    {
        if(this.a1 === null || this.r === null) return null;
        else if(i === 0) return this.a1;
        else
        {
            return (this.a1 + (i-1) * this.r);
        }
    }

    set_a(i, x)
    {
        this.a1 = x - i * this.r;
    }

    suma(i)
    {
        if(this.a1 === null || this.r === null) return null;
        else if(i === 0) return this.a1;
        else
        {
            let r = 0;
            for(let j = 1; j < i; j++) r += j;
            return (this.a1 * i + r * this.r);
        }
    }

    set_suma(i, x)
    {
        let r = 0;
        for(let j = 1; j < i; j++) r += this.r * j;
        this.a1 = (x - r) / i;
    }

    r()
    {
        if(this.a1 === null || this.r === null) return null;
        else return this.r;
    }

    set_r(x)
    {
        this.r = x;
    }

    *[Symbol.iterator]()
    {
        for (let i = 0; i < 10; i++) yield this.a(i);       
    } 
}

//let x = new arytmetyczne({a7:20, r:2});
//let x = new arytmetyczne({a20:20, a10:2});
//let x = new arytmetyczne({suma10:45, r:5});
let x = new arytmetyczne({suma6: 42, suma3 : 12});
//let x = new arytmetyczne({suma20: 50, a5 : 10});
console.log(x.r);
console.log(x.a1);
console.log(x.a(4));
console.log(x.suma(4));

for(let i of x) console.log(i);

console.log(x);
x.set_a(20, 50);
console.log(x);
x.set_r(12);
console.log(x);
x.set_suma(50, 150);
console.log(x);