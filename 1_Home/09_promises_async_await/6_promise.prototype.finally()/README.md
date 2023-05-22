# JavaScript Promise finally()

> __Summary__: in this tutorial, you will learn how to use the JavaScript Promise finally() method to execute the code once the promise is settled, regardless of its outcome.

## Introduction to the JavaScript Promise finally() method

Suppose that you have a promise:

```js
promise
    .then(result => { ... })
    .catch(error => { ... })
    .finally(() => { ... })
```

The finally() method is always executed whether the promise is fulfilled or rejected. In other words, the finally() method is executed when the promise is settled.

The finally() method was introduced in ES2018. In the finally() method, you can place the code that cleans up the resource when the promise is settled, regardless of its outcome.

By using the finally() method, you can avoid duplicate code in the then() and catch() methods like this:

```js
promise
    .then(result => {
        // process the result
        // clean up the resources
    })
    .catch(error => {
        // handle the error
        // clean up the resources
    });
```

Now, you can move the clean up the resources part to the finally() method as follows:

```js
promise
    .then(result => {
        // process the result
    })
    .catch(error => {
        // handle the error
    })
    .finally(() => {
        // clean up the resources
    });
```

The finally() method is similar to the finally block in the `try...catch...finally` statement. In synchronous code, you use the finally block to clean up the resources. In asynchronous code, you use the finally() method instead.

## The JavaScript Promise finally() method example

The following defines a Connection class:

```js
class Connection {
    execute(query) {
        if (query != 'Insert' && query != 'Update' && query != 'Delete') {
            throw new Error(`The ${query} is not supported`);
        }
        console.log(`Execute the ${query}`);
        return this;
    }
    close() {
        console.log('Close the connection')
    }
}
```

The Connection class has two methods: execute() and close():

- The execute() method will only execute the insert, update, or delete query. It will issue an error if you pass into another query that is not in the list.
- The close() method closes the connection, kind of cleaning up the resource.

The following connect() function returns a promise that resolves to a new Connection if the success flag is set to true:

```js
const success = true;

function connect() {
    return new Promise((resolve, reject) => {
        if (success)
            resolve(new Connection());
        else
            reject('Could not open the database connection');
    });
}
```

The following example uses the finally() method to close the connection:

```js
let globalConnection;

connect()
    .then((connection) => {
        globalConnection = connection;
        return globalConnection.execute('Insert');
    })
    .then((connection) => {
        globalConnection = connection;
        return connection.execute('Select');
    })
    .catch(console.log)
    .finally(() => {
        if (globalConnection) {
            globalConnection.`close()`;
        }
    });
```

In this example:

- The connect() function resolves to a new Connection  object because the success flag is set to true.
- The first then() method executes the Insert query and returns a Connection object. The globalConnection is used to save the connection.
- The second then() method executes the Select query and issues an error. The catch() method shows the error message and the finally() method closes the connection.

# :memo: Summary

- The finally() method schedule a function to execute when the promise is settled, either fulfilled or rejected.
- It’s good practice to place the code that cleans up the resources in the finally() method once the promise is settled, regardless of its outcome.
