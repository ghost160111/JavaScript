// Finding Elements section of Advanced Array methods

// create a class with the functions that interacts with those Array method that are related to this section

class FindingElements {
    #args;
    constructor(...args) {
        [...this.#args] = args;
    }
    findLocation(value, array = [...this.#args]) {
        let result = [];
        let index = array.indexOf(value);
        for (let i = 0; i < array.length; i++) {
            if (index !== -1) {
                result.push(index);
                index = array.indexOf(value, index + 1);
            }
        }
        return result;
    }
    checkIncludes(value, array = this.#args) {
        let result = "";
        let check = array.includes.call(array, value);
        result = check;
        return result;
    }
    calculateCount(element, index, obj = this.#args) {
        let funcOper = (element = element, index = index, obj = obj) => element % 2 === 0;
        let operation = obj.find.call(obj, funcOper);
        return operation;
    }
    findIndex(value, index, obj) {
        return this.#args.findIndex.call(this.#args, (value = value, index = index, obj = obj) => value > 5 && index > 7);
    }
}

const data = [1, 2, 3, 4, 3, 3, 5, 6, 4, 4, 7, 8, 5, 3, 9, 10];

const findingElements = new FindingElements(...data);

// example of indexOf() method
const index = findingElements.findLocation(3);
console.log(index); // [ 2, 4, 5, 12 ]

// example of includes() method
const checkingIncludes = findingElements.checkIncludes(4);
console.log(checkingIncludes); // true

// example of find() method
const calculationCount = findingElements.calculateCount();
console.log(calculationCount);

// example of findIndex() method
let value = 5;
let indexValue = 7;

const findIndex = findingElements.findIndex(value, indexValue);
console.log(findIndex);
// outputs: 10

// Everything works fine :)
// That's pretty good!
