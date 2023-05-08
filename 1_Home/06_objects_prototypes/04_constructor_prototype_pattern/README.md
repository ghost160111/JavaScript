# Constructor prototype pattern

> Summary: in this documentation page, you'll learn how to use the JS constuctor/Prototype pattern to define a custom type in ES5

## Introduction to the JS Constructor / Prototype pattern

The combination of the constructor and prototype patterns is the most common way to define custome types in ES5. In this pattern:

- The constructor pattern defines the object properties.
- The prototype pattern defines the object methods.

By using this pattern, all objects of the custom type share the methods defined in the prototype. Also, each object jas its own properties.

> This constuctor/prototype pattern takes the best parts of both constructor and prototype patterns.

## JS Constructor / Prototype example

Suppose that you want to define a custom type called ```Person``` that has:

- Two properties ```firstName``` and ```lastName```
- One method ```getFullName()```

First, use the constructor function to initialize the properties:

```js
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
```

Behind the scene, the JS engine defines a ```Person``` function denoted by the circle and an anonymous object denoted by the square.

The ```Person``` function has the ```prototype``` property that references an anonymous object. The anonymous object has a ```constructor``` property that references the ```Person``` function:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-Person-prototype.svg">

Second, define the ```getFullName()``` method in the ```prototype``` object of the ```Person``` function:

```js
Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}
```

JS defines the ```getFullName()``` method on the ```Person.prototype``` object like this:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-constructor-pattern.svg">

Third, create multiple instances of the `Person` type:
