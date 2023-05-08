# Object.entries() - method

## Introduction to JS Object.entries() method

ES2017 introduces the Object.entries() method that accepts an object and returns its own enumerable string-keyed property [key, value] pairs of the object.

Here is the syntax of the Object.entries() method:

```js
Object.entries();
```

See the following:

```js
const ssn = Symbol('ssn');
const person = {
    firstName: "John",
    lastName: "Marston",
    age: 25,
    [ssn]: "123-345-789",
};

const kv = Object.entries(person);

console.log(kv);
```

Output:

```
[
    ['firstName', 'John'],
    ['lastName', 'Marston'],
    ['age', 25]
]
```

In this example:

- The firstName, lastName, and age are own enumerable string-keyed property of the person object, therefore, they are included in the result.
- The ssn is not a string-key property of the person object, so it is not included in the result.

# :memo: Summary

## Object.entries() vs. for...in

The main difference between the Object.entries() and the for...in loop is that the for...in loop also enumerates object properties in the prototype chain.
