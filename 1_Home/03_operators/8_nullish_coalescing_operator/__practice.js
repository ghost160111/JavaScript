let value1,
    value2 = "Hello";
// by default value1 and value2 are undefined.

let result = value1;

if (result === null || result === undefined) {
    result = value2;
}

console.log(value1); // undefined
console.log(value2); // Hello
console.log(result); // Hello

const age = undefined && 28;
console.log(age); // undefined

let test = 1 ?? console.log("HI");
console.log(test); // 1