## Logical operators

> The logical operators are important in JS because they allow you to compare variables and do something based on the result of that comparison.

> For example, if the result of the comparison __true__, you can run a block of code; if it's __false__, you can execute another code block.

JS provides three logical operators:

- ! (Logical NOT)
- || (Logical OR)
- && (Logical AND)

## 1. The logical NOT operator (!)

> JS uses an exclamation point __!__ to represent the logical NOT operator. The __!__ operator can be applied to a single value of any type, no just a Boolean value.

> When you apply the __!__ operator to a boolean value, the __!__ returns __true__ if the value is __false__ and vice versa. For example:

- Example 1:

```js

let eligible = false,
    required = true;

console.log(!eligible); // true
console.log(!required); // false

```

- Example 2:

```js

let num = 10;
console.log(!num); // false

```

> In this example, the __eligible__ is __true__ so __!eligible__ returns __false__. And since the __required__ is __true__, the __!required__ returns __false__.

> When you apply the __!__ operator to a non-boolean value. The __!__ operator first converts the value to a boolean value and then negates it, as it is shown in example 2.

> The following example shows how to use the __!__ operator:

```js

!a

```

> The logical __!__ operator works based on the following rules:

| Value of a                  | Output when a is !a  |
| --------------------------- | -------------------- |
| undefined                   | true                 |
| null                        | true                 |
| number other than 0         | false                |
| NaN                         | true                 |
| object                      | false                |
| "" - empty string           | true                 |
| "hello" - non-empty string  | false                |

> Here is the code example:

```js

console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false

```

## Double negation (!!)

> Sometimes, you may see the double negation (!!) in the code. The __!!__ uses the logical NOT operator (```!```) twise to convert a value to its real boolean value.

> The result is the same as using the ```Boolean()``` function. For example:

```js

let counter = 10;
console.log(!!counter); // true

```

> The first __!__ negates the Boolean value of the __counter__ variable. If the __counter__ is __true__, then the __!__ operator makes it false and vice versa.

> The second __!__ operator negates that result of the first __!__ operator results the real boolean value of the __counter__ variable.

## 2. The Logical AND operator (&&)

> JS uses the double ampersand (&&) to represent the logical AND operator. The following expression uses __&&__ operator:

```js

let result = a && b;

```

> If __a__ can be converted to __true__, the __&&__ operator returns the __b__; otherwise, it returns the __a__. In fact, this rule is applied to all boolean values.

> The following truth table illustrates the result of the __&&__ operator when it is applied to two Boolean values:

| a     | b     | a && b |
|-------|-------|--------|
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

> The result of the __&&__ operator is true only if both values are __true__, otherwise, it is __false__. For example:

```js

let eligible = false,
    required = true;

console.log(eligible && required); // false

```

> In the example above, the __eligible__ is __false__, therefore, the value of the expression __eligible && required__ is __false__.

> See the following example:

```js

let eligible = true,
    required = true;

console.log(eligible && required); // true

```

> In this example, both __eligible__ and __required__ are __true__, therefore, the value of the expression __eligible && required__ is __true__.

## Short-circuit evaluation

> The __&&__ operator is short-circuited. It means that the __&&__ operator evaluates the second value only if the first one doesn't suffice to determine the value of an expression. For example:

```js

let b = true;
let result = b && (1 / 0);

console.log(result); // Infinity

```

> In the example above, __b__ is __true__ therefore the __&&__ operator could not determine the result without further evaluation the second expression (1/0).

> The result is __Infinity__ which is the result of the expression (1/0). However:

```js

let b = false;
let result = b && (1 / 0);

console.log(result); // false

```

> In this case, __b__ is __false__, the __&&__ operator doesn't need to evaluate the second expression because it can determine the final result as __false__ based value of the first value.

## Chain operators

The following expression uses multiple ```&&``` operators:

```js

let result = value1 && value2 && value3;

```

> The ```&&``` operator carries the following:
> - Evaluates values from left to right.
> - For each value, converts it to a boolean. If the result is ```false```, stops and returns the original value.
> - If all values are truthy values, returns the last value.

> In other words, the ```&&``` operator returns ther first falsy value or the last value if none were found.

> :memo: If a value can be converted to true, it is so-called a truthy value. If a value can be converted to false, it is a so-called falsy value.

## 3. The Logical OR operator (||)

> JS uses the double pipe ```||``` to represent the logical OR operator. You can apply the ```||``` operator to two values of any type:

```js

let result = a || b;

```

> If ```a``` can be converted to ```true```, returns ```a```; else, returns ```b```. This rule is also applied to boolean values.

> The following truth table illustrates the result of the ```||``` operator based on the value of the operands:


| a       | b      | a ```||``` b  |
|---------|--------|---------------|
| true    | true   | true          |
| true    | false  | true          |
| false   | true   | true          |
| false   | false  | false         |


> The ```||``` operator returns ```false``` if both values evaluate to ```false```. In case either value is ```true```, the ```||``` operator returns ```true```. For example:

```js

let eligible = true,
    required = false;

console.log(eligible || required); // false

```

> From the example above, the expression ```eligible || required``` returns ```false``` because both values are ```false```.

## The || operator is also short-circuited

> The following example shows how to use multiple || operators in an expression:

```js

let result = value1 || value2 || value3;

```

> The ```||``` operator does the following:
> - Evaluates values from the left to right.
> - For each value, converts it to a boolean value. If the result of the conversion is ```true```, stops and returns the value.
> - If all values have evaluated to ```false```, returns the last value.

In other words, the chain of the ```||``` operators returns the first truthy value or the last one if no truthy value was found.

## Logical operator precedense

When you mix logical operators in an expression, the JS engine evaluates the operators based on a specified order. And this order is called the <i>operator precedense</i>.

In other words, the operator precedense is the order of evaluation of logical operators in an expression.

The precedence of the logical operator is in the following order from the highest to the lowest:

1. Logical NOT (!)
2. Logical AND (&&)
3. Logical OR  (||)

# :memo: Summary

- The NOT operator (```!```) negates a boolean value. The (```!!```) converts a value into its real boolean value.
- The AND operator (```&&```) is applied to two Boolean values and returns true if both values are true.
- The OR operator (```||```) is applied to two Boolean values and returns ```true``` if one of the operands is ```true```.
- Both ```&&``` and ```||``` operator are short-circuited. They can be also applied to non-boolean values.
- The logical operator precedense from the highest to the lowest is ```!```, ```&&```, and ```||```.




