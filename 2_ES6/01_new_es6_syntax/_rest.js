class RestParameter {
    constructor(type, ...args) {
        this.type = type;
        this.args = args;
    }
    filterByType() {
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
                    case "string":
                        return (prev + " " + curr);
                        break;
                    case "undefined":
                    case "boolean":
                    case "null":
                    case "symbol":
                        return [...this.args];
                        break;
                }
            });
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        } finally {
            console.log("Tasks is done!");
        }
    }
}

const numberRest    = new RestParameter("number", 10, 20, 30);
const bigintRest    = new RestParameter("bigint", 10n, 20n, 30n);
const stringRest    = new RestParameter("string", "JavaScript", "Rest", "Parameters");
const undefinedRest = new RestParameter("undefined", undefined, undefined, undefined);
const booleanRest   = new RestParameter("boolean", true, false, true);
const nullRest      = new RestParameter("null", null, null, null);
const symbolRest    = new RestParameter("symbol", 'A', 'B', 'C');

console.log(numberRest);
console.log("Result: " + numberRest.filterByType() + "\n");
console.log(bigintRest);
console.log("Result: " + bigintRest.filterByType() + "\n");
console.log(stringRest);
console.log("Result: " + stringRest.filterByType() + "\n");
console.log(undefinedRest);
console.log("Result: " + undefinedRest.filterByType() + "\n");
console.log(booleanRest);
console.log("Result: " + booleanRest.filterByType() + "\n");
console.log(nullRest);
console.log("Result: " + nullRest.filterByType() + "\n");
console.log(symbolRest);
console.log("Result: " + symbolRest.filterByType() + "\n");

// DONE!!!
