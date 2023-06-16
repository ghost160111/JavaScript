# JS Array push method

> __Summary__: in this doc page, you'll learn how to use the JavaScript Array push() method to add one or more elements to the end of an array.

## Introduction to the JavaScript Array push() method

The `Array.prototype.push()` method adds one or more elements to the end of an array and returns the new array’s length.

The syntax of push() method:

```js
push(newElement);
push(newElement1, newElement2);
push(newElement1, newElement2, ..., newElementN);
```

The push() method returns the new value of the length property of the array object on which you call the method.

## JavaScript Array push() method examples

### 1. Using the array push() to append one element to an array

The following adds the number 40 to the end of the numbers array:

```js
let numbers = [10, 20, 30];

const length = numbers.push(40);

console.log(length);
console.log(numbers);
```

Output:

```
4
[ 10, 20, 30, 40 ]
```

The following picture illustrates how the example works:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-Array-Push-example.svg">

### 2. Using the array push() to add multiple elements to the end of an array

The following example shows how to use the push() method to add multiple elements to the end of an array:

```js
let numbers = [10, 20, 30];

let anotherArray = [60, 70, 80];

const length = numbers.push(40, 50);

console.log(length);
console.log(numbers);
```

Output:

```
5
[ 10, 20, 30, 40, 50 ]
```

The following illustrates how it works:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-Array-Push-Multiple-Elements.svg">

### 3. Using the push() to append elements of an array to another array

Suppose you have two arrays colors and cmyk:

```js
let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'black'];
```

And you want to append the elements of the cmyk to the colors array.

To do that, you may use a for...of loop that iterates over the elements of the cmyk array and use the push() method to append each element to the colors array like this:

```js
let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'black'];

for (const color of cmyk) {
    colors.push(color);
}

console.log(colors);
```

Output:

```
['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black']
```

Starting from ES6, you can use the spread operator (...) to spread the elements of the cmyk array and push them to the colors array at the same time like this:

```js
let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

colors.push(...cmyk);

console.log(colors);
```

Using JavaScript Array push() method with array-like objects
The Array.prototype.push() method is designed to be generic on purpose. Therefore, you can call the push() method with the call() or apply() on the array-like objects.

Under the hood, the push() method uses the length property to determine the position for inserting the elements. If the push() method cannot convert the length property into a number, it’ll use 0 as the value for the index.

See the following example:

```js
let greetings = {
    0: 'Hi',
    1: 'Hello',
    length: 2,
    append(message) {
        [].push.call(this, message);
    },
};

greetings.append('Howdy');
greetings.append('Bonjour');
```

Output:

```
{
  '0': 'Hi',
  '1': 'Hello',
  '2': 'Bonjour',
  '3': 'Howdy',
  '4': 'Yo dawg',
  length: 5,
  append: [Function: append]
}
```

How it works.

First, define the greetings object that has three properties 1, 2, and length and one method append():

```js
let greetings = {
    0: 'Hi',
    1: 'Hello',
    length: 2,
    append(message) {
        [].push.call(this, message);
    },
};
```

The append() method calls the push() method of an array object to append the message to the greetings object.

Second, call append() method of the greetings object:

```js
greetings.append('Howdy');
greetings.append('Bonjour');
```

In each call, the push() uses the length property of the greetings object to determine the position where it appends the new element and increases the length property by one.

As a result, the greetings object has two more elements at the index 2 and 3. And the length property is 4 after the calls.

Third, output the greetings object to the console:

```js
console.log(greetings);
```

To allow the append() method to accepts a number of messages, you can modify the method like this:

#### First method

```js
let greetings = {
    0: 'Hi',
    1: 'Hello',
    length: 2,
    append(...message) {
        [].push.call(this, ...message);
    },
};

greetings.append('Howdy', 'Bonjour');

console.log(greetings);
```

This method is much simpler and newer syntax 'ES6' to understand, rather than a second one.

How it works:

Add spread operator to the parameters.

#### Second method

```js
let greetings = {
    0: 'Hi',
    1: 'Hello',
    length: 2,
    append() {
        [].push.call(this, ...arguments);
    },
};

greetings.append('Howdy', 'Bonjour');

console.log(greetings);
```

How it works.

- First, remove the message parameter from the append method.
- Second, spread out the elements of the arguments object and push them to the greetings object.

# :memo: Summary

- Use the JS array push() method to append one or more elements to an array.
- The push() method also works with an array-like object.
