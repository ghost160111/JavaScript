
// ES5 - syntax

{
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    Person.prototype.getFullName = function() {
        return this.firstName + " " + this.lastName;
    }
    
    var p1 = new Person("John", "Doe");
    var p2 = new Person("John", "Doe");
    
    console.log(p1.getFullName()); // John Doe
    console.log(p2.getFullName()); // John Doe
}

// ES6 - syntax:

{
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        getFullName() {
            return this.firstName + " " + this.lastName;
        }
    }

    let p1 = new Person("John", "Doe");
    let p2 = new Person("John", "Doe");

    console.log(p1.getFullName()); // John Doe
    console.log(p2.getFullName()); // John Doe
}

