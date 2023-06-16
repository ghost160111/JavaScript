{
    const numbers = [10, 20, 30];
    const last = numbers.pop();
    
    console.log(last); // 30
    console.log(numbers.length); // 2
    console.log(numbers); // [ 10, 20 ]
}

{
    const numbers = [];
    const last = numbers.pop();

    console.log(last); // undefined
    console.log(numbers.length); // 0
}

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

// END OF THIS SECTION

// YOU CAN ALSO CREATE YOUR CLASS AND USE IT MULTIPLE TIMES

{
    class Greetings {
        constructor(...messages) {
            this.messages = messages;
        }
        append(...message) {
            this.messages.push.call(this, ...message);
            return this.messages.length;
        }
        prepend(...message) {
            this.messages.unshift.call(this, ...message);
            return this.messages.length;
        }
        removeLast() {
            this.messages.pop.call(this);
            return this.messages.length;
        }
        removeFirst() {
            this.messages.shift.call(this);
            return this.messages.length;
        }
    }

    let greetings = new Greetings('Hi', 'Hello');

    greetings.append('Bonjour', 'Howdy');

    for (const [key, message] of greetings.messages.entries()) {
        console.log(`${key}: ${message}`);
    }

    for (let i = 0; i < greetings.messages.length; i++) {
        console.log(`${i}: ${greetings.messages[i]}`);
    }

    console.log(greetings);
}
