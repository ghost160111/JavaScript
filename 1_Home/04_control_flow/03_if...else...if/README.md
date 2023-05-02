# If...else if statements

## Introduction to the JS if...else if statement

The ```if``` an ```if...else``` statements accept a single condition and execute the ```if``` or ```else``` block accordingly based on the condition.

To check multiple conditions and execute the corresponding block if a condition is ```true```, you use ```if...else if statement like this:

```js

if (condition1) {
    // ...
} else if (condition2) {
    // ...
} else if (condition3) {
    // ...
} else {
    // ...
}

```

In this syntax, the if...else...if statement has three conditions. In theory, you can have as many conditions as you want to, where each else...if branch has a condition.

The if...else...if statement checks the conditions from top to bottom and executes the corresponding block if the condition is true.

The if...else...if statement stops evaluating the remaining conditions as soon as a condition is true. For example, if the condition2 is true, the if...else...if statement won’t evaluate the condition3.

If all the conditions are false, the if...else...if statement executes the block in the else branch.

The following flowchart illustrates how the if...else...if statement works:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-if-else-if.svg">

## JS if...else if examples

Let's take some examples of using the ```if...else if``` statement.

## 1. A simple JS if...else if statement example

The following example uses the ```if...else if``` statement to get the month name from a month number:

```js

let month = 6;
let monthName;

let month = 6;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}

console.log(monthName); // Jun

```

In this example, we compare the month with 12 numbers from 1 to 12 and assign the corresponding month name to the monthName variable.

Since the month is 6, the expression month==6 evaluates to true. Therefore, the if...else...if statement assigns the literal string 'Jun' to the monthName variable. Therefore, you see Jun in the console.

If you change the month to a number that is not between 1 and 12, you’ll see the Invalid Month in the console because the else clause will execute.

## 2. Using JavaScript if…else…if statement to calculate the body mass index

The following example calculates a body mass index (BMI) of a person. It uses the if...else...if statement to determine the weight status based on the BMI:

```js

let weight = 70;   // kg
let height = 1.72; // meter

// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
    weightStatus = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    weightStatus = "Healthy weight";
} else if (bmi >= 25 && bmi <= 29.9) {
    weightStatus = "Overweight";
} else {
    weightStatus = "Obesity";
}

console.log(weightStatus); // Healthy Weight

```

How it works?

- First, declare two variables that hold the weight in kilogram and height in meter. In a realworld application, you’ll get these values from a web form.
- Second, calculate the body mass index by dividing the weight by the square of the height.
- Third, determine the weight status based on the BMI using the if...else..if statement.
- Finally, output the weight status to the console.

# :memo: Summary

- Use the JS ```if...else if``` statement to check multiple conditions and execute the corresponding block if a condition is ```true```.
