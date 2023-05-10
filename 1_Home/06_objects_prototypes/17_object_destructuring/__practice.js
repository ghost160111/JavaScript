let someObject = {
    fullname: {
        firstName: "first name of someObject",
        lastName: "last name of someObject",
    },
};

let {
    fullname: {
        firstName: fName,
        lastName: lName,
    },
    fullname,
} = someObject;

console.log(someObject); /*
{
  fullname: {
    firstName: 'first name of someObject',
    lastName: 'last name of someObject'
  }
}
*/
console.log(fullname); /*
{
  firstName: 'first name of someObject',
  lastName: 'last name of someObject'
}
*/
console.log(fullname.firstName); // first name of someObject
console.log(fullname.lastName); // first name of someObject
console.log(fName); // first name of someObject
console.log(lName); // first name of someObject