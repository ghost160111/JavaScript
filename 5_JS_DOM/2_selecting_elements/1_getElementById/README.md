# JavaScript getElementById

> __Summary__: in this doc page, you will learn how to use the JavaScript getElementById() to select an element by a specified id.

## Introduction to JavaScript getElementById() method

The document.getElementById() method returns an Element object that represents an HTML element with an id that matches a specified string.

If the document has no element with the specified id, the document.getElementById() returns null.

Because the id of an element is unique within an HTML document, the document.getElementById() is a quick way to access an element.

Unlike the querySelector() method, the getElementById() is only available on the document object, not other elements.

The following shows the syntax of the getElementById() method:

```js
const element = document.getElementById(id);
```

In this syntax, the id is a string that represents the id of the element to select. The id is case-sensitive. For example, the 'root' and 'Root' are totally different.

The id is unique within an HTML document. However, HTML is a forgiving language. If the HTML document has multiple elements with the same id, the document.getElementById() method returns the first element it encounters.

## JavaScript getElementById() method example

Suppose you have the following HTML document:

```html
<html>
    <head>
        <title>JavaScript getElementById() Method</title>
    </head>
    <body>
        <p id="message">A paragraph</p>
    </body>
</html>
```

The document contains a `<p>` element that has the id attribute with the value message:

```js
const p = document.getElementById("message");
console.log(p);
```

Output:

```
<p id="message">A paragraph</p>
```

After selecting an element, you can add styles to the element, manipulate its attributes, and traverse to parent and child elements.

# :memo: Summary

- The document.getElementById() returns a DOM element specified by an id or null if no matching element found.
- If multiple elements have the same id, even though it is invalid, the getElementById() returns the first element it encounters.
