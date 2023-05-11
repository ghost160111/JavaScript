// EXAMPLE OF PRIVATE INSTANCE METHOD
class Person {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    getFullName(format = true) {
        return format ? this.#firstLast() : this.#lastFirst();
    }

    #firstLast() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    #lastFirst() {
        return `${this.#lastName} ${this.#firstName}`;
    }
}

let person = new Person("John", "Marston");

let firstLast = person.getFullName(true);
let lastFirst = person.getFullName(false);

console.log(firstLast); // John Marston
console.log(lastFirst); // Marston John

// EXAMPLE OF PRIVATE STATIC METHOD
class Person2 {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = Person2.#validate(firstName);
        this.#lastName = Person2.#validate(lastName);
    }

    getFullName(format = true) {
        return format ? this.#firstLast() : this.#lastFirst();
    }

    static #validate(name) {
        if (typeof name === "string") {
            let str = name.trim();
            if (str.length >= 3) {
                return str;
            }
        }
        throw "The name must be a string with at least 3 characters";
    }

    #firstLast() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    #lastFirst() {
        return `${this.#lastName} ${this.#firstName}`;
    }
}

let person2 = new Person2("John", "Marston");

let firstLast2 = person2.getFullName(true);
let lastFirst2 = person2.getFullName(false);

console.log(firstLast2); // John Marston
console.log(lastFirst2); // Marston John
