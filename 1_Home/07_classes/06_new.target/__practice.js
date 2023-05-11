class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set First(first) { this.firstName = first; }
    get First() { return this.firstName; }
    
    set Last(last) { this.lastName = last; }
    get Last() { return this.lastName; }

    output() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
        };
    }
}

let p = new Person();

let first = "John",
    last = "Marston";

p.First = first;
p.Last = last;

console.log(p.output());
// { firstName: 'John', lastName: 'Marston' }
