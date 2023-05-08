// ES5 syntax

{
    let Person = {
        name: "John Doe",
        greet: function() {
            return "Hi, I'm " + this.name;
        },
    };

    let Teacher = Object.create(Person, {
        name: {
            value: "John Doe",
        },
        teach: {
            value: function(subject) {
                return "I can teach " + subject;
            },
        },
    });

    console.log(Object.getPrototypeOf(Teacher) === Person); // true
}

// ES6 syntax

{
    class Person {
        constructor(name) {
            this.name = name;
        }
        greet() {
            return "Hi, I'm " + this.name;
        }
    }

    class Teacher extends Person {
        constructor(name) {
            super(name);
        }
        teach(subject) {
            return "I can teach " + subject;
        }
    }

    let t1 = new Teacher("John Doe");
    let subject = t1.teach("Math");

    console.log(subject);
    // I can teach Math
    
    console.log(Object.getPrototypeOf(Teacher) === Person); // true
}