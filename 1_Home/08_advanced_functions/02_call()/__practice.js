const add = (x, y) => {
    return (x + y);
}

let n1 = 10;
let n2 = 20;

let callingNormally = add(n1, n2);
console.log(callingNormally); // 30

let callingUsingCallMethod = add.call(this, n1, n2);
console.log(callingUsingCallMethod); // 30


function Box(height, width) {
    this.height = height;
    this.width = width;
}

function Widget(height, width, color) {
    Box.call(this, height, width);
    this.color = color;
}

let widget = new Widget(100, 200, "red");

console.log(widget);
// Widget { height: 100, width: 200, color: 'red' }

const car = {
    name: "car",
    start() {
        console.log("Start the " + this.name);
    },
    speedUp() {
        console.log("Speed up the " + this.name);
    },
    stop() {
        console.log("Stop the " + this.name);
    },
};

const aircraft = {
    name: "aircraft",
    fly() {
        console.log("Fly");
    },
};

car.start.call(aircraft); // Start the aircraft
car.speedUp.call(aircraft); // Speed up the aircraft
aircraft.fly(); // Fly


function isOdd(number) {
    return number % 2;
}

function getOddNumbers() {
    return Array.prototype.filter.call(arguments, isOdd);
}

let result = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(result); // [ 1, 3, 9 ]
