class Slice {
    #args
    constructor(...args) {
        [...this.#args] = args;
    }
    slice(start, stop) {
        return this.#args.slice.call(this.#args, start, stop);
    }
    output() {
        return {
            length: this.#args.length,
            array: [...this.#args],
        };
    }
}

const sliceExample = new Slice("Arg 1", "Arg 2", "Arg 3");
const getResult = () => sliceExample.output();

console.log(getResult()); // { length: 3, array: [ 'Arg 1', 'Arg 2', 'Arg 3' ] }

let portion = sliceExample.slice(0, 2);
console.log(portion); // [ 'Arg 1', 'Arg 2' ]
