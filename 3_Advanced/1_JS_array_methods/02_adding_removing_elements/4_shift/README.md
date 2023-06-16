# JavaScript Array shift()

> __Summary__: in this doc page, you'll learn how to use the JS array shift() method to remove the first element from an array.

## Introduction to the JS array shift() function

The `Array.prototype.shift()` method removes the first element from an array and returns that element. The following shows the syntax of the shift() method.

```js
array.shift();
```

If the array is empty, the shift() method returns undefined. Otherwise, it returns the removed element. Also, the shift() method reduces the length property of the array by one.

If you want to remove the last element from an array, you can use the pop() method.

> :memo: Note that the shift() method has to reindex all the remaining elements of an array. Therefore, it’s slower in comparison with the pop() method.

## JS array shift() method examples

Let's take some examples of using the shift() method.

## 1. Using the JS array shift() method example

The following example uses the shift() method to remove the first element from an array:

```js
const numbers = [10, 20, 30];
let number = numbers.shift();

console.log({ number });
console.log({ numbers });
console.log({ length: numbers.length });
```

Output:

```
{ number: 10 }
{ numbers: [20, 30] }
{ length: 2 }
```

How it works.

First, define the numbers array that has three elements.

```js
const numbers = [10, 20, 30];
```

Second, remove the first element from the numbers array and assign the removed element to the number variable.

```js
let number = numbers.shift();
```

Third, output the removed element, array, and the array's length to the console:

```js
console.log({ number });
console.log({ numbers });
console.log({ length: numbers.length });
```

The following picutre illustrates how the above example works:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-Array-Shift.svg">

## 2. Using the JS array shift() method example

The following example shows how to use the shift() method with a while loop to remove all elements of an array:

```js
const numbers = [10, 20, 30];
let number;
while ((number = numbers.shift()) != undefined) {
    console.log(number);
}
```

Output:

```
10
20
30
```

## Using the JS array shift() method with array-like objects

The shift() method is generic. Therefore, you can use it with array-like objects. To use the shift() method with an array-like object, you use the call() or apply() method.

Consider the following example:

```js
let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    removeFirst() {
        return [].shift.call(this);
    },
};

const greeting = greetings.removeFirst();

console.log(greeting);
console.log(greetings);
```

Output:

```
Hi
{
  '0': 'Hello',
  '1': 'Howdy',
  length: 2,
  removeFirst: [Function: removeFirst]
}
```

How it works.

First, define the greetings object:

```js
let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    removeFirst() {
        return [].shift.call(this);
    },
};
```

The greetings object has three elements denoted by the properties 0, 1, and 2. Also, it has the length property that stores the number of elements of the object.

The removeFirst() method uses the call() method to invoke the shift() method of an array with the this references to the greetings object.

Second, call the removeFirst() method and assigned the removed element to the greeting variable:

```js
const greeting = greetings.removeFirst();
```

Third, output the greeting and greetings to the console:

```js
console.log(greeting);
console.log(greetings);
```

The output shows that the length is reduced by one, the property with the index 0 is removed, and the indexes of other properties were adjusted accordingly.

# :memo: Summary

- Use the shift() method to remove the first element from the array and return that element.
- Use the shift() method with an array-like object via the call() or apply() method.
