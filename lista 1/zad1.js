tab  = [1, 2, 3, 4, 5, 6, 7, 8];

function bigger(a){ return x => x > a; }

console.log(tab.filter(bigger(3)))
console.log(tab.find(bigger(3)))
console.log(tab.findIndex(bigger(3)))
console.log(tab.every(bigger(3)))
console.log(tab.some(bigger(3)))

function smaller(a){ return x => x < a; }

console.log(tab.filter(smaller(5)))
console.log(tab.find(smaller(5)))
console.log(tab.findIndex(smaller(5)))
console.log(tab.every(smaller(5)))
console.log(tab.some(smaller(5)))

function between(a, b){ return x => (a < x && x < b); }

console.log(tab.filter(between(2, 6)))
console.log(tab.find(between(2, 6)))
console.log(tab.findIndex(between(2, 6)))
console.log(tab.every(between(2, 6)))
console.log(tab.some(between(2, 6)))