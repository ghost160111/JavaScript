# Object.values() method

Prior to ES2017, you use a `for...in` loop and `Object.hasOwnProperty()` method to access values of own enumerable properties of an object. For example:

```js
const person = {
    firstName: "John",
    lastName: "Marston",
    age: 25,
};

for (const key in person) {
    if (person.hasOwnProperties(key)) {
        const value = person[key];
        console.log(value);
    }
}
```

Output:

```
John
Marston
25
```

ES2017 introduces a new method called Object.values() that allows you to return an array of own enumerable property’s values of an object.

The following shows the syntax of the Object.values():

```js
Object.values(obj);
```

The `Object.values()` accepts an object and returns its own enumerable property's values as an array. See the following example:

```js
const person = {
    firstName: "John",
    lastName: "Marston",
    age: 25,
};

const profile = Object.values(person);

console.log(profile);
```

Output:

```
[ 'John', 'Doe', 25 ]
```

# :memo: Summary

## Object.values() vs. for...in

The `Object.values()` returns own enumerable properties while `for...in` loop iterates properties in the prototype chain.

Technically, if you use the `for...in` loop with the `Object.hasOwnProperty()` method, you will get the same set of values as the `Object.values()`.
