## Array


### Creating Array in JS

> JS provides you with two ways to create an array. The first one is to use the Array constructor as follows:

```js

let scores = new Array();


```

> The scores array is empty, which does hold any elements.

> If you know the number of elements that the array will hold, you can create an with an initial size as shown in the following example:

```js

let scores = new Array(10);

scores[0] = 1;
scores[1] = 2;
scores[2] = 3;

console.log(scores); // [ 1, 2, 3, <7 empty items> ]

```

> If you want to declare array and initialize it, you can create it through the following example:

```js

let scores = new Array(10,5,3,8);

console.log(scores); // [ 10, 5, 3, 8 ]

```

> :memo: Note that if you use the Array() constructor to create an array and pass a number into it you are creating an array with initial size.

> However, when pass a value of another type like string into the Array() constructor, you create an array with an element of that value. For example:

```js

let athletes = new Array(5); // creates an array with initial size of 3
let scores = new Array(1,2,3); // creates an array with three numbers 1 2 3
let signs = new Array("Red"); // creates an array with one element "Red"

```

> In practice, you will rarely use the constructor Array(), or you will never use that. Instead there is much preferable way to declare and initialize an array in JS. See the following example:

```js

let scores = [1,2,3]; // creates an array with thress numbers 1 2 3
let colors = [ "Red", "Green" ]; // creates an array with two string values "Red" and "Green"

```

### Accessing JS array elements

> See the following example:

```js

let scores = [1,2,3];
console.log(scores[0]); // 1

scores[0] = 2;
console.log(scores); // [ 1, 2, 3 ]

let scoresLength = score.length;
console.log(scoresLength); // 3

```

> From the code above, as you can see, you can have an access to the array through scores[0] syntax, and also change the values of them.


### Adding elements to the end of an array

> To add an element to the end of array, you use the push() method:

```js

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];

seas.push('Red Sea'); // adding an element to the end of an array seas
seas.push('Aral Sea'); // addign an element to the end of an array seas after 'Red Sea' element.

console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea', 'Aral Sea' ]

```

### Adding an element to the beginning of an array

> To add element to the beginning of an array, you use the unshift() method:

```js

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];

seas.unshift('Red Sea');
seas.unshift('East Sea');

console.log(seas); // [ 'East Sea', 'Red Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]

```

### Removing an element from the end of an array

> To remove an element from the end of an array, you use the pop() method:

```js

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const lastElement = seas.pop();

console.log(seas); // Baltic Sea

```

### Removing an element from the beginning of an array

> To remove an element from the beginning of an array, you use the shift() method:

```js

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const firstElement = seas.shift();

console.log(firstElement); // Black Sea

```

### Finding an indx of an element in the array

> To find the index of an element, you use the indexOf() method:

```js

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
let index = seas.indexOf("North Sea");

console.log(index); // 2

```

### Check if a value is an array.

> To check if a value is an array, you use Array.isArray() method:

```js

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];

console.log(Array.isArray(seas)); // true

```

### Summary

> - In JS, an array is an order list of values. Each value is called an element specified by an index.
> - An array can hold values of mixed types.
> - JS arrays are dynamic, which means that they grow or shrink as needed.



