# Object.is()

The `Object.is()` behaves like the `===` operator with two differences:

- -0 and +0
- NaN

## Negative zero

The `===` operator treats `-0` and `+0` are the same value:

```js
let amount = +0,
    volume = -0;
console.log(volume === amount); // true
```

Output:

```
true
```

However, the `Object.is()` treats +0 and -0 as different values. For examle:

```js
let amount = +0,
    volume = -0;
console.log(Object.is(amount, volume)); // false
```

Output:

```
false
```

## NaN

The `===` operator considers `NaN` and `NaN` are different values. The `NaN` is the only number that does not equal itself. For example:

```js
let quantity = NaN;
console.log(quantity === quantity); // false
```

Output:

```
false
```

However, `Object.is()` treats `NaN` as the same value:

```js
let quantity = NaN;
console.log(Object.is(quantity, quantity));
```

Output:

```
true
```

See the following sameness comparison table for reference:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2020/01/JavaScript-sameness-comparison-table.png">
