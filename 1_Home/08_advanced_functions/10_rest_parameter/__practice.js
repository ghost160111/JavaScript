// Simple example of rest parameters syntax 
// and implementation of it, as well.
{
    function sum(...args) {
        let total = 0;
        
        for (const a of args) {
            total += a;
        }
    
        return total;
    }
    
    let total = sum(1,2,3,4,5,6,7,8,9,10);
    console.log(total); // 55
}

// ES6 syntax
{
    function sum(...args) {
        return args
            .filter(function (e) {
                return typeof e === "number";
            })
            .reduce(function (prev, next) {
                return prev + next;
            });
    }
    
    let result = sum(10, "%_data", null, undefined, 20);
    console.log(result); // 30
}

// ES5 syntax
{
    function sum() {
        return Array.prototype.filter
            .call(arguments, function (e) {
                return typeof e === "number";
            })
            .reduce(function (prev, curr) {
                return prev + curr;
            });
    }
    
    let result = sum(10, "%_data", null, undefined, 20);
    console.log(result);
}

{
    function filterBy(type, ...args) {
        return args.filter(function (e) {
            return typeof e === type;
        });
    }
}

// JS rest parameter in a dynamic function
{
    var showNumbers = new Function("...numbers", "console.log(numbers");
    var show = showNumbers(1, 2, 3, null);

    console.log(show); // 1, 2, 3
}

