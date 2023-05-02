# Arithmetic operations

## Addition operator (+)

> The addition operator returns the sum of two values. For example:

```js

let sum = 10 + 20;
console.log(sum); // 30

```

> If either value is a string, the addition operator uses the following rules:

> - If both are strings, it concatenates the second string to the first one.

> - If one value is a string, it implicitly converts the numeric value into a string and concatenates two strings.

```js

let x = '10',
    y = '20';

let z = x + y;

console.log(z); // 1020

```

> As you can see from the example above when adding two strings it concatenates one with another, like '10' + '20'  = '1020'.

> The following example shows how to use the addition operator to calculate the sum of a number and a string:

```js

let result = 10 + '20';

console.log(result); // 1020

// analogically

result = '10' + 20;

console.log(result); // 1020

```

> As you can see from the example above adding either number to string or string to number, gives us the same value.

> One more example: 

```js

let result = '10' + 20 + 30 + 50;

console.log(result);         // 10203050
console.log(typeof result);  // string

```

> From the example above we can say surely that if there is one string in addition operation, all the values will be concatenated. Which means every value will be converted into a string and concatenated definitely.

## Substraction Operator (-)

> The substraction operator substracts one number from another. For example:

```js

let result = 30 - 10;

console.log(result); // 20

```

> If a value is a string, a boolean, null, or undefined, the JS engine will:

> - First, convert the value to a number using Number() function.

> - Second, perform substraction.

```js

let result = '10' / 2;

console.log(result); // 5

```

> Here is the additional examples:

```js

let result = 100 / 50;
console.log(result); // 2

result = '100' / 50;
console.log(result); // 2

result = 100 / '50';
console.log(result); // 2

result = '100' / '50';
console.log(result); // 2

result = true / false;
console.log(result); // Infinity

result = false / true;
console.log(result); // 0

result = true / true;
console.log(result); // 1

result = false / false;
console.log(result); // NaN

```

> Output:
> - 2
> - 2
> - 2
> - 2
> - Infinity
> - 0
> - 1
> - NaN

## Multiplication Operator (*)

> JS uses asteriks (*) to represent multiplication operator. The multiplication operator multiplies two values and returns a single value:

```js

let result 2 * 3;
console.log(result); // 6

```

> If either value is not a number, the JS engine implicitly converts it into a number by using Number() function and performs a multiplication:

```js

let result = '5' * 2;
console.log(result); // 10

```

### Divide operator (/)

> JS uses the slash (/) character to represent the divide operator. The divide operator divides first value by the second value. For example:

```js

let result = 20 / 10;
console.log(result); // 2

```

> If either value is not a number, the JS engine converts it into a number by using Number() function. For example:

```js

let result = '20' / 10;
console.log(result); // 2

```

## Using JS arithmetic operators with objects

> If a value is an object, the JS engine will call the valueOf() method of the object to get the value for calculation. For example:

```js

let energy = {
    valueOf() {
        return 100;
    },
};

let currentEnergy = energy - 10;
console.log(currentEnergy); // 90

```

> If you use other method, it is not going to work. See the following example:

```js

let calc = {
    valueOf() {
        return 100;
    },
};

let add = calc + 20;
console.log(add); // 120

let sub = calc - 20;
console.log(sub); // 80

let calc2 = {
    calculate() {
        return 100;
    },
};

add = calc2 + 20;
console.log(add); // [Object object]20

sub = calc2 - 20;
console.log(sub); // NaN

```

> Outputs:
> - 120
> - 80
> - [object Object]20
> - NaN


> If the object doesn't have the valueOf() method but has the toString() method, JS engine will call toString() method to get the value for calculation. For example:

```js

let energy = {
    toString() {
        return 50;
    },
};

let currentEnergy = energy - 10;
console.log(currentEnergy); // 40

currentEnergy = energy + 100;
console.log(currentEnergy); // 150

currentEnergy = energy / 2;
console.log(currentEnergy); // 25

currentEnergy = energy * 1.5;
console.log(currentEnergy); // 75

```

> Outputs:
> - 40
> - 150
> - 25
> - 75


# :memo: Summary

> - Use the JS arithmetic operators including addition (+), substraction (-), multiplication (*), and division (/) to perform artimetic operations.

