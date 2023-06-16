let numbers = [10, 20, 30];
let anotherArray = [60, 70, 80];

const length = numbers.push(40, 50, ...anotherArray);

console.log("Length of the array: " + length); // Length of the array: 8
console.log(numbers); // [ 10, 20, 30, 40, 50, 60, 70, 80 ]

//////////////////////
// ANOTHER EXAMPLE: //
//////////////////////

let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'black'];

for (const color of cmyk) {
    colors.push(color);
}

for (let i = 0; i < colors.length; i++) {
    console.log(`${i+1}: ${colors[i]}`);
}

// Using array like objects:

let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Bonjour',
    length: 3,
    append() {
        try {
            Array.prototype.push.call(this, ...arguments);
            // or like this:
            // [].push.call(this, ...message);
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        }
    },
    append2(...message) {
        try {
            Array.prototype.push.call(this, ...message);
            // or like this:
            // [].push.call(this, ...message);
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        }
    },
};

greetings.append('Howdy', 'Yo');
greetings.append('Yo dawg');

console.log(greetings);

greetings.append2('TEST MESSAGE 1');
greetings.append2('TEST MESSAGE 2');

console.log(greetings);

// BOTH OF THE METHODS WORKS ACCURATELY

