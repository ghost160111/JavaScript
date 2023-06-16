// JS Array shift()

const numbers = [10, 20, 30];
let number = numbers.shift();

console.log({ number }); // 10
console.log({ numbers }); // [ 20, 30 ]
console.log({ length: numbers.length }); // { length: 2 }

{
    const numbers = [10, 20, 30];
    let number;
    while ((number = numbers.shift()) != undefined) {
        console.log(number);
        // 10
        // 20
        // 30
    }
}

{
    let greetings = {
        0: 'Hi',
        1: 'Hello',
        2: 'Howdy',
        length: 3,
        removeFirst() {
            return [].shift.call(this);
        },
    };

    const greeting = greetings.removeFirst();

    console.log(greeting); // Hi
    console.log(greetings); // { '0': 'Hello', '1': 'Howdy', length: 2, removeFirst: [Function: removeFirst] }
}

