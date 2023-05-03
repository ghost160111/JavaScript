# Continue

## Introduction to the JS continue statement

The continue statement terminates the execution of the statement in the current iteration of a loop such as a for, while, and do…while loop and immediately continues to the next iteration.

Here’s the syntax of the continue statement:

```js
continue [label]
```

In this syntax, the label is optional. It is a valid identifier associated with the label of a statement. Read the <a href="https://github.com/ghost160111/JavaScript/blob/master/1_Home/04_control_flow/09_break/README.md">break</a> statement documentation for more information on the label statement.

Typically, you use the ```continue``` with <a href="https://github.com/ghost160111/JavaScript/blob/master/1_Home/04_control_flow/01_if/README.md">if</a> statement like this:

```js
// inside a loop
if (condition) {
    continue;
}
```

In this syntax, the ```if``` statement specifies a condition to execute to the ```continue``` statement inside a loop.

## Using the continue statement in a for loop

When using the ```continue``` statement in a for loop, it doesn't terminate the loop entirely. Instead, it jumps to the iterator expression.

The following flowchart illustrates how the continue statement works in a for loop:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-continue-for.svg">

The following example uses a continue in a for loop to display the odd number in the console:

```js
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
```

Output:
- 1
- 3
- 5
- 7
- 9

In this example, the for loop iterates over the numbers from 0 to 9.

The ```i % 2``` returns the remainder of the division of the current value of ```i``` by ```2```.

## Using the continue statement in a while loop

When using the continue statement in a while loop, it doesn’t terminate the execution of the loop entirely. Instead, it jumps back to the condition.

The following flowchart show hows the continue statement works in a while loop statement:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/08/JavaScript-while-continue-flowchart.svg">

The following example uses the continue statement in a while loop to display the odd numbers from 1 to 10:

```js
let i = 0;

while (i < 10) {
    i++;
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
```

Output:
- 1
- 3
- 5
- 7
- 9

## Using the continue statement with label example

The ```continue``` statement can include an optional label like this:

```js
continue label;
```

The following nested loop displays the pairs of numbres from 1 to 2

```js
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }
}
```

Output:
- 1 1
- 1 2
- 2 1
- 2 2

The following shows how to use the continue statement with a label:

```js
outer: for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
        if (i + j == 3) continue outer;
        console.log(i, j);
    }
}
```

Output:
- 1 1
- 3 1
- 3 2
- 3 3

# :memo: Summary

- Use the JS ```continue``` statement to skip the current iteration of a loop and continue the next one.
