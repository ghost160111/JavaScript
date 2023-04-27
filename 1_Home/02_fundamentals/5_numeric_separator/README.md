## Numeric separator

### Introduction to the JS numeric separator

> The numeric separator allows you to separate big numbers, it won't affect during the runtime, the output will be not as you written in your variable. See the following example to understand:

```js

let separatedNumber = 1_000_000_000.05;

console.log(separatedNumber); // 1000000000.05

```

> See other example as well:

```js

let amount = 120_201_123.05; // 120201123.05
let expense = 123_450;       // 123450
let fee = 12345_00;          // 1234500

```

> Also you can use the numeric separators for factional and exponent parts. For example:

```js

let amount = 0.000_001; // 1 millionth

```

> It's important to notice that you can use the numeric separator for bigint literal, binary literal, octal literal, and hex literal. For example:

```js

// bigint
const max = 9_223_372_036_854_775_807n;

// binary
let nibbles = 0b1011_0101_0101;

// octal
let val = 0o1234_5670

// hex
let message = 0xD0_E0_F0;

```

### :memo: Summary.

> - Use underscores (_) to separate numbers. That just for yourself to understand how many digits are there if you are working with big numbers or floating point numbers, it won't affect the runtime.

