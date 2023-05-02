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

## Compare a number with a value of another type

```js

console.log(10 < '20');  // true
console.log(10 == '10'); // true

```

> In the example above, string converts to a number using Number() function then comparison operation starts to compare the numbers.

## Compare an object with a non-object

> If a value is an object, the valueOf() method of that object is called to return the value for comparison. If the object doesn't have the valueOf() method, the toString() method is called instead. For example:

```js

let apple = {
    valueOf: function() {
        return 10;
    },
};

let orange = {
    toString: function() {
        return '20';
    },
};

console.log(apple > 10);   // false
console.log(orange == 20); // true

```

> In the first comparison, the apple object has the valueOf() method that returns 10. Therefore, the comparison operator uses the number 10 for comparison.

> In the second comparison, JS first calls the valueOf() method. However, the orange object doesn't have the valueOf() method. So, JS calls the toString() method to get the returned value of 20 for comparison.

## Compare a Boolean with another value

> If the value is a Boolean value, JS converts it to a number and compares the converted value with the other value; true is converted to 1 and false is converted to 0. For example:

```js

console.log(true > 0);       // true
console.log(false < 1);      // true
console.log(true > false);   // true
console.log(false > true);   // false
console.log(true >= true);   // true
console.log(true <= true);   // true
console.log(false <= false); // true
console.log(false >= false); // true

```

> In addition to the above rules, the equal (==) and not-equal (!=) operators also have the following rules.

## Compare null and undefined

> In JS, null equals undefined. It means that the following expression returns true.

```js

console.log(null == undefined); // true

```

## Compare NaN with other values

> If either value is NaN, then the equal (==) returns false

```js

console.log(NaN == 1); // false

```

> Even

```js

console.log(NaN == NaN); // false

```

> The non-equal (!=) operator returns true when comparing the NaN with another value:

```js

console.log(NaN != 1); // true

```

> And also

```js

console.log(NaN != NaN); // true

```

## Strict equal (===) and non strict equal (!==)

> Besides the comparison operators above, JS provides the strict equal (===) and non strict equal (!==) operators.

| Operator    | Meaning          |
| ----------- | ---------------- |
| ===         | strict equal     |
| !==         | non strict equal |

> The strict equal and non strict equal operators behave like the equal and no equal operators except that they don't convert the operand before comparison.

> However, in the second comparison, since we use strict equal operator (===), JS doesn't convert the string before comparison, therefore the result is false.

# :memo: Summary

In this tutorial you have learned how to use the JS comparison operators to compare values.

> - Comparison operators
> - Compare numbers
> - Compare strings
> - Compare a number with a value of another type
> - Compare an object with a non-object
> - Compare a boolean with another value
> - Compare null and undefined
> - Compare NaN with other values
> - Strict equal (===) and non strict equal (!==)


