# JavaScript - findIndex() array method

> __Summary__: in this tutorial, you will learn how to use the Array findIndex() method to find the first element that satisfies a given test.

## Introduction to the JavaScript Array findIndex() method

ES6 added a new method called findIndex() to the Array.prototype, which allows you to find the first element in an array that satisfies a provided testing function.

The findIndex() method returns the index of the element that satisfies a testing function or -1 if no element passed the test.

The following illustrates the syntax of the findIndex() method:

```js
findIndex(testFn(element[, index[, array]])[, thisArg])
```

## 1. testFn

The testFn is a function to execute on each element in the array until the function returns true, indicating that the element has been found.

The testFn takes three arguments:

- element is the current element in the array.
- index is the index of the current element being processed.
- array is the array that the findIndex() was called upon.

# 2. thisArg

The thisArg is an optional object to be used this when executing the callback. If you omit the thisArg argument, the findIndex() function uses undefined.

The findIndex() executes the testFn on every element in the array until it finds the one where testFn returns a truthy value, which is a value that coerces to true.

Once the findIndex() finds such an element, it immediately returns the element’s index.

## JavaScript Array findIndex() examples

Let’s take some examples of using the JavaScript Array findIndex() method.

## 1. Using the Array findIndex() method with a simple array example

The following example returns the index of the first occurrence of the number 7 in the ranks array:

```js
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex(rank => rank === 7);

console.log(index);
```

Output:

```
2
```

## 2. Using the Array findIndex() method with a more complex condition

This example uses the findIndex() method to get the index of the first occurrence of the number 7 after the index 2 in the ranks array:

```js
let ranks = [1,5,7,8,10,7];

let index = ranks.findIndex(
    (rank, index) => rank === 7 && index > 2;
);
```

Output:

```
5
```

## 3. Using the Array findIndex() method with an array of objects

The following example uses the Array findIndex() method to find the index of the first product whose proce is greater than 1000:

```js
const products = [
    { name: "Phone", price: 999 },
    { name: "Computer", price: 1999 },
    { name: "PC", price: 2999 },
    { name: "Tablet", price: 995 },
];

const index = products.findIndex((product, index, object) => {
    return product.price > 1000 && index > 1;
});

const result = `Here's the result of the product with a price higher than 1000 and index location greater than 1, result = ${index}`;

console.log(result); // 2
```

Output:

```
Here's the result of the product with a price higher than 1000 and index location greater than 1, result = 2
```

# :memo: Summary

- Use the JavaScript Array findIndex() method to find the first element that satisfies a given test.
