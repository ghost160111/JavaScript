# JavaScript Array pop() method

> __Summary__: in this doc page, you'll learn how to use the JS array pop() method to remove the last element from an array.

## Introduction to the JavaScript Array pop() method

The Array.prototype.pop() method removes the last element from the array and returns the removed element. Here's the syntax of the pop() method:

```js
let array = ['el1', 'el2', 'el3'];
array.pop();

console.log(array); // [ 'el1', 'el2' ]
```

The pop() method changes the length property of the array. If the array is empty, the pop() returns undefined.

## JavaScript pop() method example

Let’s take some examples of using the pop() method.

### 1. Using the JavaScript array pop() method to remove the last element of an array

The following example uses the pop() method to remove the last element of the numbers array:

```js
const numbers = [10, 20, 30];
const last = numbers.pop();

console.log(last); // 30
console.log(numbers.length); // 2
```

Output

```
30
2
```

In this example, the pop() method removes the number 30 from the numbers array. Also, it decreases the value of the length property of the numbers array to 2.

The following picture illustrates how the pop() method works:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-Array-pop.svg">

## 2. Using the JavaScript array pop() method with an empty array

The following example calls the pop() method on an empty array. In this case, the pop() method returns undefined and the length is of the array is zero:

```js
const numbers = [];
const last = numbers.pop();

console.log(last);
console.log(numbers);
```

Output:

```
undefined
0
```

### Using JS pop() method with array-like objects

The pop() method is generic. Therefore, you can use the call() or apply() to call the pop() method on the array-like object. Internally, the pop() uses the length property of the array-like object to determine the last element to remove.

See the following example:

```js
let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    removeLast() {
        return [].pop.call(this);
    },
};

let greeting = greetings.removeLast();

console.log(greeting); // 'Howdy'
console.log(greetings); // { '0': 'Hi', '1': 'Hello', length: 2, removeLast: [Function: removeLast] }
```

How it works. 

First, define the greetings object that has:

- Four properties 0, 1, 2, and length.
- One method removeLast() that uses the call() method of an array to invoke the pop() method.

Second, call the removeLast() method of the greetings object:

```js
let greeting = greetings.removeLast();
```

Third, output the removed element (`greeting`) and the the `greetings` object to the console:

```js
console.log(greeting);
console.log(greetings);
```

### Creating your own class of Greetings

Here's the structure of the class:

```js
class Greetings {
    constructor(...messages) {
        this.messages = messages;
    }
    append(...message) {
        this.messages.push.call(this, ...message);
    }
    prepend(...message) {
        this.messages.unshift.call(this, ...message);
    }
    removeLast() {
        return this.messages.pop.call(this);
    }
    removeFirst() {
        return this.messages.shift.call(this);
    }
}

let greetings = new Greetings('Hi', 'Hello');

let arrayOfGreetings = ['Bonjour', 'Howdy'];

let addedElements = greetings.append(...arrayOfGreetings);

// remove the first element
let firstElement = greetings.removeFirst();

console.log(greetings);
```

Output:

```

```

# :memo: Summary

- Use the pop() method to remove the last element of an array
- Use the call() or apply() to call the pop() method on an array-like object
