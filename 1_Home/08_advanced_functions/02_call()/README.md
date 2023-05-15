# call() method

> __Summar__: in this doc page, you will learn about the JS `call()` method and how to use it more effectively.

## Introduction to the JavaScript call() method

In JS, a function is an instance of the `Function` type. For example:

```js
function add(x, y) {
    return (x + y);
}

console.log(add instanceof Function);
```

The `Function.prototype` type has the `call()` method with the following syntax:

```
functionName.call(thisArg, arg1, arg2, ...);
```

In this syntax, the `call()` method calls a function `functionName` with the arguments (`arg1`, `arg2`, `...`) and the `this` set to `thisArg` object inside the function.

- The `thisArg` is the object that the `this` object references inside the function `functionName`.
- The `arg1`, `arg2`, ... are the function arguments passed into the `functionName`.

The `call()` method returns the result of calling the `functionName()`.

The following example defines the `add()` function and calls it normally:

```js
function add(x, y) {
    return (x + y);
}

let result = add(10, 20);
console.log(result); // 30
```

The following calls the `add()` function but use the `call()` method instead:

```js
function add(x, y) {
    return (x + y);
}

let result = add.call(this, 10, 20);
console.log(result); // 30
```

By default, the this inside the function is set to the global object i.e., window in the web browsers and global in Node.js.

> :memo: Note that in the strict mode, the `this` inside the function is set to `undefined` instead of the global object.

Consider the following example:

```js
let greeting = "Hi";

let messenger = {
    greeting: "Hello",
};

function Say(name) {
    console.log(this.greeting + " " + name);
}
```

Inside the `say()` function, we reference the `greeting` via the `this` value. If you just invoke the `say()` function via the `call()` method as follows:

```js
say.call(this, "John");
```

It will show the following output in the console:

```
"Hi John"
```

However, when you invoke the `call()` method of `say` function object and pass the `messenger` object as the `this` value:

```js
say.call(messenger, "John");
```

The output will be:

```
"Hello John"
```

In this case, the `this` value inside the `say()` function references the `messenger` object, not the global object.

## Using the JS call() method to chain constructors for an object

You can use the `call()` method for chaining constructors of an object. Consider the following example:

```js
function Box(height, width) {
    this.height = height;
    this.width = width;
}

function Widget(height, width, color) {
    Box.call(this, height, color);
    this.color = color;
}

let widget = new Widget("red", 100, 200);

console.log(widget);
```

In this example:

- First, initialize the `Box` object with two properties: `height` and `width`.
- Second, invoke the `call()` method of the `Box` object inside the `Widget` object, set the `this` value to the `Widget` object.

## Using the JS call() method for function borrowing

The following example illustrates how to use the call() method for borrowing functions:

```js
const car = {
    name: "car",
    start() {
        console.log("Start the " + this.name);
    },
    speedUp() {
        console.log("Speed up the " + this.name);
    },
    stop() {
        console.log("Stop the " + this.name);
    },
};

const aircraft = {
    name: "aircraft",
    fly() {
        console.log("Fly");
    },
};

car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly();
```

Output:

```
Start the aircraft
Speed up the aircraft
Fly
```

How it works.

First, define a car object with one property name and three methods `start`, `speedUp`, and `stop`:

```js
const car = {
    name: 'car',
    start() {
        console.log('Start the ' + this.name);
    },
    speedUp() {
        console.log('Speed up the ' + this.name);
    },
    stop() {
        console.log('Stop the ' + this.name);
    },
};
```

Second, define the aircraft object with one property name and a method:

```js
const aircraft = {
    name: "aircraft",
    fly() {
        console.log("Fly");
    },
};
```

Third, call the `start()` and `speedUp()` methods of the `car` object and the `fly()` method of the `aircraft` object. However, passing the `aircraft` as the first argument into the `start()` and `speedUp()` methods:

```js
car.start.call(aircraft); // Start the aircraft
car.speedUp.call(aircraft); // Speed up the aircraft
aircraft.fly(); // Fly
```

Inside the start() and speedUp() methods, the this references the aircraft object, not the car object. Therefore, the this.name returns the 'aircraf' string. Hence, the methods output the following message:

```
Start the aircraft
Speed up the aircraft
```

Technically, the aircraft object borrows the start() and speedUp() method of the car object. And function borrowing refers to an object that uses a method of another object.

The following example illustrates how the arguments object borrows the filter() method of the Array.prototype via the call() function:

```js
function isOdd(number) {
    return number % 2;
}

function getOddNumbers() {
    return Array.prototype.filter.call(arguments, isOdd);
}

let result = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(result); // [ 1, 3, 9 ]
```

How it works.

First, define the `isOdd()` function that returns true if the number is an odd number:

```js
function isOdd(number) {
    return number % 2;
}
```

Second, define the `getOddNumber()` function that accepts any number of arguments and returns an array that contains only odd numbers:

```js
function getOddNumbers() {
    return Array.prototype.filter.call(arguments, isOdd);
}
```

In this example, the `arguments` object borrows the `filter()` method of the `Array.prototype` object. Third, call the `getOddNumbers()` function:

```js
let results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results);
```

# :memo: Summary

- In this doc page, you have learned about the JS `call()` method and how to use it more effectively.
