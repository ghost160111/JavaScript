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
