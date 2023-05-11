# Static Methods

> __Summary__: in this doc page, you'll learn about the JavaScript static methods and how to use them effectively.

## Introduction to the JavaScript static methods

Let's talk about static methods a little bit. So, the static member can not only be a static methods but also static fields. Static members including static methods are placed directly in a heap memory, and there is no address in stack memory. Specifically, static members and fields can be bound using this syntax:

```js
ClassName.staticField;
ClassName.staticMethod();
```

By definition, static methods are bound to a class, not the instances of that class. Therefore, static methods are useful for defining helper or utility methods.

To define a static method before ES6, you add it directly to the constructor of the class. For example, suppose you have a Person type as follows:d

```js
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
};
```

The following adds a static method called `createAnonymous()` to the `Person` type:

```js
Person.createAnonymous = function(gender) {
    let name = gender == "male" ? "John Marston" : "Arthur Morgah";
    return new Person(name);
};
```

The `createAnonymous()` method considered a static method because it doesn't depend on any instance of the `Person` type for its property values.

To call the `createAnonymous()` method, you use the `Person` type instead of its instances.

```js
var anonymous = Person.createAnonymous();
```

## JavaScript static methods in ES6

In Es6, you define static methods using the `static` keyword. The following example defines a static method called `createAnonymous()` for the `Person` class:

```js
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static createAnonymous(gender) {
        let name = gender == "male" ? "John Marston" : "Jane Morgah";
        return new Person(name);
    }
}
```

To invoke the static method, you use the following syntax:

```js
let anonymous = Person.createAnonymous("male");
```

If you attempt to call the static method from an instance of the class, you'll get an error. For example:

```js
let person = new Person("John Marston");
let anonymous = person.createAnonymous("male");
```

Error:

```
TypeError: person.createAnonymous is not a function
```

## Calling a static method from the class constructor or an instance method

To call static method from a class constructor or an instance method, you use the class name, followed by the `.` and the static method:

```js
ClassName.staticMethodName();
```

Alternatively, you use the following syntax:

```js
this.constructor.staticMethodName();
```

# :memo: Summary

- JavaScript static methods are shared among instances of a class. Therefore, they are bound to the class.
- Call the static methods via the class name, not the instances of that class.
- Use the `ClassName.staticMethodName()` or `this.constructor.staticMethodName()` to call a static method in a class constructor or an instance method.
