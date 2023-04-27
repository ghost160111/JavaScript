let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isMarried: false,
    hasJob: true,
    listOfJobs: ["Full-stack developer", "Embedded systems developer in C", "C++ game developer"],
    fullname: function output(first = this.firstName, last = this.lastName) { 
        return first + " " + last;
    },
};

let personInfo = person.fullname();

console.log(personInfo); // John Doe

person.firstName = "Johny";
person["lastName"] = "Williams";

console.log(personInfo); // John Doe
// as you can see it doesn't change the function itself

console.log(person.firstName); // Johny
console.log(person.lastName);  // Williams

let employee = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 30
};

let check = "firstName" in employee;
console.log(check); // true

let anotherCheck = "job" in employee;
console.log(anotherCheck); // false

employee.job = "C++ game developer"; // adding job property to employee object

console.log(employee.job); // C++ game developer
console.log("job" in employee); // true

delete employee.firstName; // deleting firstName property from employee object

console.log("firstName" in employee); // false