// Object.entries()  -  Method

const ssn = Symbol('ssn');
const person = {
    firstName: "John",
    lastName: "Marston",
    age: 25,
    [ssn]: "123-345-789",
};

const kv = Object.entries(person);

console.log(kv);
// Output:
// [ [ 'firstName', 'John' ], [ 'lastName', 'Marston' ], [ 'age', 25 ] ]

