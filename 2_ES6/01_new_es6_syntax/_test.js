class RestOperator {
    constructor(type, ...args) {
        this.type = type;
        this.args = args;
    }
    filterBy() {
        try {
            return this.args.filter((el) => {
                return typeof el === this.type;
            })
            .reduce((prev, curr) => {
                switch (this.type) {
                    case "string":
                        return (prev + " " + curr);
                        break;
                    case "number":
                    case "bigint":
                        return (prev + curr);
                        break;
                    case "boolean":
                    case "symbol":
                    case "undefined":
                    case "null":
                        return [...this.args];
                        break;
                    case "object":
                        return {...this.args};
                        break;
                }
            });
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        } finally {
            console.log("Rest operator tasks are done!");
        }
    }
}

const rest = new RestOperator("number", 10, 20, 30);

console.log(rest); // { type: 'number', args: [ 10, 20, 30 ] }
console.log(rest.filterBy()); // 60

class SpreadOperator {
    constructor(...args) {
        this.args = args;
    }
    spread() {
        try {
            return [...this.args.reduce((prev, curr) => {
                return [...prev, ...curr];
            })];
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        } finally {
            console.log("Spread operator tasks are done!");
        }
    }
}

const spread = new SpreadOperator([10, 20, 30], [40, 50, 60]);

console.log(spread); // SpreadOperator { args: [ [ 10, 20, 30 ], [ 40, 50, 60 ] ] }
console.log(spread.spread()); // [ 10, 20, 30, 40, 50, 60 ]


