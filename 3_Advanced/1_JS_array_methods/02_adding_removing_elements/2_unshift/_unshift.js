let numbers = [30, 40];

const length = numbers.unshift(20);

console.log(numbers); // [ 20, 30, 40 ]

console.log({ numbers }); // { numbers: [ 20, 30, 40 ] }
console.log({ length });  // { length: 3 }

/////////////////////
// ANOTHER EXAMPLE //
/////////////////////

let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

//for (const day of weekends) {
//    days.unshift(day);
//}

console.log(days); // ['Sun', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

// You can do this using ES6 syntax as well:

days.unshift(...weekends);

console.log(days); // ['Sun', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']


////////////////////////
// ARRAY LIKE OBJECTS //
////////////////////////

let greetings = {
    0: 'Hi',
    1: 'Hello',
    length: 2,
    prepend(...messages) {
        try {
            switch (typeof messages) {
                case 'string': {
                    [].unshift.call(this, ...messages);
                    return this.length;
                    break;
                }
                case 'bigint':
                case 'boolean':
                case 'function':
                case 'symbol':
                case 'number':
                case 'object':
                case 'undefined': {
                    throw new Error('Can\'t be any type other than a string');
                    break;
                }
            }
        } catch (error) {
            console.log(`${error.name}: ${error.message}`);
        }
    },
    prepend2() {
        try {
            [].unshift.call(this, ...arguments);
            return this.length;
        } catch (error) {
            console.log(`${error.name}: ${error.message}`);
        }
    },
};

greetings.prepend(1, 'A yo dawg');
greetings.prepend2('Good day', 'Bonjour');

console.log(greetings);
// BOTH OF THE METHODS WORKS PROPERLY

