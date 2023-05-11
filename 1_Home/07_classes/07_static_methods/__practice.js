// STATIC METHODS

// ES6

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static createAnonymous(gender) {
        let name;
        if (gender == "male") {
            name = "John Marston";
        } else {
            name = "Jane Morgah";
        }
        return name;
    }
}

let anonymous = Person.createAnonymous("male");
console.log(anonymous); // John Marston
