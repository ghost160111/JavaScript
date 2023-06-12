class Greeting {
    constructor(...message) {
        this.message = message;
    }
    Output() {
        let greetings = 'messages';
        let length = 'length';
        return {
            [greetings]: [...this.message],
            [length]: this.message.length,
        };
    }
    addToEnd(...values) {
        this.message.push.call(this.message, ...values);
    }
    addToStart(...values) {
        this.message.unshift.call(this.message, ...values);
    }
    removeEnd(...values) {
        this.message.pop.call(this.message, ...values);
    }
    removeFirst(...values) {
        this.message.shift.call(this.message, ...values);
    }
}

let greeting = new Greeting('Hello', 'Hi');

let result = greeting.Output();
console.log(result); // { messages: [ 'Hello', 'Hi' ], length: 2 }

greeting.addToStart('Yo');
greeting.addToEnd('Bonjour');

result = greeting.Output();
console.log(result); // { messages: [ 'Yo', 'Hello', 'Hi', 'Bonjour' ], length: 4 }

greeting.removeEnd();
greeting.removeFirst();

result = greeting.Output();
console.log(result); // { messages: [ 'Hello', 'Hi' ], length: 2 }
