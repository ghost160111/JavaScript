# Comma operator

## Introduction to the JS comma operator

JS uses a comma (```,```) to represent the comma operator. A comma operator takes two expressions, evaluates them from left to right, and returns the value of the right expression.

Here's the syntax of the comma operator:

```js
leftExpression, rightExpression
```

For example:

```js
let result = (10, 10 + 20);
console.log(result); // 30
```

Output:
- 30

In this example, the 10, 10 + 20 returns the value of the right expression, which is 10 + 20. Therefore, the result value is 30.

See the following example:

```js
let x = 10;
let y = (x++, x + 1);

console.log(x, y);
```

Output:
- 11 12

In this example, we increase the value of ```x``` by one (```x++```), add one to ```x``` (```x+1```) and assign ```x``` to ```y```. Therefore, ```x``` is ```11```, and ```y``` is ```12``` after the statement.

However, to make the code more explicit, you can use two statements rather than one statement with a comma operator like this:

```js
let x = 10;
x++;
let y = x + 1;

console.log(x, y);
```

This code is more explicit.

In practice, you might want to use the comma operator inside a for loop to update multiple variables each time through the loop.

The following example uses the comma operator in a for loop to display an array of nine elements as a matrix of 3 rows and three columns:

```js
let board = [1,2,3,4,5,6,7,8,9];

let s = '';
for (let i = 0; j = 1; i < board.length; i++, j++) {
    s += board[i] + " ";
    if (j % 3 == 0) {
        console.log(s);
        s = "";
    }
}
```

Output:
- 1 2 3
- 4 5 6
- 7 8 9

# :memo: Summary

- A comma operator takes two expressions and evaluates them from left to right, and returns the value of the right expression.
- Use the comma operator (```,```) inside a ```for``` loop to update multiple variables once.
- Use two statements rather than the comma operator elsewhere to make the code more explicit and easier to understand.
