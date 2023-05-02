# Do...while loop

## Introduction to the JS do...while statement

The ```do...while``` loop statement creates a loop that executes a block until a condition evaluates to ```false```. The following statement illustrates the syntax of the ```do...while``` loop:

```js

do {
    statement;
} while (expression);

```

Unlike the ```while``` loop, the ```do...while``` loop always executes the ```statement``` at least once before evaluating the ```expression```.

Because the do...while loop evaluates expression after each iteration, it’s often referred to as a post-test loop.

Inside the loop body, you need to make changes to some variables to ensure that the expression is false after some iterations. Otherwise, you’ll have an indefinite loop.

Note that starting with ES6+, the trailing semicolon (;) after the while(expression) is optional. So you can use the following syntax:

```js
do {
  statement;
} while(expression)
```

The following flowchart illustrates the do-while loop statement:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-do-while.svg">

In practice, you often use the do...while statement when you want to execute the loop body at least once before checking the condition.

## JS do while statement examples

Let’s take some examples of using the do...while statement.

## Simple JS do while statement example

The following example uses the do...while statement to output five numbers from 0 to 4 to the console:

```js
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);
```

- Output
> 0
> 1
> 2
> 3
> 4

In this example:

- First, declare and initialize the count variable to zero.
- Second, show the count and increase its value by one in each iteration until its value is greater or equal to 5.

## 2. Using the JS do while statement to make a simple number guessing game

The following example uses the do...while statement to generate a number guessing game.

The script generates a random integer between 1 and 10. And you have to make a number of guesses until your number matches the random number.

```js
// generate a secret number between 1 and 10
const MIN = 1;
const MAX = 10;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0; // for storing the number of guesses
let hint = ""; // for storing hint
let number = 0;
do {
    // get input from user
    let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

    // get the integer
    number = parseInt(input);

    // increase the number of guesses
    guesses++;

    // check input number with the secret number provide hint if needed
    if (number > secretNumber) {
        hint = ", and less than " + number;
    } else if (number < secretNumber) {
        hint = ", and greater than " + number;
    } else if (number == secretNumber) {
        alert(`Bravo! You're correct after ${guesses} guess(es)`);
    }
} while (number != secretNumber);

```

# :memo: Summary

- Use the do…while statement to create a loop that executes a code block until a condition is false.

