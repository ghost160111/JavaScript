# Switch keyword

## Introduction to the JavaScript switch case statement

The ```switch``` statement evaluates an ```expression```, compares its results with ```case``` values, and executes the statement associated with the matching ```case``` value.

The following illustrates the syntax of the ```switch``` statement:

```js

switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    case value3:
        statement3;
        break;
    default:
        defaultStatement;
        break;
}

```

How it works.

- First, evaluate the expression inside the parentheses after the switch keyword.
- Second, compare the result of the expression with the value1, value2, … in the case branches from top to bottom. The switch statement uses the strict comparison (===).
- Third, execute the statement in the case branch where the result of the expression equals the value that follows the case keyword. The break statement exits the switch statement. If you skip the break statement, the code execution falls through the original case branch into the next one. If the result of the expression does not strictly equal to any value, the switch statement will execute the statement in the default branch.

That the ```switch``` statement will stop comparing the ```expression```'s result with the remaining case values as long as it finds a match.

The ```switch``` statement is like the ```if...else if``` statement. But has more readable syntax.

The following flowchart illustrates the ```switch``` statement:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-switch.svg">

In practice, you often use ```switch``` statement to replace complex ```if...else if``` statement to make the code much readable.

Technically, the ```switch``` statement is equivalent to the following ```if...else if``` statement:

```js

if (expression === value1) {
  statement1;
} else if (expression === value2) {
  statement2;
} else if (expression === value3) {
  statement3;
} else {
  statement;
}


```

## JS switch case examples

Let's take some examples of using the JS ```switch``` statement.

## 1. Using switch statement to get the day of the week

The following examples uses the ```switch``` statement to get the day of the week based on a day number:

```js

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Mon";
        break;
    case 2:
        dayName = "Tue";
        break;
    case 3:
        dayName = "Wed";
        break;
    case 4:
        dayName = "Thd";
        break;
    case 5:
        dayName = "Fri";
        break;
    case 6:
        dayName = "Sat";
        break;
    case 7:
        dayName = "Sun";
        break;
    default:
        dayName = "Invalid day";
        break;
}

// Output: Wed

```

How it works.

First, declare the day variable that holds the day number and the day name variable (dayName).

Second, get the day of the week based on the day number using the switch statement. If the day is 1, the day of the week is Sunday. If the day is 2, the day of the week is Monday, and so on.

Third, output the day of the week to the console.

## 2. Using the JS switch statement to get hte day count based of a month

The following example uses the ```switch``` statement to get the day count of a month:

```js

let year = 2016;
let month = 2;   // February month
let dayCount;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        // Leap year
        if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
            dayCount = 29;
        } else {
            dayCount = 28;
        }
        break;
    default:
        dayCount = -1; // Invalid month
        break;
}

console.log(dayCount); // 29

```

In this example, we have four cases:

- If the month is 1, 3, 5, 7, 8, 10, or 12, the number of days in a month is 31.
- If the month is 4, 6, 9, or 11, the number of days in that month is 30.
- If the month is 2, and the year is not the leap year, the number of days is 28. If the year is the leap year, the number of days is 29.
- If the month is not in the valid range (1-12), the default branch executes and sets the dayCount variable to -1, which indicates the invalid month.

# :memo: Summary

- The switch statement evaluates an expression, compare its result with case values, and execute the statement associated with the matching case.
- Use the switch statement to rather than a complex if...else...if statement to make the code more redable.
- The switch statement uses the strict comparison (===) to compare the expression with the case values.

