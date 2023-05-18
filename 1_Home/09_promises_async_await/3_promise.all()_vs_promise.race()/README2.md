# JavaScript Promise.race()

> __Summary__: in this doc page, you'll learn how to use the JS `Promise.race()` static method.

## Introduction to JS Promise.race() static method

The `Promise.race()` static method accepts a list of promises as an iterable object and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise.

Here's the syntax of the `Promise.race()` method:

```js
Promise.race(iterable)
```

In this syntax, the iterable is an iterable object that contains a list of promises.

The name of `Promise.race()` implies that all the promises race against each other with a single winner, either resolved or rejected.

See the following diagram:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise-Race-Fulfilled.svg">

