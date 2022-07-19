let fibo = {
    a: 1,
    b: 200,
    x: 0,
    y: 1,

    *[Symbol.iterator]() {
        for (let i = this.a; i <= this.b; i++) {
            yield BigInt(this.x + this.y);
            [this.x, this.y] = [this.y, this.x + this.y];
        }
    }
}

function slowly(iter) {
    let next = iter.next();
    if (!next.done) {
        console.log(next.value);
        setTimeout(slowly, 500, iter);
    }
}

slowly(fibo[Symbol.iterator]());