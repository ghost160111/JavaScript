# JavaScript - find() array method

> __Summary__: in this tutorial, you will learn how to use the JavaScript find() method to search for the first element in an array, which satisfies a test.

## Introduction to the Array find() method

In ES5, to find an element in an array, you use the indexOf() or lastIndexOf() methods. However, these methods are quite limited because they return the index of the first matching element only.

ES6 introduced a new method called find() added to the Array.prototype object.

The find() method returns the first element in an array that passes a test function. The following shows the syntax of the find() method:

```js
find(callback(element[, index[, array]])[, thisArg])
```

## Arguments

The find() accepts two arguments: a callback function and an optional value to use for the this inside the callback function.

### 1. callback

The callback is a function that executes each element of the array. It takes three arguments:

- element is the current element.
- index the index of the current element.
- array the array that the find() was called upon.

### 2. thisArg

The thisArg is the object used as this inside the callback.

### Return value

The find() executes the callback function for each element in the array until the callback returns a truthy value. 

If the callback returns a truthy value, the find() immediately returns the element and stops searching. Otherwise, it returns undefined.

If you want to find the index of the found element, you can use the findIndex() method.

JavaScript find() examples
The following example uses the find() method to search for the first even number in an array of numbers:

## JavaScript find() examples

The following example uses the find() method to search for the first even number in an array of numbers:

```js
let numbers = [1,2,3,4,5];

console.log(numbers.find(c => c % 2 === 0));
```

Output:

```
2
```

Suppose that we have a list of customer objects with name and credit properties as follows:

```js
let customers = [{
    name: "ABC Inc",
    credit: 100,
}, {
    name: "ACME Corp",
    credit: 200,
}, {
    name: "IoT AG",
    credit: 300,
}];
```

The following code uses the find() method to find the first customer whose credit is greater than 100.

```js
console.log(customers.find(c => c.credit > 100));
```

Output:

```
{ name: "ACME Corp", credit: 200 }
```

# :memo: Summary

- Use the find() method to find the first element of an array that satisfies a provided testing function.
