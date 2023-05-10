class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    get FirstName() {
        return this._firstName;
    }
    set FirstName(newFirst) {
        //newFirst = newFirst.trim();
        if (newFirst === "") {
            throw new Error("The firstName cannot be empty");
        }
        this._firstName = newFirst;
    }
    get LastName() {
        return this._lastName;
    }
    set LastName(newLast) {
        //newLast = newLast.trim();
        if (newLast === "") {
            throw new Error("The lastName cannot be empty");
        }
        this._lastName = newLast;
    }
    get Age() {
        return this._age;
    }
    set Age(newAge) {
        if (newAge <= 0) {
            throw new Error("Age cannot be less than or equal to 0");
        }
        this._age = newAge;
    }
    showData() {
        return {
            firstName: this.FirstName,
            lastName: this.LastName,
            age: this.Age,
        };
    }
}

let firstName,
    lastName,
    age;

let person = new Person(firstName, lastName, age);

firstName = "Jaloliddin";
lastName = "Zukhriddinov";
age = 19;

person.FirstName = firstName;
person.LastName = lastName;
person.Age = age;

let data = person.showData();

console.log(data);
// { firstName: 'Jaloliddin', lastName: 'Zukhriddinov', age: 19 }
