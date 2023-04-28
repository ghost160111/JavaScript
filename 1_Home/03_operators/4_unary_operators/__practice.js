let s = '10';
let y = +s;

console.log(+s);       // 10
console.log(typeof s); // string
console.log(typeof y); // number

let f = false,
    t = true;

let nf = +f;
let nt = +t;

console.log(nf); // 0
console.log(nt); // 1

console.log(typeof nf); // number
console.log(typeof nt); // number

let weight = 90;
let newWeight = weight++ + 5;

console.log(newWeight); // 95
console.log(weight); // 91

let weight2 = 90;
let newWeight2 = ++weight2 + 5;

console.log(newWeight2); // 96
console.log(weight2); // 91