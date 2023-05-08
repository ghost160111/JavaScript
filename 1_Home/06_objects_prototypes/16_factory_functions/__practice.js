// OLD SYNTAX:
//function createPerson(firstName, lastName) {
//    return {
//        firstName: firstName,
//        lastName: lastName,
//        getFullName() {
//            return firstName + " " + lastName;
//        },
//    };
//}

// ES6 SYNTAX:
const createPerson = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName() {
            return firstName +  " " + lastName;
        },
    };
}

let p1 = createPerson("John", "Marston");
let p2 = createPerson("Arthur", "Morgah");

console.log(p1.getFullName()); // John Marston
console.log(p2.getFullName()); // Arthur Morgah

// TESTING...