# If statement

## Introduction to the JS if statement

The ```if``` statement executes block if a condition is ```true```. The following shows the syntax of the ```if``` statement:

```js
if ( condition ) {
    statement;
}
```

The ```condition``` can be a value or an expression. Typically, the condition evaluates to a Boolean value, which is ```true``` or ```false```.

If the ```condition``` evaluates to ```true```, the ```if``` statement executes the ```statement```. Otherwise, the ```if``` statement passes the control to the next statement after it.

The following flowchart illustrates how the ```if``` statement works:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-if.svg">


## JS if statement examples

The following example uses ```if``` statement to check if the age is equal to or greater than ```18```:

```js

let age = 18;
if (age >= 18) {
    console.log("You can sign up");
}

```

- Output:
```You can sign up```

How it works?

- So, firstly we declare a variable age and assign a value to it which is 18.

- Secondly, we check if age is greater than or equal to 18, or not. If the expression is true or if age is 18 or greater it is going to be ```true```. If not, or if age is lower than 18, then that block of statement becomes false and it is not going to work because if block works only if the statement if ```true```.

## Nested if statement

It's possible to use an ```if``` statement inside another ```if``` statement. For example:

```js

let age = 16;
let state = 'CA';

if (state == 'CA') {
    if (age >= 16) {
        console.log('You can drive.');
    }
}

```

- Output: 
```You can drive.```

How it works?

First, declare and initialize ```age``` and ```state``` variables:

```js

let age = 16;
let state = 'CA';

```

Second, check if the ```state``` is ```'CA'``` using an ```if``` statement. If yes, check if the ```age``` is greater than ```16``` using a nested ```if``` statement and output a message to the console:


```js

if (state == 'CA') {
    if (age >= 16) {
        console.log("You can drive.");
    }
}

```

In practice, you should avoid using nested ```if``` statements as much as possible. For example, you can use the ```&&``` operator to combine the conditions and use an ```if``` statements as follows:

```js

let age = 16;
let state = 'CA';

if (state == 'CA' && age >= 16) {
    console.log("You can drive.");
}

```

# :memo: Summary

- Use the JS ```if``` statement to execute a statement if a condition is ```true```.
- Avoid using nested ```if``` statement as much as possible.