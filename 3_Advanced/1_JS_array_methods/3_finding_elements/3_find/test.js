// JS array find() method

// Syntax:
// find(callback(element[, index[, array]])[, thisArg])

// EXAMPLES:

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.find(e => e % 2 == 0));

let customers = [{
    name: "ABC inc",
    credit: 100
}, {
    name: "ACME corp",
    credit: 200
}, {
    name: "IoT AG",
    credit: 300
}];

console.log(customers.find(c => c.credit > 100));
// Output: { name: 'ACME corp', credit: 200 }




