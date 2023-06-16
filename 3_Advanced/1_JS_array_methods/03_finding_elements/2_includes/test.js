//#region 

// JS array include() method

let numbers = [1, 2, 3];
if (numbers.indexOf(2) !== -1) {
    // process here
}

[NaN].indexOf(NaN); // -1

// array.includes(element,fromIndex)

[1,2,3].includes(2); // true
[1,2,3].includes(4); // false
[1,2,3].includes(1,1); // false
[1,2,3].includes(1); // true

[NaN].includes(NaN); // true

[-0].includes(+0); // true

let bmw = {name: "BMW"},
    toyota = {name: "Toyota"},
    ford = {name: "Ford"};

let cars = [ford, toyota];

console.log(cars.includes(bmw)); // false
console.log(cars.includes(ford)); // true
console.log(cars.includes(toyota)); // true

console.log(cars); // [ {name: "Ford"}, {name: "Toyota"} ]



//#endregion