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


