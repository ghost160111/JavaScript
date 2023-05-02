# If...else statement

## Introduction to the JS if...else statement

The ```if``` executes a block if a condition is ```true```. When the condition is ```false```, it does nothing. But if you want to execute a statement if the condition is ```false```, you can use an ```if...else``` statement.

The following shows the syntax of the ```if...else``` statement:

```js

if ( condition ) {
    // ...
} else {
    // ...
}

```

In this syntax, the condition is a value or an expression that evaluates to true or false. If the condition is true, the if...else statement executes the block that follows the if branch.

If the condition is false, the if...else statement executes the block that follows the else branch.

Typically, the condition evaluates to a boolean value, which is true or false. However, if it evaluates to a non-boolean value, the if...else statement will convert it to the boolean value.

The following illustrates how the ```if...else``` statement works:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-if-else.svg">

## JS if...else statement examples

The following examples uses the ```if...else``` statement to check if the age is greater than or equal to 18:

```js

let age = 16;

if (age >= 18) {
    console.log("You can sign up");
} else {
    console.log("You must by at least 18 to sign up");
}

```

In this example, the ```age``` is ```18```. Therefore, the expression ```age >= 18``` is ```true```. Hence, you’ll see the following message in the console:

```You must be at least 18 to sign up.```

In this example, the age is 16. Therefore, the expression age >= 18 evaluates to false. Hence, the statement in the else branch executes that output the message to the console.

The following example uses a logical operator AND (&&) as the condition in the if block:

```js

let age = 16;
let country = "USA";

if (age >= 16 && country === "USA") {
    console.log("You can get a driving license.");
} else {
    console.log("You are not eligible to get a driving license.");
}

```

Because the age is 16  and the country is the USA, the following expression returns ```true```.

```js
age >= 16 && country === "USA"
```

And you see the following output:

```You can get a driving license.```

# :memo: Summary

- Use the JS ```if...else``` statement to execute a block if a condition is ```true``` and another block otherwise.
