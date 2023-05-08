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

{
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        set FirstName(firstName) { this.firstName = firstName; }
        set LastName (lastName)  { this.lastName = lastName;   }

        get FirstName() { return this.firstName; }
        get LastName () { return this.lastName;  }

        getFullName() {
            return this.firstName + " " + this.lastName;
        }

        changeName(first, last) {
            if (first === undefined) {
                first = this.firstName;
                this.lastName = last;
            }
            else if (last === undefined) {
                last = this.lastName;
                this.firstName = first;
            }

            this.firstName = first;
            this.lastName = last;

            return this.getFullName();
        }
    }

    console.log("\n=====================");
    const p = new Person("Alex", "Doe");
    const fullname = p.getFullName();

    console.log(fullname); // Alex Doe

    function changeFullName(first, last) {
        p.changeName(first, last);
        return p.getFullName();
    }

    const changed = changeFullName("John", "Marston");
    console.log(changed); // John Marston
}

