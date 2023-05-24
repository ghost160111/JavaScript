// Example 1:
{
    //function add(x, y) {
    //    if (typeof x !== "number") {
    //        throw "The first argument must be a number";
    //    }
    //    if (typeof y !== "number") {
    //        throw "The second argument must be a number";
    //    }
    //
    //    return x + y;
    //}
    
    //const result = add('a', 10);
    //console.log(result);
    // code output:
    /*
    c:\Users\User\Documents\GitHub\JavaScript\1_Home\14_error_handling\3_throw\__test.js:3
            throw "The first argument must be a number";
            ^
    The first argument must be a number
    (Use `node --trace-uncaught ...` to show where the exception was thrown)
    
    Node.js v18.12.1
    */
}

// Example 2: fixed version of example 1
{
    function add(x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
            throw "The first or second argument must be a number";
        }

        return x + y;
    }

    try {
        const result = add('a', 10);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

// Example 3:
{
    function add(x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
            throw new Error("The first or second argument must be a number");
        }

        return x + y;
    }

    try {
        const result = add('a', 10);
        console.log(result);
    } catch (e) {
        console.log(e.name, ":", e.message);
    }
}

// Example 4: creating your own defined error by extending Error class
{
    class NumberError extends Error {
        constructor(value) {
            super(`"${value}" is not valid number`);
            this.name = "InvalidNumber";
        }
    }

    function add(x, y) {
        if (typeof x !== "number") {
            throw new NumberError(x);
        }

        if (typeof y !== "number") {
            throw new NumberError(y);
        }

        return x + y;
    }

    try {
        const result = add('a', 10);
        console.log(result);
    } catch (e) {
        console.log(`${e.name} : ${e.message}`);
    }

    // code output:
    // InvalidNumber : "a" is not a valid number
}
