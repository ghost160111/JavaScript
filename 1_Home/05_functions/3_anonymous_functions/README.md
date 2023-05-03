# Anonymous Functions

## Introduction to JS anonymous functions

An anonymous function is a function without a name. The following shows how to define an anonymous function:

```js
(function () {
    // ...
});
```

Note that if don't place the anonymous function inside the ```()```, you'll get a syntax error. The ```()``` makes the anonymous function an expression that returns a function object.

An anonymous function is not accessible after its initial creation. Therefore, you often need to assign it to a variable.

For example, the following shows an anonymous function that displays a message:

```js
let show = function () {
    console.log("Anonymous function");
};

show();
```

In this example, the anonymous function has no name between the ```function``` keyword and parentheses.

Because we need to call the anonymous function later, we assign the anonymous function to the show variable.

Since the whole assignment of the anonymous function to the show variable makes a valid expression, you don’t need to wrap the anonymous function inside the parentheses ```()```.

## Using anonymous functions as arguments

In practice, you often pass anonymous functions as arguments to other functions. For example:

```js
setTimeout(function() {
    console.log("Execute later after 1 second");
}, 1000);
```

In this example, we pass an anonymous function into the setTimeout() function. The setTimeout() function executes this anonymous function one second later.

> Note that functions are first-class citizens in JS. Therefore, you can pass a function to another function as an argument.

## Immediately invoked function execution

If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this:

```js
(function() {
    console.log("IIFE");
})();
```

How it works.

First, define a function expression:

```js
(function() {
    console.log("Immediately invoked function execution");
})
```

This expression returns a function.

Second, call the function by adding the trailing parentheses ```()```:

```js
(function() {
    console.log("Immediately invoked function execution");
})();
```

and sometimes, you may want to pass arguments into it, like this:

```js
let person = {
    firstName: "John",
    lastName: "Doe",
};

(function() {
    console.log(person.firstName + " " + person.lastName);
})(person);
```

## Arrow functions

ES6 introduced arrow function expressions that provide a shorthand for declaring anonymous functions:

For example, this function:

```js
let show = function () {
    console.log("Anonymous function");
};
```

...can be shortened using the following arrow function:

```js
let show = () => console.log("Anonymous function");
```

Similarly, the following anonymous function:

```js
let add = function (a, b) {
    return a + b;
};
```

...is functionally equivalent to the following arrow function:

```js
let add = (a, b) => a + b;
```

# :memo: Summary

- Anonymous functions are functions without names.
- Anonymous functions can be used as an argument to other functions or as an immediately invoked execution.
