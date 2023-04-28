# Assignment operators

> An assignment operator (=) assigns a value to a variable. The syntax of the assignment operator is as follows:

```js
let b = 2;
let a = b;
```

> The following example increases the __counter__ variable by one and assigns the result to the __counter__ variable:

```js

let counter = 0;
counter = counter + 1;

```

> There is shorthand for the operation above. See the following example

```js

let counter = 0;
counter += 1;

```

> The result will be the same.

> With other arithmetic operations, the syntax is the same:

```js

let a = 1;

a -= 1; // same as 'a = a - 1'
a *= 1; // same as 'a = a * 1'
a /= 1; // same as 'a = a / 1'
a %= 2; // same as 'a = a % 2'

```

> Assigning multiple variables

```js

let a = 10, b = 20, c = 25, d = 30;
a = b = c = d;

console.log(a); // 30
console.log(b); // 30
console.log(c); // 30
console.log(d); // 30
// all variables were assigned as 30

```

```js

let a = 10, b = 20, c = 30;

b = c; // now b is 30
a = b; // now a is also 30

```

# :memo: Summary

> - Use the assignment operator to assign value to a variable.
> - Chain the assignment operator if you want to assign a single value to multiple variables.
