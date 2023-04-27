let scores = new Array(10);

console.log(scores); // [ <10 empty items> ]

scores[0] = 1;
scores[1] = 2;

console.log(scores); // [ 1, 2, <8 empty items> ]

let another = new Array(10,8,2,4);

console.log(another); // [ 10, 8, 2, 4 ]