// Create a new Map object
{
    console.log("Topic: Create a new Map object\n");

    let john = { name: "John Doe" },
        lily = { name: "Lily Bush" },
        peter = { name: "Peter Drucker" };

    let userRoles = new Map();

    console.log(typeof userRoles); // object
    console.log(userRoles instanceof Map); // true

    console.log("\n");
}

// Add elements to a Map
{
    console.log("Topic: Add elements to a Map\n");

    let john = { name: "John Doe" },
        lily = { name: "Lily Bush" },
        peter = { name: "Peter Drucker" };
    
    let userRoles = new Map();

    userRoles.set(john, "admin");

    userRoles.set(lily, "editor")
             .set(peter, "subscriber");

    console.log("\n");
}

// Initialize a map with an iterable object
{
    console.log("Topic: Initialize a map with an iterable object\n");

    let john = { name: "John Doe" },
        lily = { name: "Lily Bush" },
        peter = { name: "Peter Drucker" };

    let userRoles = new Map([
        [john, "admin"],
        [lily, "editor"],
        [peter, "subscriber"],
    ]);

    console.log(userRoles); /*
    Outputs:

        Map(3) {
            { name: 'John Doe' } => 'admin',
            { name: 'Lily Bush' } => 'editor',
            { name: 'Peter Drucker' } => 'subscriber'
        }

    */

    console.log("\n");
}

// Get an element from a map by key
{
    console.log("Topic: Get an elemnt from a map by key\n");

    let john = { name: "John Doe" },
        lily = { name: "Lily Bush" },
        peter = { name: "Peter Drucker" };

    let userRoles = new Map([
        [john, "admin"],
        [lily, "editor"],
        [peter, "subscriber"],
    ]);

    console.log(userRoles.get(john)); // admin
    
    // if you pass a key that doesn't exist, the get() method will return undefined

    let foo = { name: "Foo" };
    userRoles.get(foo); // undefined

    console.log("\n");
}

// Check the existence of an element by key
{
    console.log("Topic: Check the existence of an element by key\n");

    let john = { name: "John Doe" },
        lily = { name: "Lily Bush" },
        peter = { name: "Peter Drucker" };

    let userRoles = new Map([
        [john, "admin"],
        [lily, "editor"],
        [peter, "subscriber"],
    ]);

    // console.log(userRoles.has(oliver)); // false, throws an error
    console.log(userRoles.has(john));   // true

    console.log("\n");
}

// Get the number of elements in the map
{
    console.log("Topic: Get the number of elements in the map\n");

    let john = { name: "John Doe" },
        lily = { name: "Lily Bush" },
        peter = { name: "Peter Drucker" };

    let userRoles = new Map([
        [john, "admin"],
        [lily, "editor"],
        [peter, "subscriber"],
    ]);

    let sizeOfUserRoles = userRoles.size;
    console.log(`Size of user roles: ${sizeOfUserRoles}`);
    // Outputs: Size of user roles: 3

    console.log("\n");
}

// Iterate over map keys
{
    console.log("Topic: Iterate over map keys\n");

    let john = { name: "John Doe" },
        lily = { name: "Lily Bush" },
        peter = { name: "Peter Drucker" };

    let userRoles = new Map([
        [john, "admin"],
        [lily, "editor"],
        [peter, "subscriber"],
    ]);

    for (const user of userRoles.keys()) {
        console.log(user);
    }
    // Outputs:
    // John Doe
    // Lily Bush
    // Peter Drucker

    console.log("\n");
}

// Iterate over map values
{
    console.log("Topic: Iterate over map values\n");

    let john = { name: "John Doe" },
        lily = { name: "Lily Bush" },
        peter = { name: "Peter Drucker" };

    let userRoles = new Map([
        [john, "admin"],
        [lily, "editor"],
        [peter, "subscriber"],
    ]);

    for (const role of userRoles.values()) {
        console.log(role);
    }
    // Outputs:
    // admin
    // editor
    // subscriber

    console.log("\n");
}

// Iterate over map elements
{
    console.log("Topic: Iterate over map elements\n");

    let john = { name: "John Doe" },
        lily = { name: "Lily Bush" },
        peter = { name: "Peter Drucker" };

    let userRoles = new Map([
        [john, "admin"],
        [lily, "editor"],
        [peter, "subscriber"],
    ]);

    for (const role of userRoles.entries()) {
        console.log(`${role[0].name}: ${role[1]}`);
    }

    console.log("");

    // to make iteration more natural, you can use destructuring as follows:
    for (const [user, role] of userRoles.entries()) {
        console.log(`${user.name}: ${role}`);
    }

    console.log("");

    // in addition to for...of loop, you can use the forEach() method of the map object:
    userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`));

    console.log("\n");
}

// Convert map keys or values to an array
{
    console.log("Topic: Convert map keys or values to an array\n");

    let john = { name: "John Doe" },
        lily = { name: "Lily Bush" },
        peter = { name: "Peter Drucker" };

    let userRoles = new Map([
        [john, "admin"],
        [lily, "editor"],
        [peter, "subscriber"],
    ]);

    console.log("These are the keys of the map:");
    let keys = [...userRoles.keys()];
    console.log(keys);
    // Outputs:
    // [ { name: "John Doe" },
    //   { name: "Lily Bush" },
    //   { name: "Peter Drucker" } ]

    console.log("");

    console.log("These are the values of the map:");
    // and the following converts the values of elements to an array:
    let roles = [...userRoles.values()];
    console.log(roles);
    // Output:
    // [ 'admin', 'editor', 'subscriber' ]

    console.log("\n");
}

// Delete all elements in the map
{
    console.log("Topic: Delete all elements in the map\n");

    let john = { name: "John Doe" },
        lily = { name: "Lily Bush" },
        peter = { name: "Peter Drucker" };

    let userRoles = new Map([
        [john, "admin"],
        [lily, "editor"],
        [peter, "subscriber"],
    ]);

    userRoles.clear();

    console.log("Size of user roles map: " + userRoles.size); // 0
    console.log("Above output is the result of using clear() method in the map");

    console.log("\n");
}
