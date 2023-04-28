# Unary and binary operators

> What is the difference between unary and binary operators, well the answer is pretty straightforward. Unary operators have only one operands like ++, +, - and so on, whereas binary operators have two operands like +=, -=, %=, !=, >, <, >=, <=, that's it.

> As we have had documented already the binary operators usage with some examples, here we are going to talk about unary operators:

| Unary Operators         | Name                        | Meaning                                     |
| ----------------------- | --------------------------- | ------------------------------------------- |
| +x                      | Unary plus                  | Convert a value into a number               |
| -x                      | Unary minus                 | Convert a value into a number and negate it |
| ++x                     | Increment operator (prefix) | Add one to a value                          |
| --x                     | Decrement operator (prefix) | Substract the value by one                  |
| x++                     | Increment operator          | Add one to a value                          |
| x--                     | Decrement operator          | Substract the value by one                  |

## Unary plus

> The unary plus operator is a simple plus sign (+). If you place the unary plus before numeric value, it does nothing. For example:

```js

let x = 10;
let y = -x;

console.log(y); // 10

```

> When you apply non-numeric value to unary plus, it converts the value to a number using Number() function with the rules in the following table:

| Value   | Result                                                                                 |
| ------- | -------------------------------------------------------------------------------------- |
| boolean | false to 0, true to 1                                                                  |
| string  | Convert the string value based on a set of specific rules                              |
| object  | Call the valueOf() and/or toString() method to get the value to convert into a number. |

> For example, the following uses the unary plus operator to convert a string '10' to a number 10:

```js

let s = '10';
let y = +s;

console.log(y);        // 10
console.log(typeof s); // string
console.log(typeof y); // number

```

> The following example uses unary plus operator (+) converts a boolean value into a number, false to 0, true to 1:

```js

let f = false,
    t = true;

let nf = +f;
let nt = +t;

console.log(nf); // 0
console.log(nt); // 1

console.log(typeof nf);
console.log(typeof nt);

```

> Suppose, you have an object product with the toString() method as follows:

```js

let product = {
    name: "Airpods",
    version: "2.0",
    toString() {
        return '120'
    },
};

console.log(+product); // 120

```

> In this example, we apply the unary plus operator (+) on the __product__ object that has the toString() method, JavaScript engine calls toString() method to get the value ('25') and convert it into a number. The following adds the valueOf() method to the person object:

```js

let product = {
    name: "Airpods",
    version: "2.0",
    toString() {
        return '25';
    },
    valueOf() {
        return '30';
    },
};

console.log(+product); // 30

```

> In this example, the __product__ object has the valueOf() method, the JS engine calls it instead of the toString() method method to get the value to convert.

## Unary minus

> The unary minus operator is a single minus sign (-). If you apply the unary minus operator to a number, it negates the number. For example:

```js

let x = 10;
let y = -x;

console.log(y); // -10
console.log(typeof y); // number

```

> If you apply the unary minus operator to a non-numeric value, it converts the value into a number using the same rules as the unary plus operator and then negates the value.

## Increment (++), Decrement (--) operators

> The increment operator has two plus signs (++) while the decrement operator has two minus signs (--).

> Both increment and decrement operators have two versions: prefix and postfix. And you place the prefix and postfix versions of the increment or decrement operators before and after the variable to which they apply.

> The following example uses the prefix increment operator to add one to a variable:

```js

let age = 20;
++age;

console.log(age); // 21

```

> Above example is equivalent to the following example:

```js

let age = 20;
age = age + 1;
// or
age += age;

```

> The following examples uses the prefix decrement operator to substract one from a variable:

```js

let weight = 90;
--weight;

console.log(weight); // 89

```

> It is equivalent to the following example:

```js

let weight = 90;
weight = weight - 1;
// or
weight -= 1;

```

> When you apply the prefix increment or decrement, JS changes the variable before evaluation the statement. For example:

```js

let weight = 90;
weight = ++weight + 5;

console.log(weight); // 96

```

> In this example:

> - First, increase the weight on the right-hand side so ++weight is 91

> - Second, add five to the ++weight that returns 96

> - Third, assign the result to the weight on the left-hand side.

> Likewise, the following example uses a prefix decrement operator:

```js

let weight = 90;
weight = --weight + 5;

console.log(weight); // 94

```

> In this example:

> - First, subtract one from the weight, –weight returns 89

> - Second, add five to the –weight that returns 94

> - Third, assign the result to the weight on the left-hand side.

> The postfix increment or decrement operator changes the value after the statement is evaluated. For example:

```js

let weight = 90;
let newWeight = weight++ + 5;

console.log(newWeight); // 95
console.log(weight); // 91

let weight2 = 90;
let newWeight2 = ++weight2 + 5;

console.log(newWeight2); // 96
console.log(weight2); // 91

```

> How it works.

> - First, add five to weight (90) and assign the result to the newWeight (95)

> - Second, add one to the weight variable after the second statement completes, the weight becomes 91.

> - Third, output both newWeight and weight to the console.

> When applying the increment/decrement operator to a non-numeric value, it performs the following steps:

> - First, convert the value into a number using the same rules as the unary plus (+) operator.

> - Then, add one to or subract one from the value.

# :memo: Summary

> - Unary operators work on one value.

> - Unary plus (+) or minus (-) converts a non-numeric value into a number. The unary minus negates the value after the conversion.

> - The prefix increment operator adds one to a value. The value is changed before the statement is evaluated.

> - The postfix increment operator adds one to a value. The value is changed after the statement is evaluated.

> - The prefix decrement operator subtracts one from a value. The value is changed before the statement is evaluated.

> - The postfix decrement operator subtracts one from a value. The value is changed after the statement is evaluated.
