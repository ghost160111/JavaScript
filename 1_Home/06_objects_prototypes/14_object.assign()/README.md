# Object.assign() - method

## JavaScript Object.assign() method

The following shows the syntax of the `Object.assign()` method:

The `Object.assign()` copies all enumerable and own properties from the `source` objects to the `target` object. It returns the `target` object.

The `Object.assign()` invokes the getters on the source objects and setters on the target. It assigns properties only, not copying or defining new properties.

## Using JS Object.assign() to clone an object

The following example uses the `Object.assign()` method to clone an object.

```js
let widget = {
    color: "red",
};

let clonedWidget = Object.assign({}, widget);

console.log(clonedWidget);
```

Output:

```
{ color: 'red' }
```

> Note that the `Object.assign()` only carries a shallow clone, not a deep clone.

## Using JS Object.assign() to merge objects

The Object.assign() can merge source objects into a target object which has properties consisting of all the properties of the source objects. For example:

```js
let box = {
    height: 10,
    width: 20,
};

let style = {
    color: "Red",
    borderStyle: "solid",
};

let styleBox = Object.assign({}, box, style);

console.log(box);
console.log(style);
console.log(styleBox);
```

Output:

```
{
    height: 10,
    width: 20,
    color: 'Red',
    borderStyle: 'solid'
}
```

If the source objects have the same property, the property of the later object overwrites the earlier one:

```js
let box = {
    height: 10,
    width: 20,
    color: 'Red'
};

let style = {
    color: 'Blue',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox);
```

Output:

```
{
    height: 10,
    width: 20,
    color: 'Blue',
    borderStyle: 'solid'
}
```

One more example about assignation:

```js
let A = {
    width: 20,
};

let B = {
    width: 40,
};

let C = {
    width: 60,
};

let D = Object.assign({}, A, B, C);

console.log(D);
```

Output:

```
{ width: 60 }
```

# :memo: Summary

- `Object.assign()` assigns enumerable and own properties from a source object to a target object.
- `Object.assign()` can be used to clone an object or merge objects.
