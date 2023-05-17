# Promises

> __Summary__: in this doc page, you'll learn about JS promises and how to use them effectively.

## Why JS promises

The following example defines a function `getUser()` that returns a list of user objects:

```js
function getUsers() {
    return [
        { username: "John", email: "john@test.com" },
        { username: "Jane", email: "jane@test.com" },
    ];
}
```

Each user object has two properties username and email.

To find a user by username from the user list returned by the getUsers() function, you can use the findUser() function as follows:

```js
function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user.username === username);
    return user;
}
```

In the `findUser()` function:

- First, get a user array by calling the getUsers() function
- Second, find the user with a specific username by using the find() method of the Array object.
- Third, return the matched user.

The following shows the complete code for finding a user with the username 'john':

```js
function getUsers() {
    return [
        { username: "John", email: "john@test.com" },
        { username: "Jane", email: "jane@test.com" },
    ];
}

function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user.username === username);
    return user;
}

console.log(findUser("john"));
```

Output:

```
{ username: "John", email: "john@test.com" }
```

The code in the findUser() function is synchronous and blocking. The findUser() function executes the getUsers() function to get a user array, calls the find() method on the users array to search for a user with a specific username, and returns the matched user.

In practice, the getUsers() function may access a database or call an API to get the user list. Therefore, the getUsers() function will have a delay.

To simulate the delay, you can use the setTimeout() function. For example:

```js
function getUsers() {
    let users = [];

    // delay 1 second (1000ms)
    setTimeout(() => {
        users = [
            { username: "John", email: "john@test.com" },
            { username: "Jane", email: "jane@test.com" },
        ];
    }, 1000);

    return users;
}
```

How it works.

- First, define an array `users` and initialize its value with an empty array.
- Second, assign an array of the users to the `users` variable inside the callback of the `setTimeout()` function.
- Third, return `users` array.

The `getUsers()` won't work properly and always returns an empty array. Therefore, the `findUser()` function won't work as expected:

```js
function getUsers() {
    let users = [];

    setTimeout(() => {
        users = [
            { username: "John", email: "john@test.com" },
            { username: "Jane", email: "jane@test.com" },
        ];
    }, 1000);

    return users;
}

function findUser(username) {
    const users = getUsers(); // A
    const user = users.find((user) => user.username === username); // B
    return user;
}

console.log(findUser("John"));
```

Output:

```
undefined
```

Because the `getUsers()` returns an empty array, the `users` array is empty (line A). When calling the `find()` method on the `users` array, the method returns `undefined` (line B).

The challenge is how to access the `users` returned from the `getUsers()` function after one second. One classical approach is to use the callback.

## Using callbacks to deal with an asynchronous operation

The following example adds a callback argument to the `getUsers()` and `findUser()` functions:

```js
function getUsers(callback) {
    setTimeout(() => {
        callback([
            { username: "John", email: "john@test.com" },
            { username: "Jane", email: "jane@test.com" },
        ]);
    }, 1000);
}

function findUser(username, callback) {
    getUsers((users) => {
        const user = users.find((user) => user.username === username);
        callback(user);
    });
}

findUser("John", console.log);
```

Output:

```
{ username: 'john', email: 'john@test.com' }
```

In this example, the getUsers() function accepts a callback function as an argument and invokes it with the users array inside the setTimeout() function. Also, the findUser() function accepts a callback function that processes the matched user.

The callback approach works very well. However, it makes the code more difficult to follow. Also, it adds complexity to the functions with callback arguments.

If the number of functions grows, you may end up with the callback hell problem. To resolve this, JavaScript comes up with the concept of promises.

## Understanding JavaScript Promises

By definition, a promise is an object that encapsulates the result of an asynchronous operation.

A promise object has a state that can be one of the following:

- Pending
- Fulfilled with a value
- Rejected for a reason

In the beginning, the state of a promise is pending, indicating that the asynchronous operation is in progress. Depending on the result of the asynchronous operation, the state changes to either fulfilled or rejected.

The fulfilled state indicates that the asynchronous operation was completed successfully:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise-Fulfilled.svg">

The rejected state indicates that the asynchronous operation failed.

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise-Rejected.svg">

## Creating promise

To create a promise object, you use the `Promise()` constructor:

```js
const promise = new Promise((resolve, reject) => {
    // contain an operation
    // ...

    // return the state
    if (success) {
        resolve(error);
    } else {
        reject(error);
    }
});
```

The promise constructor accepts a callback function that typically performs an asynchronous operation. This function is often referred to as an executor.

In turn, the executor accepts two callbacks functions with the name `resolve` and `reject`.

> Note that the callback functions passed into the executor are `resolve` and `reject` by convention only.

If the asynchronous operation completes successfully, the executor will call the `resolve()` function to change the state of the promise from pending to fulfilled with a value.

In case of an error, the executor will call the reject() function to change the state of the promise from pending to rejected with the error reason.

Once a promise reaches either fulfilled or rejected state, it stays in that state and can’t go to another state.

In other words, a promise cannot go from the fulfilled state to the rejected state and vice versa. Also, it cannot go back from the fulfilled or rejected state to the pending state.

Once a new Promise object is created, its state is pending. If a promise reaches fulfilled or rejected state, it is resolved.

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promises.svg">

> Note that you will rarely create promise objects in practice. Instead, you will consume promises provided libraries.

## Consuming a Promise: then, catch, finally

## 1. The then() method

To get the value of a promise when it's fulfilled, you call the `then()` method of the promise object. The following shows the syntax of the `then()` method:

```js
promise.then(onFulfilled,onRejected);
```

The `then()` method accepts two callback functions: `onFulfilled` and `onRejected`.

The `then()` method calls the `onFulfilled()` with a value, if the promise is fulfilled or the `onRejected()` with an error if the promise is rejected.

> Note that both `onFilfilled` and `onRejected` arguments are optional.

The following example shows how to use `then()` method of `Promise` object returned by the `getUsers()` function:

```js
function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { username: "John", email: "john@test.com" },
                { username: "Jane", email: "jane@test.com" },
            ]);
        }, 1000);
    });
}

function onFulfilled(users) {
    console.log(users);
}

const promise = getUsers();
promise.then(onFulfilled);
```

Output:

```
[
    { username: "John", email: "john@test.com" },
    { username: "Jane", email: "jane@test.com" },
]
```

In this example:

- First, define the `onFulfilled()` function to be called when the promise is fulfilled.
- Second, call the `getUsers()` function to get a promise object.
- Third, call the `then()` method of the promise object and output the user list to the console.

To make the code more consice, you can use an arrow function as the argument of the `then()` method like this:

```js
function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { username: "John", email: "john@test.com" },
                { username: "Jane", email: "jane@test.com" },
            ]);
        }, 1000);
    });
}

const promise = getUsers();

promise.then((users) => {
    console.log(users);
});
```

Because the `getUsers()` function returns a promise object, you can chain the function call with the `then()` method like this:

```js
// getUsers() function
// ...

getUsers().then((users) => {
    console.log(users);
});
```

In this example, the `getUsers()` function always succeeds. To simulate the error, we can use a `success` flag like the following:

```js
let success = true;

function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([
                    { username: "John", email: "john@test.com" },
                    { username: "Jane", email: "jane@test.com" },
                ]);
            }
            else {
                reject("Failed to the user list");
            }
        }, 1000);
    })
}

function onFulfilled(users) {
    console.log(users);
}

function onRejected(error) {
    console.log(error);
}

const promise = getUsers();
promise.then(onFulfilled, onRejected);
```









