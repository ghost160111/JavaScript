const calculator = (() => {
    const add = (a, b) => {
        return (a + b);
    }

    const multiply = (a, b) => {
        return (a * b);
    }

    return {
        add: add,
        multiply: multiply,
    };
})();
