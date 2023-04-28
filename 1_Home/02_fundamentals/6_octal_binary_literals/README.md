# Octal binary literals

> To represent an octal literal in ES5, you use the zero prefix (0) followed by a sequence of octal digits (from 0 to 7). For example:

```js

let a = 051;

console.log(a); // 41

```

> If octal literals contains the number that is out of range, JS ignores the leading 0 and treats the octal literal as decimal, as shown in the following example:

```js

let b = 058; // invalid octal
console.log(b); // 58

```

> :memo: Note! You can use the octal literals in non-strict mode, but if you switch on strict mode by adding "use strict", JS will throw an error

```js

"use strict";

let b = 058;

console.log(b); // Syntax Error: Decimals with leading zeros are not allowed in strict mode.

```

> ES6 allows you to specify the octal literal by using the prefix 0o followed by a sequence of octal digits from 0 through 7. Here is an example:

```js

let c = 0o51;
console.log(c); // 41

```

> If you use an invalid number in the octal literal, JavaScript will throw a SyntaxError as shown in the following example:

```js

let c = 0o58;
console.log(c); // Syntax Error

```

### Binary Literals

> In ES5, JS didn't provide any literal form for binary numbers. To parse a binary string, you use the parseInt() function as follows:

```js

let e = parseInt('111',2);
console.log(e); // 7

```

> ES6 added support for binary literals by using the 0b prefix followed by a sequence of binary numbers (0 and 1). Here is an example:

```js

let f = 0b111;
console.log(f); // 7

```

### :memo: Summary!

> - Octal literals start with 0o followed by a sequence of numbers between 0 and 7.
> - Binary literals start with 0b followed by a sequence of number 0 and 1.



