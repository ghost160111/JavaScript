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
    
    console.log(findUser("John")); // undefined
}

// Because getUsers() returns an empty array, users array is empty (line A)

// Fixed version
{
    function getUsers(callback) {
        let users = [];
    
        // delay 1 second (1000ms)
        setTimeout(() => {
            callback([
                { username: "John", email: "john@test.com" },
                { username: "Jane", email: "jane@test.com" },
            ]);
        }, 1000);
    
        return users;
    }

    function findUser(username, callback) {
        getUsers((users) => {
            const user = users.find((user) => user.username === username);
            callback(user);
        });
    }

    findUser("John", console.log);
    // { username: 'John', email: 'john@test.com' }
}

{
    
}