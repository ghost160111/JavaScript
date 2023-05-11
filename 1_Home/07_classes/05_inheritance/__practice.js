// INHERITANCE

class Person {
    FirstName = "first name";
    LastName = "last name";
    AgeValue = "age";

    static id = Math.floor(Math.random() * 100);

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set First(first) { this.firstName = first; }
    set Last (last)  { this.lastName = last;   }
    set Age  (age)   { this.age = age;         }

    get First() { return this.firstName; }
    get Last () { return this.lastName;  }
    get Age  () { return this.age;       }

    showData() {
        return {
            [this.FirstName]: this.firstName,
            [this.LastName]: this.lastName,
            [this.AgeValue]: this.age,
        };
    }

}

class Employee extends Person {
    Major = "major";

    static id = Math.floor(Math.random() * 100);
    
    constructor(firstName, lastName, age, major) {
        super(firstName, lastName, age);
        this.major = major;
    }

    showData() {
        return {
            [this.FirstName]: this.firstName,
            [this.LastName]: this.lastName,
            [this.AgeValue]: this.age,
            [this.Major]: this.major,
        };
    }

}

let FirstName = "John",
    LastName = "Marston",
    Age = 25;

let person = new Person(FirstName, LastName, Age);

let data = person.showData();

console.log(data); /*
{
  'first name': 'John',
  'last name': 'Marston',
  age: 25
}
*/

let Major = "C++ developer";

let employee = new Employee(FirstName, LastName, Age, Major);

data = employee.showData();

console.log(data); /*
{
  'first name': 'John',
  'last name': 'Marston',
  age: 25,
  major: 'C++ developer'
}
*/

console.log(Person.id);   // 85
console.log(Employee.id); // 37
// as you can see they have different values because in Employee class or in child class of Person, we are overriding static field of 'id'

// Example of inheriting from built-in types
class Queue extends Array {
    enqueue(e) {
        super.push(e);
    }
    dequeue() {
        return super.shift();
    }
    peek() {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}

var customers = new Queue();

customers.enqueue("A");
customers.enqueue("B");
customers.enqueue("C");

while (!customers.empty()) {
    console.log(customers.dequeue());
}
// A
// B
// C


class A {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    data() {
        return {
            ["A"]: this.a,
            ["B"]: this.b,
        };
    }
}

class B extends A {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }

    data() {
        return {
            ["A"]: this.a,
            ["B"]: this.b,
            ["C"]: this.c,
        };
    }
}

let a = new A(1, 2);
let b = new B(1, 2, 3);

let dataA = a.data();
let dataB = b.data();

console.log(dataA); // { A: 1, B: 2 }
console.log(dataB); // { A: 1, B: 2, C: 3 }



