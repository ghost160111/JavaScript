// Syntax of push method
// push(newElement);
// push(newElement1,newElement2);
// push(newElement1,newElement2,...,newElementN);

// EXAMPLE 1: Using the array push() to append one element to an array
{
    let numbers = [10, 20, 30];

    const length = numbers.push(40);
    
    console.log(length); // 4
    console.log(numbers); // [10, 20, 30, 40]
}

// EXAMPLE 2: Using the array push() to add multiple elements to the end of an array
{
    let numbers = [10, 20, 30];
    
    const length = numbers.push(40, 50);

    console.log(length); // 5
    console.log(numbers); // [10, 20, 30, 40, 50]
}

// EXAMPLE 3: Using the push() to append elements of an array to another array
{
    let colors = ["red", "green", "blue"];
    let cmyk = ["cyan", "magenta", "yellow", "back"];

    for (const color of cmyk) {
        console.log(color);
        colors.push(color);
    }

    console.log(colors); // ["red", "green", "blue", "cyan", "magenta", "yellow", "back"]
}

// EXAMPLE 3.1: Starting from ES6, you can use spread operator
{
    let colors = ["red", "green", "blue"];
    let cmyk = ["cyan", "magenta", "yellow", "back"];

    colors.push(...cmyk);

    console.log(colors); // ["red", "green", "blue", "cyan", "magenta", "yellow", "back"]
}

// Using JS array push() method with array-like objects

// EXAMPLE:
{
    let greetings = {
        0: 'Hi',
        1: 'Hello',
        length: 2,
        append(message) {
            [].push.call(this, message);
        },
    };
    greetings.append("Howdy");
    greetings.append("Bonjour");
    greetings.append("Hi");

    console.log(greetings); /*
        {
            '0': 'Hi',
            '1': 'Hello',
            '2': 'Howdy',
            '3': 'Bonjour',
            '4': 'Hi',
            length: 5,
            append: [Function: append]
        }
    */
}

// ANOTHER EXAMPLE
{
    // to allow the append() method that accepts a number of messages, you can modify the method like this:
    let greetings = {
        0: 'Hi',
        1: 'Hello',
        length: 2,
        append() {
            [].push.call(this, ...arguments);
        },
    };

    greetings.append("Howdy", "Bonjour", "Hi");

    console.log(greetings); /*
        {
            '0': 'Hi',
            '1': 'Hello',
            '2': 'Howdy',
            '3': 'Bonjour',
            '4': 'Hi',
            length: 5,
            append: [Function: append]
        }
    */
}