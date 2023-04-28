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


