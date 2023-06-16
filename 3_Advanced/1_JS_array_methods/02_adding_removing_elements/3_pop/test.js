// JS Array pop method
{
    const numbers = [10, 20, 30];
    const last = numbers.pop();
    
    console.log(last); // 30
    console.log(numbers); // [ 10, 20 ]
}

// Using JS array pop() method with an empty array
{
    const numbers = [];
    const last = numbers.pop();
    
    console.log(last);
    console.log(numbers.length);
}

// Using JS pop() method with array-like objects
{
    let greetings = {
        0: 'Hi',
        1: 'Hello',
        2: 'Howdy',
        length: 3,
        removeLast() {
            return [].pop.call(this);
        },
    };

    let greeting = greetings.removeLast();

    console.log(greeting); // Howdy
    console.log(greetings); // { '0': 'Hi', '1': 'Hello', length: 2, removeLast: [Function: removeLast] }
}

// ALL IN ALL, POP() METHOD JUST DELETES THE LAST ELEMENT OF THE ARRAY AND ARRAY-LIKE OBJECTS
