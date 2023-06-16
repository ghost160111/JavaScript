class General {
    #messages;
    constructor(...messages) {
        [...this.#messages] = messages;
    }
    output() {
        const messagesArr = "Messages Array";
        const messagesObj = "Messages Object";
        const length = "Length";
        return {
            [length]: this.#messages.length,
            [messagesObj]: {...this.#messages},
            [messagesArr]: [...this.#messages],
        };
    }
    addToEnd(...values) {
        return this.#messages.push.call(this.#messages, ...values);
    }
    addToStart(...values) {
        return this.#messages.unshift.call(this.#messages, ...values);
    }
    removeEnd() {
        return this.#messages.pop.call(this.#messages);
    }
    removeStart() {
        return this.#messages.shift.call(this.#messages);
    }
    splice(start, end, ...messages) {
        return this.#messages.splice.call(this.#messages, start, end, ...messages);
    }
    slice(start, end) {
        return this.#messages.slice.call(this.#messages, start, end);
    }
}

const arrMethods = new General("Element 1", "Element 2", "Element 3");

arrMethods.addToEnd("Element 4");
arrMethods.addToStart("Element 0");
arrMethods.removeEnd();
arrMethods.removeStart();

arrMethods.splice(3, 5, "Element 4", "Element 5", "Element 6");
arrMethods.splice(0, 0, "Element -1", "Element 0");

let slice = arrMethods.slice(0, 2);
console.log(slice);

const getResult = () => arrMethods.output();
console.log(getResult());

// Everything works fine :)