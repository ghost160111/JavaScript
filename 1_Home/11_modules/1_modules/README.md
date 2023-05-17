# Modules

> __Summary__: in this tutorial, you will learn about ES6 modules and how to export variables, functions, and classes from a module, and reuse them in other modules.

An ES6 module is a JavaScript file that executes in strict mode only. It means that any variables or functions declared in the module won’t be added automatically to the global scope.

## Executing modules on web browsers

First, create a new file called message.js and add the following code:

```js
export let message = "ES6 Modules";
```

The message.js is a module in ES6 that contains the message variable. The export statement exposes the message variable to other modules.

Second, create another new file named app.js that uses the message.js module. The app.js module creates a new heading 1 (h1) element and attaches it to an HTML page. The import statement imports the message variable from the message.js module.

```js
import { message } from "./message.js";

const h1 = document.createElement("h1");
h1.textContent = message;

document.body.appendChild(h1);
```

Third, create a new HTML page that uses the `app.js` module:

```html
<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <title>ES6 - Modules</title>
</head>
<body>
    <script type="module" src="./app.js"></script>
</body>
```

Note that we used the type="module" in the `<script>` tag to load the app.js module. If you view the page on a web browser, you will see the following page:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2019/12/es6-module.png">

Let's examine the export and import statements in more detail

## Exporting

To export a variable, a function, or a class, you place the export keyword in front of it as follows:

```js
// __log__.js file
let message = "ES6 Modules";

function alertMessage() {
    return message;
}

function setMessage(msg) {
    return msg;
}

class Logger {

}

export { message, alertMessage, setMessage, Logger };
```








