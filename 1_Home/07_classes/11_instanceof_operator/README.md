# JavaScript instanceof operator

> __Summary__: in this doc page, you'learn how to use the JS `instanceof` operator to determine if a constructor's prototype appears in the prototype chain of an object.

## Introduction to the JavaScript instanceof operator

The `instanceof` operator returns `true` if a prototype of a constructor (`constructor.prototype`) appears in the prototype chain of an `object`.

The following shows the syntax of the `instanceof` operator:

```js
object instanceof constructor
```

In this syntax:

- `object` is the object to test.
- `constructor` is a function to test against

## JavaScript instanceof operator example

The following example defines the `Person` type and uses the `instanceof` operator to check if an objects is an instance of that type:

```js
function Person(name) {
    this.name = name;
}

let p1 = new Person("John");

console.log(p1 instanceof Person); // true
```

How it works.

First, define a `Person` type using the constructor function pattern:

```js
function Person(name) {
    this.name = name;
}
```

Second, create a new object of the `Person` type:

```js
let p1 = new Person("John Doe");
```

Third, check if the `p1` is an instance of the `Person` type:

```js
console.log(p1 instanceof Person); // true
```

It returns true because the Person.prototype appears on the prototype chain of the p1 object. The prototype chain of the p1 is the link between p1, Person.prototype, and Object.prototype:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-instanceof.svg">

The following also returns true because the Object.prototype appears on the prototype chain of the p1 object:

```js
console.log(p1 instanceof Object); // true
```

## ES6 class and instanceof operator

The following example defines the Person class and uses the instanceof operator to check if an object is an instance of the class:

```js
class Person {
    constructor(name) {
        this.name = name;
    }
}

let p1 = new Person("John");

console.log(p1 instanceof Person); // true
console.log(p1 instanceof Object); // true
```

How it works.

First, define the Person class:

```js
class Person {
    constructor(name) {
        this.name = name;
    }
}
```

Second, create a new instance of the `Person` class:

```js
let p1 = new Person("John");
```

Third, check if `p1` is an instance of the `Person` class:

```js
console.log(p1 instanceof Person); // true
```

## The instanceof operator and inheritance

The following example defines the `Employee` class that extends the `Person` class:

```js
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let e1 = new Employee();

console.log(e1 instanceof Employee); // true
console.log(e1 instanceof Person);   // true
console.log(e1 instanceof Object);   // true
```

Since e1 is an instance of the Employee class, it’s also an instance of the Person and Object classes (base classes).

## Symbol.hasInstance

In ES6, the instanceof operator uses the Symbol.hasInstance function to check the relationship. The Symbol.hasInstance() accepts an object and returns true if a type has that object as an instance. For example:

```js
class Person {
    constructor(name) {
        this.name = name;
    }
}

let p1 = new Person('John');

console.log(Person[Symbol.hasInstance](p1)); // true
```

Since the Symbol.hasInstance is defined on the Function prototype, it’s automatically available by default in all functions and classes

And you can redefine the Symbol.hasInstance on a subclass as a static method. For example:

```js
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Android extends Person {
    static [Symbol.hasInstance]() {
        return false;
    }
}

let a1 = new Android("Sonny");

console.log(a1 instanceof Android); // false
console.log(a1 instanceof Person);  // false
```

# :memo: Summary

- Use the `instaceof` operator to check if the `constructor.prototype` in object's prototype chain.
