/* apply() method */

let p1 = { first: "John", last: "Marston" };
let p2 = { first: "Arthur", last: "Morgah" };

const output = function(message) {
    console.log(message);
    console.log(this.first + " " + this.last);
}

output.apply(p1, ["What is full name of p1"]);
output.apply(p2, ["What is full name of p2"]);

// Outputs:

// What is full name of p1?
// John Marston
// What is full name of p2?
// Arthur Morgah

/* call() method */

output.call(p1, "What is full name of p1?");
// Outputs:
// What is full name of p1?
// John Marston

output.call(p2, "What is full name of p2?");
// Outputs:
// What is full name of p2?
// Arthur Morgah

/* bind() method */

let car = {
    speed: 5,
    start: function() {
        console.log("Start with " + this.speed + " km/h");
    },
};

let aircraft = {
    speed: 15,
    fly: function() {
        console.log("Flying");
    },
};

let taxiing1 = car.start.bind(aircraft);
taxiing1(); // Start with 15 km/h

let taxiing2 = aircraft.fly.bind(car);
taxiing2(); // Flying

// RECAP

// apply() and call() methods

let obj1 = {
    name: "some data...",
    status: true,
    anotherProp: true,
    changeData: function() {
        if (this.status === false) {
            throw new Error("Error, you have no permission to change values of data...");
        }
        return this.name;
    }
};

let obj2 = {
    name: "some data",
    status: true,
    prop: false,
    output: function() {
        if (this.status === false) {
            throw new Error("Status is false, cannot retrieve the data");
        }
        return this.name;
    }
};

const outputData = (message) => {
    console.log(message);
    console.log(this.prop + " " + this.anotherProp);
}

// example of apply() method:
outputData.apply(obj1, ["What is the status of obj1?"]);

// example of call() method:
outputData.call(obj1, "What is the status of obj1");


// bind() method

let bindMethodExample = obj1.changeData.bind(obj2);
console.log(bindMethodExample()); // some data
// from obj2 object
