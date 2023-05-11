class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let e1 = new Employee();

console.log(e1 instanceof Employee); // true
console.log(e1 instanceof Person);   // true
console.log(e1 instanceof Object);   // true

// Symbol.hasInstance
let p1 = new Person("John");
let check = Person[Symbol.hasInstance](p1);

console.log(check); // true

// HOW TO CUT THE RELATIONSHIP OF CLASSES AND SUBCLASSES

class Person {
    constructor(name) {
        this.name = name;
    }
}

class Android extends Person {
    static [Symbol.hasInstance]() {
        return false;
    }
}
