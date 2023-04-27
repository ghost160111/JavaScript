## Boolean

> Boolean in programming languages paradigms are the types that has only two possible values which are true and false.

> In JS, to declare boolean variables, see the following example:

```js

let bugFixed = true;
let bugApperead = false;

```

> In addition, JS allows the values of other types to be cast to boolean values. To cast a non-Boolean value to a boolean value, you use the built-in Boolean() function. For example:

```js

let error = "An error occured";
let hasError = Boolean(error);

console.log(hasError); // true

```

> This table is important because some statements automatically cast a non-boolean value to a boolean value using the Boolean() function.

> For example, the if statement executes a block if a condition is true. If you use a non-boolean value, it’ll use the Boolean() function to implicitly cast that value to a boolean value.

```js

let error = "An error occured";

if (error) {
    console.log(error);
}
// An error occured

```

> In this example, since the error variable holds a non-empty string, the if statement evaluates its value to true. Therefore, it executes the console.log(error) to output the error to the console.

> If you change the value of error variable to empty string it will converted as false, because in Boolean table if variable assigned to an empty string, it will be converted to false. See the following example:

```js

let error = "";

if (error) {
    console.log(error);
}

```

### :memo: Summary

> - JS boolean type has two literal values which are true and false
> - Use the Boolean() function to cast non-boolean values to a boolean value.
> - Some statements implicitly cast a non-boolean value into a boolean value.
