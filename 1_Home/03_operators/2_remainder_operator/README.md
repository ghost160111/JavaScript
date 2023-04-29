# Remainder operator

> JS uses the % to represent the remainder operator. The remainder returns the remainder left over when one value is divided by another value.

> Here's the syntax of the remainder operator:

```js

dividend % divisor

```

> The following shows the equation for the remainder:

```js

dividend = divisor * quotient + remainder
where |remainder| < |divisor|

```

> In this equation, the dividend, divisor, quotient, and remainder are all integers. The sign of the remainder is the same as the sign of the dividend.

## JS remainder operator examples:

### 1. Using the remainder operator with positive dividend example:

> The following example shows how to use the remainder operator with a positive dividend:

```js

let remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1

```

### 2. Using the remainder operator with negative dividend example:

> The following example uses remainder operator with a negative dividend:

```js

let remainder = -5 % 3;
console.log(remainder); // -2

remainder = -5 % -3;
console.log(remainder); // -2

```

### 3. Using the remainder operator special values

> If a dividend is an __Infinity__ and divisor is a finite number, the remainder is NaN. For example:

```js

let remainder = Infinity % 2;
console.log(remainder); // NaN

```

> If a dividend is a finite number and a divisor is zero, the remainder is NaN:

```js

let remainder = 10 % 0;
console.log(remainder); // NaN

```

> If both dividend and divisor are Infinity, the remainder is NaN:

```js

let remainder = Infinity % Infinity;
console.log(remainder); // NaN

```

> If a dividend is a finite number and the divisor is __Infinity__, the remainder is the dividend. For example:

```js

let remainder = 10 % Infinity;
console.log(remainder); // 10

```

> If the dividend is zero and the divisor is non-zero, the remainder is zero:

```js

let remainder = 0 % 10;
console.log(remainder); // 0

```

> If either dividend or divisor is not a number, it's converted to a number using the Number() function and applied the above rules. For example:

```js

let remainder = '10' % 3;
console.log(remainder); // 1

```

### Using the remainder operator to check if a number is odd or even

> To check if a number is odd, you use the remainder operator (%) like the following example:

```js

let num = 13;
let isOdd = num % 2;

console.log(isOdd); // 1 -> which means it is odd

num = 10;
console.log(isOdd); // 0 -> which means it is even

```

> Here is the more reliable example using functions and ES6 syntax:

```js

const isOdd = (num) => num % 2;

const checkThisOne = isOdd(20);
console.log(checkThisOne); // 0 -> which means it is even

```

> Here is the much more reliable example:

```js

const isOdd = (num) => {
    if (num % 2) {
        return "Odd";
    }
    else {
        return "Even";
    }
}

let num = 20;
let checkNum = isOdd(num);

console.log(checkNum); // Even

```

> Above example is much reliable, as you can see.

### Remainder vs Modulo operator

> In JS, the remainder operator (%) is not the modulo operator.

> If you have been working with other programming languages like Python, C#, C, C++, you may find the % represents the modulo operator in this language. Hovewer, it is not the case in JS.

> To get modulo in JS, you use the following expression:

```js

((divided % divisor) + divisor) % divisor;

```

> Or wrap it in a function:

```js

const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

console.log('remainder: ', 5 % 3);  // 2
console.log('modulo: ', mod(5, 3)); // 2

// dividien and divisor have the different signs
console.log('remainder: ', -5 % 3); // -2
console.log('modulo: ', mod(-5, 3));  // 1

```

> Outputs:
> - 2
> - 2
> - -2
> - 1

# :memo: Summary!

> - Use the JS remainder operator to find the remainder of the two values that are divided by one to another.
> - Use the formula: '((dividend % divisor) + divisor) % divisor' to find the modulo of two values which is default in other programming languages.

- Final code:

```js

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

```
