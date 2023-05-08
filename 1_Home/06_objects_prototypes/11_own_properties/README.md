# Understanding Own Properties of an Object in JavaScript

In JS, an object is a collection of properties, where each property has a key-value pair

This example creates a new object called `person` using an object initializer:

```js
const person = {
    firstName: "John",
    lastName: "Marston",
};
```

The `person` object has two properties: `firstName` and `lastName`.

JS uses prototypal inheritance. Therefore, a property of an object can be either __own__ or __inherited__.

A property that is defined directly on an object is __own__ while a property that the object receives from its prototype is inherited.

The following creates an object called `employee` that inherits from the `person` object:

```js
const employee = Object.create(person, {
    job: {
        value: "JS Developer",
        enumerable: true,
    }
});
```

The employee object has its own property job, and inherits firstName and lastName properties from its prototype person.

The hasOwnProperty() method returns true if a property is own. For example:

```js
console.log(employee.hasOwnProperty('job')); // => true
console.log(employee.hasOwnProperty('firstName')); // => false
console.log(employee.hasOwnProperty('lastName')); // => false
console.log(employee.hasOwnProperty('ssn')); // => false
```

# :memo: Summary

- A property is directly defined on an object is an own property.
- The `obj.hasOwnProperty()` method determines whether or not a property is own.
