class Splice {
    #messages;
    constructor(...messages) {
        [...this.#messages] = messages;
    }
    output() {
        const messagesObj = "Messages Object";
        const messagesArr = "Messages Array";
        const length = "Length";
        return {
            [messagesObj]: [...this.#messages],
            [messagesArr]: {...this.#messages},
            [length]: this.#messages.length,
        };
    }
    splice(start, end, ...messages) {
        this.#messages.splice.call(this.#messages, start, end, ...messages);
    }
}

const spliceMethodCheck = new Splice("Message 1", "Message 2", "Message 3");

let result = spliceMethodCheck.output();
console.log(result); // { Messages: [ 'Message 1', 'Message 2', 'Message 3' ], Length: 3 }

let addMore = spliceMethodCheck.splice(3, 0, "Message 4", "Message 5", "Message 6");

result = spliceMethodCheck.output();
console.log(result); /* Outputs:
{
  Messages: [ 'Message 1', 'Message 2', 'Message 3', 'Message 4' ],
  Length: 4
}
*/

let deleteFirstTwo = spliceMethodCheck.splice(0, 2);

result = spliceMethodCheck.output();
console.log(result); // { Messages: [ 'Message 3', 'Message 4' ], Length: 2 }

// It works fine!   :)



