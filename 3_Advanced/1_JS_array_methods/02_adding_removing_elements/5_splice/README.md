# JavaScript Array splice: Delete, Insert, and Replace

> __Summary__: this tutorial shows you how to use the JavaScript Array’s splice() method to delete existing elements, insert new elements, and replace elements in an array.

JavaScript Array type provides a very powerful splice() method that allows you to insert new elements into the middle of an array. However, you can use this method to delete and replace existing elements as well.

## Deleting elements using JavaScript Array’s splice() method

To delete elements in an array, you pass two arguments into the splice() method as follows:

```js
Array.splice(position,num);
```

The position specifies the position of the first item to delete and the num argument determines the number of elements to delete.

The splice() method changes the original array and returns an array that contains the deleted elements.

Let’s take a look at the following example.

Suppose, you have an array scores that contains five numbers from 1 to 5.

```js
let scores = [1,2,3,4,5];
```

The following statement deletes three elements of the scores array starting from the first element.

```js
let deletedScores = scores.splice(0, 3);
```

The scores array now contains two elements.

```js
console.log(scores); // [4, 5]
```

And the deletedScores array contains three elements.

```js
console.log(deletedScores); // [1, 2, 3]
```

The following figure illustrates the scores.splice(0,3) method call above.

<img src="https://www.javascripttutorial.net/wp-content/uploads/2016/08/JavaScript-Array-Splice-Delete-Example.png">

## Inserting elements using JavaScript Array splice() method

You can insert one or more elements into an array by passing three or more arguments to the splice() method with the second argument is zero.

Consider the following syntax:

```js
Array.prototype.splice(position,0,new_element_1,new_element_2,new_element_3,...);
```

In this syntax:

- The position specifies the starting position in the array that the new elements will be inserted.
- The second argument is zero (0) that instructs the splice() method to not delete any array elements.
- The third argument, fourth argument, and so on are the new elements that are inserted into the array.

Note that the splice() method actually changes the original array. Also, the splice() method does not remove any elements, therefore, it returns an empty array. For example:

Assuming that you have an array named colors with three strings.

```js
let colors = ['red', 'green', 'blue'];
```

The following statement inserts one element after the second element.

```js
colors.splice(2, 0, "purple");
```

The colors array now has four elements with the new element inserted in the second position.

```js
console.log(colors); // ["red", "green", "purple", "blue"]
```

The following figure demostrates the method call above.

<img src="https://www.javascripttutorial.net/wp-content/uploads/2016/08/JavaScript-Array-Splice-Insert-Example.png">

You can insert more than one element by passing the fourth argument, the fifth argument, and so on to the splice() method as in the following example.

```js
colors.splice(1, 0, "yellow", 'pink');
console.log(colors);
// ["red", "yellow", "pink", "green", "purple", "blue"]
```

## Replacing element using JavaScript Array splice() method

The splice() method allows you to insert new elements into an array while deleting existing elements simultaneously.

To do this, you pass at least three arguments with the second one that specifies the number of items to delete and the third one that indicates the elements to insert.

Note that the number of elements to delete needs not to be the same as the number of elements to insert.

Suppose you have an array of programming languages with four elements as follows:

```js
let languages = ["C", "C++", "Java", "JavaScript"];
```

The following statement replaces the second element by a new one.

```js
languages.splice(1, 1, "Python");
```

The languages array now still has four elements with the new second argument is 'Python' instead of 'C++'.

```js
console.log(languaegs);
// ["C", "Python", "Java", "JavaScript"]
```

The following figure illustrates the method call above.

<img src="https://www.javascripttutorial.net/wp-content/uploads/2016/08/JavaScript-Array-Splice-Replace-Example.png">

You can replace one element with multiple elements by passing more arguments into the splice() method as follows:

```js
languages.splice(2, 1, "C#", "Swift", "Go");
```

The statement deletes one element from the second element i.e., Java and inserts three new elements into the languages array. The result is as follows.

```js
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
```

# :memo: Summary

- In this tutorial, you have learnt how to use the JS Array splice() method to delete existing elements, insert new elements, and replace elements in the array.
