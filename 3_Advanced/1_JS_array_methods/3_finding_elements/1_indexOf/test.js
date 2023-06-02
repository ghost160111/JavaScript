// Array.prototype.indexOf()
// [].indexOf()

// Syntax:
// Array.indexOf(searchElement, fromIndex)

// JS array indexOf() method examples

var scores = [10, 20, 30, 10, 40, 20];

console.log(scores.indexOf(10)); // 1
console.log(scores.indexOf(20)); // 2
console.log(scores.indexOf(30)); // 3
console.log(scores.indexOf(40)); // 4

// And the following example uses the fromIndex() with the negative values:

console.log(scores.indexOf(20, -1)); // 5 (fromIndex = 6+ (-1) = 5)
console.log(scores.indexOf(20, -5)); // 1 (fromIndex = 6+ (-5) = 1)
// Outputs:
// 5
// 1

var guests = [
    {name: "John Doe", age: 30},
    {name: "Lily Bush", age: 20},
    {name: "William Gate", age: 25},
];

console.log(guests.indexOf({
    name: "Lily Bush",
    age: 20
})); // -1

function find(needle, haystack) {
    var results = [];
    var idx = haystack.indexOf(needle);
    while (idx != -1) {
        results.push(idx);
        idx = haystack.indexOf(needle, idx + 1);
    }
    return results;
}

console.log(find(10, scores)); // [ 0, 3 ]

// js array lastIndexOf() method

//Array.prototype.lastIndexOf(searchElement[, fromIndex = Array.length - 1]);

console.log(scores.lastIndexOf(10)); // 3
console.log(scores.lastIndexOf(20)); // 5

// Because the number 50 is not in the scores array, the following statement returns -1
console.log(scores.lastIndexOf(50)); // -1



