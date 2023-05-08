"use strict";

let person = {};

Object.defineProperty(person, "ssn", {
    configurable: false,
    value: "012-38-9119",
});

{
    let person = {};

    person.age = 25;
    person.ssn = "012-38-9119";

    for (let property in person) {
        console.log(property);
    }
    // Output:
    // age
    // ssn
}

// TESTING PURPOSES
// VISUALIZATION
{
    let person = {
        firstName: "John",
        lastName: "Doe",
    };

    Object.defineProperty(person, "fullname", {
        get: function() {
            return this.firstName + " " + this.lastName;
        },
        set: function(value) {
            let parts = value.split(" ");
            if (parts.length == 2) {
                this.firstName = parts[0];
                this.lastName = parts[1];
            } else {
                throw "Invalid name format";
            }
        }
    });

    console.log(person.fullname);
    // John Doe
}

