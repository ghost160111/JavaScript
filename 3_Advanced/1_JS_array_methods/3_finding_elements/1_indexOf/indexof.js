// indexOf() array method

// Syntax:
// Array.indexOf(searchElement, fromIndex)

// JS array indexOf() method examples:

const scores = [10, 20, 30, 10, 40, 20, 20, 10];

console.log(scores.indexOf(10)); // 1
console.log(scores.indexOf(20)); // 2
console.log(scores.indexOf(30)); // 3
console.log(scores.indexOf(40)); // 4

// And the following example uses the fromIndex() with negative values:

console.log(scores.indexOf(20, 0));  // 0
console.log(scores.indexOf(20, -1)); // 6 ->(fromIndex = 7 + (-1) = 6)
console.log(scores.indexOf(20, -2)); // 5 ->(fromIndex = 7 + (-2) = 5)
// Outputs:
// 5
// 6

var guests = [
    {name: "John Doe", age: 30},
    {name: "Lily Bush", age: 20},
    {name: "William Gate", age: 25},
];

console.log(guests.indexOf({
    name: "John Doe",
    age: 30,
}));
// Outputs: -1

// In order to do that, you need to create an function with nice algorithm:

function findLocations(element, array) {
    let result = []; // stores all locations
    let index = array.indexOf(element);
    for (let i = 0; i < array.length; i++) {
        if (index != -1) {
            result.push(index);
            index = array.indexOf(element, index + 1);
        }
    }
    return result;
}

console.log(findLocations(10, scores)); // [0, 3, 7]
console.log(findLocations(20, scores)); // [1, 5, 6]
// So, this array contains the locations of the elements that has the same value
// E.g, first log illustrates finding all 10s index locations
// Second log illustrates the same operation with 20s
// And that's it...

// js array lastIndexOf() method

console.log(scores.lastIndexOf(10)); // 3
console.log(scores.lastIndexOf(20)); // 6

// Because the number 50 is not in the scores array, the following statement returns -1
console.log(scores.lastIndexOf(50)); // -1


