# JavaScript getElementsByName

> __Summary__: in this doc page, you will learn how to use the JavaScript getElementsByName() method to get elements with a given name in a document.

## Introduction to JavaScript getElementsByName() method

Every element on an HTML document may have a name attribute:

```html
<input type="radio" name="language" value="JavaScript">
```

Unlike the id attribute, multiple HTML elements can share the same value of the name attribute like this:

```html
<input type="radio" name="language" value="JavaScript">
<input type="radio" name="language" value="TypeScript">
```

To get all elements with a specified name, you see the getElementsByName() method of the document object:

```js
let elements = document.getElementsByName(name);
```

The getElementsByName() accepts a name which is the value of the name attribute of elements and returns a live NodeList of elements.

The return collection of elements is live. It means that the return elements are automatically updated when elements with the same name are inserted and/or removed from the document.

## JavaScript getElementsByName() example

The following example shows a radio group that consists of radio buttons that have the same name (rate).

When you select a radio button and click the submit button, the page will show the selected value such as Very Poor, Poor, OK, Good, or Very Good:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>JavaScript getElementsByName Demo</title>
</head>

<body>
    <p>Please rate the service:</p>
    <p>
        <label for="very-poor">
            <input type="radio" name="rate" value="Very poor" id="very-poor"> Very poor
        </label>
        <label for="poor">
            <input type="radio" name="rate" value="Poor" id="poor"> Poor
        </label>
        <label for="ok">
            <input type="radio" name="rate" value="OK" id="ok"> OK
        </label>
        <label for="good">
            <input type="radio" name="rate" value="Good"> Good
        </label>
        <label for="very-good">
            <input type="radio" name="rate" value="Very Good" id="very-good"> Very Good
        </label>
    </p>
    <p>
        <button id="btnRate">Submit</button>
    </p>
    <p id="output"></p>
    <script>
        let btn = document.getElementById('btnRate');
        let output = document.getElementById('output');

        btn.addEventListener('click', () => {
            let rates = document.getElementsByName('rate');
            rates.forEach((rate) => {
                if (rate.checked) {
                    output.innerText = `You selected: ${rate.value}`;
                }
            });

        });
    </script>
</body>

</html>
```

How it works:

- First, select the submit button by its id btnRate using the getElementById() method.
- Second, listen to the click event of the submit button.
- Third, get all the radio buttons using the getElementsByName() and show the selected value in the output element.

> Notice that you will learn about events like click later. For now, you just need to focus on the getElementsByName() method.

# :memo: Summary

- The getElementsByName() returns a live NodeList of elements with a specified name.
- The NodeList is an array-like object, not an array object.
