let firstName = "John",
    lastName = "Marston";

let greeting = "Hi",
    message = "I have question for you, where is your laptop, I thought that you would like to give me some data from it."

const person = {
    firstName: firstName,
    lastName: lastName,
};

function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}

let greetPerson = greet.apply(person, [greeting, message]);
console.log(greetPerson);


const computer = {
    name: "MacBook",
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is on`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is off`;
    },
};

const server = {
    name: "Dell PowerEdge T30",
    isOn: false,
};

let result = computer.turnOn.apply(server);
console.log(result); // The Dell PowerEdge T30 is on

result = computer.turnOff.apply(server);
console.log(result); // The Dell PowerEdge T30 is off


let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push(arr, numbers);

console.log(arr); // <ref *1> [ 1, 2, 3, [Circular *1], [ 4, 5, 6 ] ]
