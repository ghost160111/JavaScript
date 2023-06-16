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
        return this.#messages.splice.call(this.#messages, start, end, ...messages);
    }
}

const spliceMethodCheck = new Splice("Message 1", "Message 2", "Message 3");

const getResult = () => spliceMethodCheck.output();

console.log(getResult()); // { Messages: [ 'Message 1', 'Message 2', 'Message 3' ], Length: 3 }

let addMore = spliceMethodCheck.splice(3, 0, "Message 4", "Message 5", "Message 6");

console.log(getResult()); /* Outputs:
{
  Messages: [ 'Message 1', 'Message 2', 'Message 3', 'Message 4' ],
  Length: 4
}
*/

let deleteFirstTwo = spliceMethodCheck.splice(0, 2);

console.log(getResult()); // { Messages: [ 'Message 3', 'Message 4' ], Length: 2 }

let replaceFirstWith = spliceMethodCheck.splice(0, 4, "Message 0", "Message 1", "Message 2", "Message 3");

console.log(getResult());
/*
{
  'Messages Object': [ 'Message 0', 'Message 1', 'Message 2', 'Message 3' ],
  'Messages Array': {
    '0': 'Message 0',
    '1': 'Message 1',
    '2': 'Message 2',
    '3': 'Message 3'
  },
  Length: 4
}
*/

// It works fine!   :)

