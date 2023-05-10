// ES5 syntax of object/prototypal pattern
{
    function Person(name) {
        this.name = name;
    }
    
    Person.prototype.getName = function () {
        return this.name;
    };
    
    var john = new Person("John Marston");
    console.log(john.getName()); // John Marston

    console.log(john instanceof Person); // true
    console.log(john instanceof Object); // true
}

// ES6 classes
{
    class Person {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }

    let john = new Person("John Marston");
    let name = john.getName();

    console.log(name); // John Marston

    console.log(typeof Person); // function
}
