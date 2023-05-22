// GENERATORS

// EXAMPLE 1:
{
    function* generate() {
        console.log("invoked 1st time");
        yield 1;
        console.log("invoked 2nd time");
        yield 2;
    }

    let gen = generate();
    console.log(gen); // Object [Generator] {}

    //let result = gen.next(); // invoked 1st time
    //console.log(result); // { value: 1, done: false }

    //result = gen.next(); // invoked 2nd time
    //console.log(result); // { value: 2, done: false }

    //result = gen.next();
    //console.log(result); // { value: undefined, done: true }

    for (const g of gen) {
        console.log(g);
    }
    // invoked 1st time
    // { value: 1, done: false }
    // invoked 2nd time
    // { value: 2, done: false }
}

// EXAMPLE 2:
{
    function* forever() {
        let index = 0;
        while(true) {
            yield index++;
        }
    }

    let f = forever();

    console.log(f.next()); // { value: 0, done: false }
    console.log(f.next()); // { value: 1, done: false }
    console.log(f.next()); // { value: 2, done: false }
}

// EXAMPLE 3:
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
                    if (nextIndex < this.#end) {
                        let result = { value: nextIndex, done: false };
                        nextIndex += this.#interval;
                        counter++;
                        return result;
                    }
                    return { value: counter, done: true };
                }
            }
        }
    }
}

// EXAMPLE 4:
{
    class Sequence {
        #start;
        #end;
        #interval
        constructor(start = 0, end = Infinity, interval = 1) {
            this.#start = start;
            this.#end = end;
            this.#interval = interval;
        }
        * [Symbol.iterator]() {
            for (let index = this.#start; index <= this.#end; index += this.#interval) {
                yield index;
            }
        }
    }

    let oddNumbers = new Sequence(1, 10, 2);

    for (const num of oddNumbers) {
        console.log(num);
    }
    // 1
    // 3
    // 5
    // 7
    // 9
}

// EXAMPLE 5: BAG DATA STRUCTURE
{
    class Bag {
        #elements;
        constructor() {
            this.#elements = [];
        }
        isEmpty() {
            return this.#elements.length === 0;
        }
        add(element) {
            this.#elements.push(element);
        }
        * [Symbol.iterator]() {
            for (const element of this.#elements) {
                yield element;
            }
        }
    }

    let bag = new Bag();

    bag.add(1);
    bag.add(2);
    bag.add(3);

    for (const e of bag) {
        console.log(e);
    }
    // 1
    // 2
    // 3
}