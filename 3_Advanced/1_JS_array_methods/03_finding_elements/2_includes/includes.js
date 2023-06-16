let numbers = [1,2,3];

if (numbers.indexOf(2) !== -1) {
    // process here
}

// better way of doing that is using includes() method

function check(element, array) {
    let result = array.includes(element);
    return result;
}

console.log(check(10, numbers));  // false
console.log(check(1, numbers));   // true
console.log(check(+0, [-0, +0])); // true
console.log(check(NaN, [NaN]));   // true

let bmw = {name: 'BMW' }, 
    toyota = { name: 'Toyota'},
    ford = {name: 'Ford'};

let cars = [ford, toyota];

console.log(cars.includes(ford)); // true
console.log(cars.includes(bmw));  // false

