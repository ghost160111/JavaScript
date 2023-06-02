// JS array map() method

let circles = [10, 30, 50];

let areas = []; // to store areas of circles
let area = 0;

for (let i = 0; i < circles.length; i++) {
    area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}

console.log(areas); // [ 314, 2827, 7853 ]

function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}
let areas2 = circles.map(circleArea);
console.log(areas); // [ 314, 2827, 7853 ]

let areas3 = circles.map((radius) => Math.floor(Math.PI * radius * radius));

let numbers = [16, 25, 36];
let results = numbers.map(Math.sqrt);
console.log(results); // [ 4, 5, 6 ]
