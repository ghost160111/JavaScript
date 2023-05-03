# Functions

## Introduction to JS functions

When developing an application, you often need to perform the same action in many places. For example, you may want to show a message whenever an error occurs.

To avoid repeating the same code all over places, you can use a function to wrap that code and reuse it.

JS provides many built-in functions such as ```parseInt()``` and ```parseFloat()```. In this topic, you will learn how to develop custom functions.

## Declare a function

To declare a function, you use the ```function``` keyword, followed by the function name, a list of parameters, and the function body as follows:

```js
function functionName(parameters) {
    // function body
    // ...
}
```

The function nmae must be a valid JS identifier. By convention, the function names are in camelCase and start with verbs like getData(), fetchContents(), and isValid().

A function can accept zero, one, or more parameters. In the case of multiple parameters, you need to use a comma to separate two parameters.

The following declares a function ```say()``` that accepts zero parameter:

```js
function say() {}
```

The following declares a function named ```square()``` that accepts one parameter:

```js
function square(a) {}
```

Inside the function body, you can write the code to implement an action. For example, the following ```say()``` function simply shows a message to the console:

```js
function say(message) {
    console.log(message);
}
```

In the body of the ```say()``` function, we call the ```console.log()``` function to output a message to the console.

## Calling a function

To use a function, you need to call it. Calling a function is also known as invoking a function. To call a function, you use its name followed by arguments enclosing in parentheses like this:

```js
functionName(arguments);
```

When calling a function, JS executes the code inside the function body. For example, the following shows how to call the ```say()``` function:

```js
// here is the actual function
function say(message) {
    console.log(message);
}

// here we are invoking the function 'say':
say("Some kinda message");

// Outputs:
// Some kinda message
```

Output:
- Some kinda message

## Parameters vs. Arguments

The terms parameters and arguments are often used interchangeably. However, they are essentially different.

When declaring a function, you specify the parameters. However, when calling a function, you pass the arguments that are corresponding to the parameters.

For example, in the ```say()``` function, the ```message``` is the parameter and the ```'Some kinda message'``` string is an argument that corresponds to the ```message``` parameter.

## Returning a value

Every function in JS implicitly returns ```undefined``` unless you explicitly specify a return value.
For example:

```js
function say(message) {
    console.log(message);
}

let result = say("Hello");
console.log("Result:", result);
```

Output:
- Hello
- Result: undefined

To specify a return value for a function, you use the ```return``` statement followed by an expression or a value, like this:

```js
return expression;
```

For example, the following ```add()``` function returns the sum of the two arguments:

```js
function add(a, b) {
    return a + b;
}
```

The following shows how to call the ```add()``` function:

```js
let sum = add(10, 20);
console.log("Sum:", sum);
```

Output:
- Sum: 30

The following example uses multiple ```return``` statements in a function to return different values based on conditions:

```js
function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}
```

The ```compare()``` function compares two values. It returns:
- -1 if the first is greater than the second one.
- 1 if the first is less than the second one.
- 0 if the arguments are equal to each other.

The function immediately stops executing immediately when it reaches the ```return``` statement. Therefore, you can use the ```return``` statement without a value to exit the function prematurely, like this:

```js
function say(message) {
    // show nothing if the message is empty
    if (!message) {
        return;
    }
    console.log(message);
}
```

In this example, if the ```message``` is blank (or ```undefined```), the ```say()``` function will show nothing.

The function can return a single value. If you want to return multiple values from a function, you need to pack these values in an array or an object.

## The arguments object

Inside a function, you can access an object called ```arguments``` that represents the named arguments of the function.

The ```arguments``` object behaves like an array though it is not an instance of the Array type.

For example, you can use the square bracket [] to access the arguments: ```arguments[0]``` returns the first argument, ```argument[1]``` returns the second one, and so on.

Also, you can use the ```length``` property of the ```arguments``` object to determine the number of arguments.

```js
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
```

Hence, you can pass any number of arguments to the ```add()``` function, like this:

```js
console.log(add(1,2));      // 3
console.log(add(1,2,3,4,5)) // 15
```

## Function hoisting

In JS, you can use a function before declaring it. For example:

```js
showMe(); // a hoisting example

function showMe() {
    console.log("an hoisting example");
}
```

This feature is called hoisting.

Function hoisting is a mechanism that the JS engine physically moves function declarations to the top of the code before executing them.

The following show the version of the code before the JS engine executes it:

```js
function showMe() {
    console.log("a hoisting example");
}

showMe(); // a hoisting example
```

# :memo: Summary

- Use the ```function``` keyword to declare a function
- Use the ```functionName()``` to call a function.
- All functions implicitly return undefined if they don't explicitly return a value.
- Use the ```return``` statement to return a value from a function explicitly.
- The ```arguments``` variable is an array-like object inside a function, representing function arguments.
- The function hoisting allows you to call a function before declaring it.