# JS Array length

> __Summary__: in this doc page, you’ll learn about the JavaScript Array length property and how to handle it correctly.

## What exactly is the JavaScript Array length property

By definition, the length property of an array is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

The value of the length is 232. It means that an array can hold up to 4294967296 (232) elements.

The length property behaves differently depending on the array types including dense and sparse.

## 1. Dense arrays

A dense array is an array where its elements have contiguous indexes starting at zero.

For dense arrays, you can use the length property to get the number of elements in the array. For example:

```js
let colors = ["red", "green", "blue"];
console.log(colors.length); // 3
```

In this example, the length property returns three, which is the same as the number of elements in the colors array.

The following adds one more element to the colors array:

```js
colors.push('yellow');
console.log(colors.length); // 4
```

Now, the length property of the colors array is four.

When you empty the colors array, its length is zero:

```js
colors = [];
console.log(colors.length); // 0
```

## 2. Sparse arrays

A sparse array is an array whose elements don’t have contiguous indexes starting at zero.

For example, the [10,, 20, 30] is a sparse array because the indexes of its elements are 0, 2, and 3.

In a sparse array, the length property doesn’t indicate the actual number of elements. It’s a number that is greater than the highest index. For example:

```js
let numbers = [10, , 20, 30];
console.log(numbers.length); // 4
```

In this example, the number of elements in the numbers array is three: 10, 20, and 30. The highest index is three. Therefore, the length property returns four.

The following adds an element to the numbers array at the index 10:

```js
numbers[10] = 100;
console.log(numbers.length); // 11
```

In this example, the length property returns 11

## Modifying JS array length property

JavaScript allows you to change the value of the array length property. By changing the value of the length, you can remove elements from the array or make the array sparse.

## 1. Empty an array

If you set length to zero, the array will be empty:

```js
const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 0;

console.log(fruits); // []
```

## 2. Remove elements

If you set the length property of an array to a value that is lower than the highest index, all the elements whose index is greater than or equal to the new length are removed.

The following example changes the length property of the fruits array to two, which removes the third element from the array:

```js
const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 2;

console.log(fruits); // ["Apple", "Orange"]
```

## 3. Make array sparse

If you set the length property of an array to a value that is higher than the highest index, the array will be spare. For example:

```js
const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 5;

console.log(fruits); // [ 'Apple', 'Orange', 'Strawberry', <2 empty items> ]
```

# :memo: Summary

- The length property of an array is an unsigned, 32-bit integer that is always numerically greater than the highest index of the array.
- The length returns the number of elements that a dense array has.
- For the spare array, the length doesn’t reflect the number of actual elements in the array.
- Modifying the length property can remove elements from the array or make the array spare.
