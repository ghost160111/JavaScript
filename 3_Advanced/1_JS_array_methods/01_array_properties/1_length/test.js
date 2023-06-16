let colors = ["red", "green", "blue"];
console.log(colors.length); // 3

colors.push("yellow");
console.log(colors); // ["red", "green", "blue", "yellow"]
console.log(colors.length); // 4

colors = [];
console.log(colors.length); // 0

let numbers = [10, , 20, 30];
console.log(numbers.length); // 4

numbers[10] = 100;
console.log(numbers.length); // 11

const fruits = ['Apple', 'Orange', 'Strawberry'];
//fruits.length = 0;

//console.log(fruits); // []

const anotherFruits = [...fruits];
anotherFruits.length = 2;

console.log(fruits.length); // 3
console.log(anotherFruits.length); // 2

const moreFruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 5;

console.log(fruits); // ['Apple', 'Orange', 'Strawberry', <2 empty items>]

