const person = {
    name: "John Marston",
    getName: function() {
        console.log(this.name);
    },
};

setTimeout(person.getName, 1000); // Outputs: undefined

let f = person.getName;
setTimeout(person.getName, 2000); // Outputs: undefined

setTimeout(() => {
    person.getName();
}, 3000);
// Outputs:
// John Marston


let f2 = person.getName.bind(person);
setTimeout(f2, 4000); // John Marston


let runner = {
    name: "Runner",
    run: function(speed) {
        console.log(this.name + " runs at " + speed + " mph.");
    }
};

let flyer = {
    name: "Flyer",
    fly: function(speed) {
        console.log(this.name + " flies at " + speed + " mph.");
    }
};

let run = runner.run.bind(flyer, 20);
setTimeout(() => {
    run();
}, 5000);
// Flyer runs at 20 mph.
