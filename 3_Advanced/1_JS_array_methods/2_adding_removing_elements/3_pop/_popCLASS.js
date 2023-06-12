class Greetings {
    constructor(...messages) {
        this.messages = messages;
    }
    Output() {
        let messages = 'List of messages';
        let length  = 'Length of array';
        return {
            [messages]: [...this.messages],
            [length]: this.lengthOfArray(),
        };
    }
    addToEnd(...values) {
        this.messages.push.call(this.messages, ...values);
    }
    addToStart(...values) {
        this.messages.unshift.call(this.messages, ...values);
    }
    removeLast() {
        this.messages.pop.call(this.messages);
    }
    removeFirst() {
        this.messages.shift.call(this.messages);
    }
    lengthOfArray() {
        return this.messages.length;
    }
}

let greetings = new Greetings('Hi', 'Hello', 'Howdy', 'Bonjour');
console.log(greetings);

let greetingsArray = ['A yo', 'Yo homie', 'Hw doin dawg'];

let addElements = greetings.addToEnd(...greetingsArray);

for (const [key, value] of greetings.messages.entries()) {
    console.log(`${key}: ${value}`);
}

console.log(greetings.Output());