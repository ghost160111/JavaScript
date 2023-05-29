// DELETING ELEMENTS USING JS ARRAY'S splice() METHOD

//Array.splice(position, num);
// position -> the position of the first item to delete
// num -> the number of items to delete

let scores = [1, 2, 3, 4, 5];

let deletedScores = scores.splice(0, 3);

console.log(deletedScores); // [ 1, 2, 3 ]
console.log(scores); // [ 4, 5 ]

// Inserting elements using JS array splice() method

// Array.splice(position,0,new_element_1,new_element_2,...);

let colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple");

console.log(colors); // [ 'red', 'green', 'purple', 'blue' ]

const ANOTHER_TEST = [1, 2, 3, 4, 5, 6];
ANOTHER_TEST.splice(2, 0, 5);

console.log(ANOTHER_TEST); // [1, 2, 5, 3, 4, 5, 6]
