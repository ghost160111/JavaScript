# While loop

## Introduction to the JavaScript while loop statement

The JavaScript while statement creates a loop that executes a block as long as a condition evaluates to true.

The following illustrates the syntax of the while statement:

```js

while (condition) {
    // statement
}

```

The while statement evaluates the expression before each iteration of the loop.

If the expression evaluates to true, the while statement executes the statement. Otherwise, the while loop exits.

Because the while loop evaluates the expression before each iteration, it is known as a pretest loop.

If the expression evaluates to false before the loop enters, the while loop will never execute.

The following flowchart illustrates the while loop statement:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-while.svg">

> Note that if you want to execute the statement a least once and check the condition after each iteration, you should use the do…while statement.

## JS while loop example

The following example uses the ```while``` statement to output the odd numbers between 1 and 10 to the console:

```js

let count = 1;

while (count < 10) {
    console.log(count);
    count += 2;
}
/* Output:
1
3
5
7
9
*/

```

How the script works?

- First, declare and initialize the count variable to 1.
- Second, execute the statement inside the loop if the count variable is less than 10. In each iteration, ouput the count to the console and increase the count by 2.
- Third, after 5 iterations, the count is 11. Therefore, the condition count < 10 is false, the loop exits.

# :memo: Summary

- Use a ```while``` loop statement to create a loop that executes a block as long as a ```condition``` to ```true```.
