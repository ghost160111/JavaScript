// Checks if a number is odd
const isOdd = (num) => {
    if (num % 2) {
        return "Odd";
    }
    else {
        return "Even";
    }
}

const num = 20;
const checkNum = isOdd(num);

console.log(checkNum); // Even

// Remainder
const remainder = (dividend, divisor) => dividend % divisor;

console.log(remainder(10,3)); // 1
console.log(remainder(-5,3)); // -2

// Modulo
const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

console.log(mod(10,3)); // 1
console.log(mod(-5,3)); // 1


