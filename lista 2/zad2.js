function Fibo()
{
    this.x = 0;
    this.y = 1;
}

Fibo.prototype.next = function()
{
    this.tmp = this.x;
    [this.x, this.y] = [this.y, this.x + this.y];
    return {value: this.tmp};
}

let fibo = new Fibo();
for(var i = 1; i <= 200; i++) console.log(i, "  ", fibo.next().value);