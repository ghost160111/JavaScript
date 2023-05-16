let sum_1 = function(a, b) {
    return (a + b);
}

console.log(sum_1(10, 20)); // 30

/* ... */

let sum_2 = (function(a, b) {
    return (a + b);
});

console.log(sum_2(10, 20)); // 30

/* ... */

let sum_3 = (function(a, b) {
    return (a + b);
})(10, 20);

console.log(sum_3); // 30

/* ... */

// By placing functions and variables inside an immediately invoked 
// function expression, you can avoid polluting them to the global object:

(() => {
    let counter = 0;

    let add = (a, b) => {
        return (a + b);
    }

    console.log(add(10, 20));
})();
// Outputs: 30

/* ... */

class MyMath {
    #a;
    #b;
    #c;

    constructor(a, b, c) {
        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    add(...a) {
        return (a + ...);
    }

    multiply(a, b, ...c) {
        return (a * b * c);
    }
}

let operation = new MyMath();

console.log(`Result: ${operation.add(10, 20)}`);
