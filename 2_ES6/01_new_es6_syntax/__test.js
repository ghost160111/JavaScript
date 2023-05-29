const { nextTick } = require("process");

// REST PARAMETER
{
    function fn(a,b,...args) {
        // ...
    }

    fn(1,2,3,"A","B","C");
    // The args array stores the following values: [3,'A','B','C']
    // If you pass only two parameters, the rest parameter will be empty
    fn(1,2);
    // []

    //function rest(a,...rest,b) {
        // error
    //}
    // SyntaxError: Rest parameter must be last formal parameter

    // More examples:
    function sum(...args) {
        let total = 0;
        for (const a of args) {
            total += a;
        }
        return total;
    }
    
    const total = sum(1,2,3);
    console.log(`Result: ${total}`); // Result: 6

    // if you want to calculate only numbers:
    function sumNumbersOnly(...args) {
        return args
            .filter((e) => {
                return typeof e === "number";
            })
            .reduce((prev, curr) => {
                return prev + curr;
            });
    }
    const anotherSum = sumNumbersOnly(1,'A',2,3,10.433,'B',true,undefined);
    console.log(`Result: ${anotherSum}`); // Result: 16.433

    function anotherSum2() {
        return Array.prototype.filter
            .call(arguments, function (e) {
                return typeof e === "number";
            })
            .reduce(function (prev, curr) {
                return prev + curr;
            });
    }

    console.log(`Result: ${anotherSum2(10,20,true,undefined,'A')}`);
    // Result: 30

    // The following function helps you to filter the arguments based on a specific type such as numbers, boolean, and null.

    function filterBy(type, ...args) {
        return args.filter((e) => {
            return typeof e === type;
        });
    }

    console.log(filterBy("number", 1,213,231,2323));
    // [ 1, 213, 231, 2323 ]

    // You can also use some operations on it
    function filterBy2(type, ...args) {
        try {
            return args.filter((e) => {
                return typeof e === type;
            })
            .reduce((prev, curr) => {
                switch (type) {
                    case "number":
                        return (prev + curr);
                        break;
                    case "boolean":
                    case "undefined":
                    case "bigint":
                        return [...args];
                        break;
                    case "string":
                        return (prev + " " + curr);
                        break;
                }
            });
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        } finally {
            console.log(`Task is done...`);
        }
    }

    const filterBy2Example = filterBy2("number", 10, 20, 30);
    console.log(`Result: ${filterBy2Example}`); // Result: 60

    // You can also add another type rather than numbers, like strings:
    const filterBy2String = filterBy2("string", "JavaScript", "Rest", "Parameter");
    console.log(`Result: ${filterBy2String}`); // Result: JavaScript Rest Parameter


}

class RestParameter {
    constructor(type, ...args) {
        this.type = type;
        this.args = args;
    }
    filterBy() {
        try {
            return this.args.filter((e) => {
                return typeof e === this.type;
            })
            .reduce((prev, curr) => {
                switch (this.type) {
                    case "number":
                    case "bigint":
                        return (prev + curr);
                        break;
                    case "undefined":
                    case "null":
                    case "boolean":
                    case "symbol":
                        return [this.args];
                        break;
                    case "string":
                        return (prev + " " + curr);
                        break;
                }
            });
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        } finally {
            console.log("Task is done...");
        }
    }
}

const rest = new RestParameter("number", 10, 20, 30);

console.log(rest.filterBy());