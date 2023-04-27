## Object

### Introduction to JS objects

> In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

> The key of a property can be a string. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.

> JavaScript provides you with many ways to create an object. The most commonly used one is to use the object literal notation.

> The following example creates an empty object using the object literal notation:

```js

let empty = {};

```

> To create an object with properties, you use key:value within curly braces. For example:

```js

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

```

> As you can see, you can declare, you can change properties, but there is only one thing that is important to note that if change propertie(s) it won't be changed in functions inside of the objects.

> Above example code shows everything you need to know and note about objects. Remember it is complex data type in contrast with primitive ones. You should understand their positive and negative sides.

### Adding a new property to an object

> Here is the example that clearly shows of adding new property to an object:

```js

let person = {
    firstName: "John",
    lastName: "Doe"
};
// adding age property to person object:
person.age = 25;

// print property age of an object person
console.log(person.age); // 25

```

### Deleting a property of an object

> Here is the example that clearly shows how to delete a property of an object:

```js

let person = {
    firstName: "Jaloliddin",
    lastName: "Zukhriddinov",
    age: 25
};

// delete person.age property
delete person.age;

// object property person.age has been deleted and doesn't exist at all.

```

### Checking if object property exists

> To check the existence of an object's property, use should use 'in' operator. See the following example:

```js

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

```

### :memo: Summary!

> - An object is a collection of key-value pairs.
> - use the dot notaion (.) or bracket notation [] to access a property of an object.
> - You can properties to objects using . or [] notation by just assigning it to a certain value.
> - The delete operator removes the property from an object.
> - The in operator checks whether the object has the certain property or not, and returns boolean value, true if it exists, false if it doesn't.
