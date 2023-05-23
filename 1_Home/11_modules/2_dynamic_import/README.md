# Dynamic Import

> __Summary__: in this doc page, you'll learn how to dynamically import modules by using the function-like `import()` in ES2020.

## Introduction to the JS import()

ES6 introduced the module concept that allows you to develop modular JavaScript code. Suppose you have the following simple HTML document that has one button:

```html
<!DOCTYPE html>
<html>

<head>
    <title>Module Dynamic Import</title>
</head>
<body>
    <button id="show">Show Dialog</button>
    <script type="module" src="js/app.js"></script>
</body>
</html>
```

When users click the button, you want to show a dialog. To make the code more organized, you develop a module called dialog.js:

```js
export function show(message) {
    alert(message);
}
```

And use the show() function in the app.js:

```js
import { show } from './dialog.js';

let btn = document.querySelector("#show");

btn.addEventListener("click", function() {
    show("Hi");
});
```

Prior to ES2020, it was not possible to dynamically load the dialog.js module when needed. The following will cause an error:

```js
let btn = document.querySelector('#show');

btn.addEventListener('click', function () {
    import {show} from './dialog.js';
    show('Hi');
});
```

The above code attempts to load the dialog.js module only when the button is clicked.

ES2020 introduced the dynamic import of the module via the function-like import() with the following syntax:

```js
import(moduleSpecifier);
```

The import() allows you to dynamically import a module when needed. Here is how the import() works:

- The import() accepts a module specifier (moduleSpecifier) that has the same format as the module specifier used for the import statement. In addition, the moduleSpecifier can be an expression that evaluates to a string.
- The import() returns a Promise that will be fulfilled once the module is loaded completely.

To load the dialog.js dynamically, you can use the import() as follows:

```js
let btn = document.querySelector('#show');

btn.addEventListener('click', function() {
    import('./dialog.js')
        .then(( dialog ) => {
            dialog.show();
        })
        .catch( error => {
            // handle error here
        });
});
```

Since the import() returns a Promise, you can use the async/await in the app.js module like this:

```js
let btn = document.querySelector('#show');

btn.addEventListener('click', function () {
    (async () => {
        try {
            let dialog = await import('./dialog.js');
            dialog.show('Hi')
        } catch (error) {
            console.log(error);
        }
    })();

});
```

## Some practical use cases of JavaScript import()

The import() has the following practical use cases:

## 1. Loading module on demand

Some functionality may not need to be available when applications start. To decrease the loading time, you can place such functionality in modules and use the import() to load them on demand like this:

```js
function eventHandler() {
    import('./module1.js')
        .then((ns) => {
            // use the module 
            ns.func();
        })
        .catch((error) => {
            // handle error
        });
}
```

## 2. Loading modules based on conditions

When placing the import() inside the conditional statement such as if-else, you can load modules based on a specific condition. The following example loads a module that targets a specific platform:

```js
if( isSpecificPlatform() ) {
    import('./platform.js')
    .then((ns) => {
        ns=>f();
    });
}
```

## 3. Computed module specifiers

The module specifier is an expression that allows you to decide which module to load at runtime.

For example, you can load a module based on the user’s locale to show the message in the user’s specific language:

```js
let lang = `message_${getUserLocale()}.js`;

import(lang)
    .then(...);
```

## More on the JS import()

## Using object destructuring

If a module has multiple exports, you can use the object destructuring to receive the exporting objects. Suppose the dialog.js has two functions:

```js
export function show(message) {
    alert(message);
}

export function hide(message) {
    console.log('Hide it...');
}
```

In the app.js, you can use the object destructuring as follows:

```js
let btn = document.querySelector("#show");

btn.addEventListener("click", function() {
    (async () => {
        try {
            // use object destructuring
            let {
                show,
                hide
            } = await import("./dialog.js");

            // use the functions
            show("Hi");
            hide();
        } catch(err) {
            console.log(err);
        }
    })();
});
```

## Dynamically loading multiple modules

To load multiple modules dynamically, you can use the Promise.all() method:

```js
Promise.all([
    import(module1),
    import(module2),
     ...])
    .then(([module1, module2, module3]) => {
        // use the modules
    });
```

## Accessing the default export

If a module has a default export, you can access it using the default keyword. For example:

```js
import(moduleSpecifier)
    .then((module) => {
        // access the default export
        console.log(module.default);
    });
```

# :memo: Summary

- Use JavaScript import() to dynamically load a module. The import() returns a Promise that will be fulfilled once the module is loaded completely.
- Use the async / await to handle the result of the import().
- Use the Promise.all() method to load multiple modules at once.
- Use the object destructuring to assign variables to the exporting objects of a module.
- Use the default keyword to access the default export.
