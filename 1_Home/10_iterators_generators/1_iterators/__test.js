{
    class Sequence {
        constructor(start = 0, end = Infinity, interval = 1) {
            this.start = start;
            this.end = end;
            this.interval = interval;
        }
        [Symbol.iterator]() {
            let counter = 0;
            let nextIndex = this.start;
            return {
                next: () => {
                    if (nextIndex <= this.end) {
                        let result = { value: nextIndex, done: false };
                        nextIndex += this.interval;
                        counter++;
                        return result;
                    }
                    return { value: counter, done: true };
                }
            }
        }
    };
    
    {
        let evenNumbers = new Sequence(2, 10, 2);
    
        for (const num of evenNumbers) {
            console.log(num);
        }
    }
    
    // You can explicitly access [Symbol.iterator]() method as shown in the following code:
    
    {
        let evenNumbers = new Sequence(2, 10, 2);
        let iterator = evenNumbers[Symbol.iterator]();
    
        let result = iterator.next();
    
        while(!result.done) {
            console.log(result.value);
            result = iterator.next();
        }
    }
}


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
                        let result = { value: nextIndex, done: false }
                        nextIndex += this.#interval;
                        counter++;
                        return result;
                    }
                    return { value: counter, done: true };
                },
                return: () => {
                    console.log("Cleaning up...");
                    return { value: undefined, done: true };
                }
            }
        }
    };

    let oddNumbers = new Sequence(1, 10, 2);

    for (const num of oddNumbers) {
        if (num > 7) {
            break;
        }
        console.log(num);
    }
}