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
        let name = gender == "male" ? "John Marston" : "Jane Smith";
        return name;
    }
}

let anonymous = Person.createAnonymous("male");
console.log(anonymous); // John Marston
