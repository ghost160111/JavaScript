# JavaScript Array unshift method

> __Summary__: in this tutorial, you’ll learn how to use the JavaScript Array unshift() method to add one or more elements to the beginning of an array.

## Introduction to the JS array unshift() method

The Array.prototype.unshift() method adds one or more elements to the beginning of an array and returns the new array’s length.

The following shows the syntax of the unshift() method:

```js
unshift(el);
unshift(el1, el2, el3);
unshift(el1, el2, ..., elN);
```

Because the unshift() method needs to reindex the existing elements, it is slow if the array has many elements.

> Note that to add one or more elements to the end of an array, you can use the push() method instead.

## JS array unshift() method examles

Let's take some examples of using the unshift() method.

### 1. Using JS array unshift() method to prepend an element to an arrays

The following example uses the unshift() method to add the number 10 to the numbers array:

```js
let numbers = [30, 40];

const length = numbers.unshift(20);

console.log({ length });
console.log({ numbers });
```

Output:

```
{ length: 3 }
{ numbers: [ 20, 30, 40 ] }
```

How it works.

First, define an array that has two elements:

```js
let numbers = [20, 30];
```

The length of the numbers array is 2

Second, add the number 10 to the beginning of the numbers array and assign the new array's length to the length variable:

```js
const length = numbers.unshift(20);
```

Third, output the length and numbers variables to the console:

```js
console.log({ length });
console.log({ numbers });
```

The following picture illustrates how the unshift() method works:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-Array-unshift.svg">

### 2. Using JS array unshift() method to prepend multiple elements to an array

The following example uses the unshift() method to add two elements at the beginning of an array:

```js
let numbers = [30, 40];

const length = numbers.unshift(10, 20);

console.log({ length });
console.log({ numbers });
```

Output:

```
{ length: 4 }
{ numbers: [ 10, 20, 30, 40 ] }
```

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-Array-unshift-example.svg">

### 3. Using the JS array unshift() to add elements of an array to another array

The following example uses the unshift() method to add elements of an array to the beginning of another array:

```js
let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

for (const weekend of weekends) {
    days.unshift(weekend);
}

console.log(days);
```

Output:

```
['Sun', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
```

Starting from ES6, you can use the spread operator to make the code more concise, like this:

```js
let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

days.unshift(...weekends);

console.log(days); // Output will be the same as the previous example
```

## Using the JavaScript Array unshift() method with array-like objects

The unshift() method is generic. Therefore, it can work well with array-like objects. To call the unshift() method from an array-like object, you borrow it from an array object using the call() or apply() method.

See the following example:

```js
let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    prepend(message) {
        [].unshift.call(this, message);
        return this.length;
    },
};

greetings.prepend('Good day');

console.log(greetings);
```

Output:

```
{
  '0': 'Good day',
  '1': 'Hi',
  '2': 'Hello',
  '3': 'Howdy',
  length: 4,
  prepend: [Function: prepend]
}
```

How it works.

First, define the greetings object that has

- The properties with the names 0, 1, and 3 represent the elements of the greetings object.
- The length property is initialized with a value of 3, which indicates the number of elements that the greetings object has.
- The prepend() method invokes the call() method of the unshift() method and sets the this to the greetings object. In other words, the greetings object borrows the unshift() method from an array object ([]).

Second, call the prepend() method of the greetings object to add an element at the index 0th.

Third, output the greetings object to the console.

If you want to allow the prepend() method to add one or more elements to the greetings object, you can use the rest parameter and spread operator like this:

```js
let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    prepend(...messages) {
        [].unshift.call(this, ...messages);
        return this.length;
    },
};

greetings.prepend('Good day', 'Bye');

console.log(greetings);
```

In this example, the prepend() method accepts one or more messages (...messages) and passes them into the unshift() method individually using the spread operator.

# :memo: Summary

- Use the JavaScript array unshift() method to add one or more elements to the beginning of an array.
- The unshift() method also works with the array-like object by using the call() or apply() method.
