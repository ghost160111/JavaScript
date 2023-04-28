# Comparison operators

> A comparison operato returns a Boolean value indicating that the comparison is true or not. See the following example:

```js

let r1 = 20 > 10;  // true
let r2 = 20 < 10;  // false
let r3 = 10 == 10; // true

```

## Compare numbers

```js

let a = 10,
    b = 20;

console.log(a >= b);  // false
console.log(a == 10); // true

```

> This example is straightforward. The variable a is 10, b is 20. The expression a >= b expression returns false and the expression a == 10 expression returns true.

## Compare strings 

```js

let name1 = "alice",
    name2 = "bob";

let result = name1 < name2;
console.log(result);           // true
console.log(name1 == "alice"); // true

```

> Because JS compares characters numerically, JS can show unexpected outputs:

```js

let f1 = 'apple',
    f2 = 'Banana';

let result = f2 < f1;

console.log(result); // true

```

> In this example, f2 is less than f1 because the letter B has the character code 66 while the letter a has the character code 97.

> To fix this, you need to:

> - First, convert the strings into a common format, either lowercase or uppercase

> - Second, compare the converted values

> For example:

```js

let f1 = "apple",
    f2 = "Banana";

let result = f2.toLowerCase() < f1.toLowerCase();

console.log(result); // false

```




