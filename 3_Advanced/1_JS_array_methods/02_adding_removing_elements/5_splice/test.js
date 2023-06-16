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

let scoress = [102,3,2,43,2];

let addScores = scoress.splice(0, -3, 5, 3);

console.log(scoress); // [5, 3, 102, 3, 2, 43, 2]

let another_colors = ["red", "green", "blue"];
another_colors.splice(3, 0, "purple");
console.log(another_colors); // [ 'red', 'green', 'blue', 'purple' ]
another_colors.splice(1, 0, "yellow", "pink");
console.log(another_colors); // ['red', 'yellow', 'pink', 'green', 'blue', 'purple']

let languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(2, 1, 'Python');

console.log(languages); // we deleted 'Java' and inserted 'Python' to that place

// we want to add more languages: TypeScript, C#
let moreLanguages = ['TypeScript', 'C#'];

languages.splice(4, 0, ...moreLanguages);

console.log(languages);
