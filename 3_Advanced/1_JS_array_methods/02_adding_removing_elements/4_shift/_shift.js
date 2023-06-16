// JS shift() method
// shift() method just removes the first element of the array and then updates the indexes of the array

// Using the JS array shift() method example:
{
    const numbers = [10, 20, 30];
    let number = numbers.shift();

    console.log({ number });                   // { number: 10 }
    console.log({ numbers });                  // { numbers: [20, 30] }
    console.log({ length: numbers.length });   // { length: 2 }
}

// Using the JS array shift() method example 2:
{
    const numbers = [10, 20, 30];
    let number;
    while ((number = numbers.shift()) != undefined) {
        console.log(number);
    }
    // 10
    // 20
    // 30

    console.log(numbers); // []
}

// Using JS array shift() method with array-like objects
{
    let greetings = {
        0: 'Hi',
        1: 'Hello',
        2: 'Bonjour',
        length: 3,
        removeFirst() {
            return [].shift.call(this);
        },
    };

    const greeting = greetings.removeFirst();
    console.log(greeting); // 'Hi'
    console.log(greetings); /*
        {
            '0': 'Hello',
            '1': 'Bonjour',
            length: 2,
            removeFirst: [Function: removeFirst]
        }
    */
}


