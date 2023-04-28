# Primitive vs reference values

> When declaring variables, JS allocates them to two types of memory which are stack and heap. Primitive types like strings, numbers, booleans are stored in to the stack while complex types like an object is stored to the heap.

> See the following code to understand:

### Varibles that are stored to the stack

```js

let name = "Jaloliddin";
let age = 19;

```

> These variables are stored in to the stack.

### Variables that are stored to the heap

> See the following example:

```js

let person = {
    firstName: "Jaloliddin",
    lastName: "Zukhriddinov"
};
// person variable declared in the stack and referenced its object to the heap.
// where heap holds following data: { firstName: 'Jaloliddin', lastName: 'Zukhriddinov' }

// In other words, person variable itself declared in the stack and its value which is object consisting of 2 properties are stored in the heap memory.

console.log(person);
// { firstName: 'Jaloliddin', lastName: 'Zukhriddinov' }

let first = person.firstName;
let last  = person.lastName;
// first and last variables took person's properties values from the heap which are stored to the variables first and last, and which are stored to the stack.

console.log(first + " " + last); // Jaloliddin Zukhriddinov

```



### :memo: Summary

> - Javascript has two types of values: primitive values and reference values.
> - You can add, change, or delete properties to a reference value, whereas you cannot do it with a primitive value.
> - Copying a primitive value from one variable to another creates a separate value copy. It means that changing the value in one variable does not affect the other.
> - Copying a reference from one variable to another creates a reference so that two variables refer to the same object. This means that changing the object via one variable reflects in another variable.