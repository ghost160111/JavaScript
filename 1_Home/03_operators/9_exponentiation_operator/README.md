# Exponentiation operator

## Introduction to the JavaScript exponentiation operator

To raise a number to the power of an exponent, you often use the static method ```Math.pow()``` with the following syntax:

```js
Math.pow(base, exponent);
```

- For example:

```js

let base     = 2,
    exponent = 3;

let result = Math.pow(base, exponent);

console.log(result); // 2^3 = 2 * 2 * 2 = 8

```

ECMAScript2016 provided an alternative way to get a base to the exponent power by using the exponentiation operator (```**```) with the following syntax:

```js
x**n
```

The operator ```**``` raises the ```x``` to the power of an exponent ```n```.

> Note that some languages use the caret symbol ```^``` for exponentiation. However, JS already uses that symbol for the bitwise logical XOR operator.

The following example illustates how to use the exponentiation operator (```**```):

```js

let result = 2 ** 2;
console.log(result); // 4

result = 2 ** 3;
console.log(result); // 8

```

The ```Math.pow()``` accepts a value and converts it to a value of the number type for calculation. Similarly, the operator ```**``` accept values of the ```number``` type. In addition, the operator ```**``` accepts a value of the ```bigint``` type. For example:

```js
let result = 2n ** 3n;
console.log(result); // 8n
```

Also, you can use the exponentiation operator (```**```) in the infix notation. For example:

```js

let x = 2;
x **= 4;
console.log(x); // 16

```

JS does not allow you to put a unary operator immediately before the base number. If you attempt to do so, you'll get a ```SyntaxError```.

The following example causes a syntax error:

```js
let result = -2 ** 3;
```

Error:

```Uncaught SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence```

To fix this, you use parentheses like this:

```js

let result (-2) ** 3;
console.log(result); // -8

```

# :memo: Summary

- The exponentiation operator ```**``` raises a number to the power of an exponent.
- The exponentiation operator ```**``` accepts values of the type ```number``` or ```bigint```.
