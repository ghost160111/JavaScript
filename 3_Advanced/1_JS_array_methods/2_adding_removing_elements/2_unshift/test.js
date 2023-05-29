let numbers = [30, 40];

let length = numbers.unshift(20);

console.log({ length }); // { length: 3 }
console.log({ numbers }); // { numbers: [ 20, 30, 40 ] }

length = numbers.unshift(0, 10);

console.log({ length }); // { length: 5 }
console.log({ numbers }); // { numbers: [ 0, 10, 20, 30, 40 ] }

{
    let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    let weekends = ['Sat', 'Sun'];
    
    for (const weekend of weekends) {
        days.unshift(weekend);
    }
    
    console.log(days); // [ 'Sun', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ]
}

{
    let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    let weekends = ['Sat', 'Sun'];

    days.push(...weekends);
    
    console.log(days); // [ 'Sun', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ]
}

// Using the JS array unshift() method with array-like objects
{
    let greetings = {
        0: 'Hi',
        1: 'Hello',
        2: 'Howdy',
        length: 3,
        prepend(message) {
            [].unshift.call(this, message);
            return this.length;
        },
    };

    greetings.prepend("Good day");

    console.log(greetings); /*
        {
            '0': 'Good day',
            '1': 'Hi',
            '2': 'Hello',
            '3': 'Howdy',
            length: 4,
            prepend: [Function: prepend]
        }
    */
}

// ANOTHER EXAMPLE
{
    let greetings = {
        0: 'Hi',
        1: 'Hello',
        2: 'Howdy',
        length: 3,
        prepend(...messages) {
            [].unshift.call(this, ...messages);
            return this.length;
        },
    };
      
    greetings.prepend('Good day', 'Bye');

    console.log(greetings); /*
        {
            '0': 'Good day',
            '1': 'Bye',
            '2': 'Hi',
            '3': 'Hello',
            '4': 'Howdy',
            length: 5,
            prepend: [Function: prepend]
        }
    */
}