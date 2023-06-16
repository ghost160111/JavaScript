class Length {
    #args;
    constructor(...args) {
        [...this.#args] = args;
    }
    get Length() {
        return this.#args.length;
    }
    setArgs(...values) {
        this.#args.push.call(this.#args, ...values);
    }
    output() {
        return {
            args: this.#args,
            length: this.#args.length,
        };
    }
}

const lengthIns = new Length("el1", "el2", "el3");

let setArgs = lengthIns.setArgs("el4", "el5");

const getResult = () => {
    let result = lengthIns.output();
    return { result };
};

console.log(getResult());

setArgs = lengthIns.setArgs("el6", "el7");

console.log(getResult());
