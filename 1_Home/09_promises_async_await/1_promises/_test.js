{
    const users = [
        { username: "John", email: "john@test.com" },
        { username: "Jane", email: "jane@test.com" },
    ];
    
    function getUsers() {
        return users;
    }
    
    function findUser(username) {
        const users = getUsers();
        const user = users.find((user) => user.username === username);
        return user;
    }
    
    let user = findUser("Jane");
    //console.log(user); // { username: 'Jane', email: 'jane@test.com' }
}

// To simulate the delay, you can use the setTimeout() function. For example:
{
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
}

// The getUsers() won’t work properly and always returns an empty array.
// Therefore, the findUser() function won’t work as expected:
{
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

    function findUser(username) {
        const users = getUsers(); // A
        const user = users.find((user) => user.username === username); // B
        return user;
    }

    //console.log(findUser("John"));
}

// The following example adds a callback argument to the getUsers() and findUser() functions:
{
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

    //findUser("John", console.log);
    // { username: 'John', email: 'john@test.com' }
}

{
    function getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { username: "John", email: "john@test.com" },
                    { username: "Jane", email: "jane@test.com" },
                ]);
            }, 2000);
        });
    }

    function onFulfilled(users) {
        console.log(users);
    }

    const promise = getUsers();
    promise.then(onFulfilled); /*
        [
            { username: 'John', email: 'john@test.com' },
            { username: 'Jane', email: 'jane@test.com' }
        ]
    */
}

{
    let users = [
        { username: "John", email: "john@test.com" },
        { username: "Jane", email: "jane@test.com" },
    ];

    function getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(users);
            });
        }, 1000);
    }

    const promise = getUsers();
    promise.then((users) => {
        console.log(users);
    });
    
    /*
    [
        { username: 'John', email: 'john@test.com' },
        { username: 'Jane', email: 'jane@test.com' }
    ]
    */
}

// In this example, the getUsers() function always succeeds. To simulate
// the error, we can use a success flag like the following:
{
    let success = true;
    let users = [
        { username: "John", email: "john@test.com" },
        { username: "Jane", email: "jane@test.com" },
    ];

    function getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (success) {
                    resolve(users);
                }
                else {
                    reject("Failed to load the user list");
                }
            }, 3500);
        });
    }

    function onFulfilled(users) {
        console.log(users);
    }

    function onRejected(error) {
        console.log(error);
    }

    const promise = getUsers();
    promise.then(onFulfilled, onRejected);
}

// The following shows how to use the arrow functions as the arguments of the then() method:
{
    let success = true;
    let users = [
        { username: "John", email: "john@test.com" },
        { username: "Jane", email: "jane@test.com" },
    ];

    function getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (success) {
                    resolve(users);
                }
                else {
                    reject("Failed to load the users list");
                }
            }, 5000);
        });
    }

    const promise = getUsers();
    promise.then(
        (users) => console.log(users),
        (error) => console.log(error)
    );
}

// The catch() method
{
    let success = true;
    let users = [
        { username: "John", email: "john@test.com" },
        { username: "Jane", email: "jane@test.com" },
    ];

    function getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (success) {
                    resolve(users);
                }
                else {
                    reject("Failed to load the users list");
                }
            }, 6500);
        });
    }

    const promise = getUsers();
    promise.then((users) => console.log(users));
    promise.catch((error) => console.log(error));
    // Outputs: Failed to load the users list
}

// The finally() method
{
    const render = () => {
        // ...
    };

    getUsers()
        .then((users) => {
            console.log(users);
            render();
        })
        .catch((error) => {
            console.log(error);
            render();
        });
}
// As you can see, the render() function call is duplicated in both then() and catch() methods.

// To remove duplicate, you can use finally() method, see the following example:
{
    const render = () => {
        // ...
    };

    getUsers()
        .then((users) => {
            console.log(users);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            render();
        });
}

// Practice of promises

{
    let success = true;
    let users = [
        { username: "John", email: "john@test.com" },
        { username: "Jane", email: "jane@test.com" },
        { username: "Johny", email: "johny@test.com" },
        { username: "Tyler", email: "tyler@test.com" },
    ];

    const render = () => {
        console.log("All tasks are completed...");
    };

    function getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (success) {
                    resolve(users);
                } else {
                    reject("Failed to load the users list");
                }
            }, 10000);
        });
    }

    const promise = getUsers();

    promise.then((users) => console.log(users))
    promise.catch((error) => console.log(error))
    promise.finally(() => render());
}

