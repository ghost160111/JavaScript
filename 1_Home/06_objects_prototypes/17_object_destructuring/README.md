# Object destructuring

> Summary: in this tutorial, you’ll learn about JavaScript object destructuring which assigns properties of an object to individual variables.

## Introduction to the JavaScript object destructuring assignment

Suppose you have a `person` object with two properties: `firstName` and `lastName`.

```js
let person = {
    firstName: "John",
    lastName: "Marston",
};
```

Prior to ES6, when you want to assign properties of the `person` object to variables, you typically do it like this:

```js
let firstName = person.firstName;
let lastName = person.lastName;
```

ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables:

```js
let { firstName: fName, lastName: lName } = person;
```

In this example, the `firstName` and `lastName` properties are assigned to the `fName` and `lName` variables respectively.

In this syntax:

```js
let { property1: variable1, property2: variable2 } = object;
```

The identifier before the colon (`:`) is the property of the object and the identifier after the colon is the variable.

> Notice that the property name is always on the left whether it's an object literal or object destructuring syntax.

If the variables have the same names as the properties of the object, you can make the code more concise as follows:

```js
let { firstName, lastName } = person;


console.log(firstName); // "John"
console.log(lastName); // "Marston"
```

In this example, we declared two variables firstName and lastName, and assigned the properties of the person object to the variables in the same statement.

It’s possible to separate the declaration and assignment. However, you must surround the variables in parentheses:

```
({firstName, lastName} = person);
```

If you don't use the parentheses, the JS engine will intepret the left-hand side as a block and throw a syntax error.

When you assign a property that does not exist to a variable using the object destructuring, the variable is set to `undefined`. For example:

```js
let { firstName, lastName, middleName } = person;
console.log(middleName); // undefined
```

In this example, the `middleName` property doesn't exist in the `person` object, therefore, the `middleName` variable is `undefined`.

## Setting default values

You can assign a default value to the variable when the property of an object doesn't exist. For example:

```js
let person = {
    firstName: "John",
    lastName: "Marston",
    age: 28,
};

let { firstName, lastName, middleName = "", currentAge: age = 18 } = person;
console.log(middleName); // ""
console.log(age); // 28
```

In this example, we assign an empty string to the middleName variable when the person object doesn’t have the middleName property.

Also, we assign the currentAge property to the age variable with the default value of 18.

However, when the person object does have the middleName property, the assignment works as usual:

```js
let person = {
    firstName: "John",
    lastName: "Marston",
    middleName: "C.",
    currentAge: 28,
};

let { firstName, lastName, middleName = "", currentAge: age = 18 } = person;

console.log(middleName); // "C."
console.log(age); // 28
```

## Destructuring a null object

A function may return an object or null in some situations. For example:

```js
function getPerson() {
    return null;
}
```

And you use the object destructuring assignment:

```js
let { firstName, lastName } = getPerson();

console.log(firstName, lastName);
```

The code will throw a `TypeError`:

```
TypeError: Cannot destructure property 'firstName' of 'getPerson(...)' as it is null.
```

To avoid this, you can use the `OR` operator (`||`) to fallback the `null` object to an empty object:

```js
let { firstName, lastName } = getPerson() || {};
```

Now, no error will occur. And the `firstName` and `lastName` will be `undefined`.

## Nested object destructuring

Assuming that you have an employee object which has a name object as the property:

```js
let employee = {
    id: 1001,
    name: {
        firstName: "John",
        lastName: "Marston",
    },
};
```

The following statement destructures the properties of the nested `name` object into individual variables:

```js
let {
    name: {
        firstName,
        lastName,
    },
} = employee;

console.log(firstName); // John
console.log(lastName); // Marston
```

It's possible to do multiple assignment of a property to multiple variables:

```js
let employee = {
    id: 1001,
    name: {
        firstName: "John",
        lastName: "Marston",
    },
};

let {
    name: {
        firstName,
        lastName,
    },
    name
} = employee;

let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

let {
    name: {
        firstName,
        lastName
    },
    name
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(name); // { firstName: 'John', lastName: 'Doe' }
```

## Destructuring function arguments

Suppose you have a function that displays the person object:

```js
let display = (person) => console.log(`${person.firstName} ${person.lastName}`);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

display(person);
```

It’s possible to destructure the object argument passed into the function like this:

```js
let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

display(person);
```

It looks less verbose especially when you use many properties of the argument object. The technique is often used in React.

# :memo: Summary

- Object destructuring assigns the properties of an object to variables with the same names by default.
