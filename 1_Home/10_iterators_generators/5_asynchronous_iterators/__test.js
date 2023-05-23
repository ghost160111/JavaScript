// ASYNCHRONOUS ITERATORS

// EXAMPLE 1: SYNCRHONOUS ITERATOR
{
    class Sequence {
        #start;
        #end;
        #interval;
        constructor(start = 0, end = Infinity, interval = 1) {
            this.#start = start;
            this.#end = end;
            this.#interval = interval;
        }
        [Symbol.iterator]() {
            let counter = 0;
            let nextIndex = this.#start;
            return {
                next: () => {
                    if (nextIndex <= this.#end) {
                        let result = { value: nextIndex, done: false };
                        nextIndex += this.#interval;
                        counter++;
                        return result;
                    }
                    return {
                        value: counter,
                        done: true,
                    };
                }
            }
        }
    }

    (() => {
        let seq = new Sequence(1, 10, 1);

        for (const value of seq) {
            console.log(value);
        }
    })();
}

// EXAMPLE 2: ASYNCHRONOUS ITERATOR
{
    class AsyncSequence {
        #start;
        #end;
        #interval;
        constructor(start = 0, end = Infinity, interval = 1) {
            this.#start = start;
            this.#end = end;
            this.#interval = interval;
        }
        [Symbol.asyncIterator]() {
            let counter = 0;
            let nextIndex = this.#start;
            return {
                next: async () => {
                    if (nextIndex <= this.#end) {
                        let result = { value: nextIndex, done: false };
                        nextIndex += this.#interval;
                        counter++;
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve(result);
                            }, 1000);
                        });
                    }
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve({
                                value: counter,
                                done: true,
                            });
                        }, 1000);
                    });
                }
            }
        }
    }

    (async () => {
        let seq = new AsyncSequence(1, 10, 1);

        for await (const value of seq) {
            console.log(value);
        }
    })();
}

