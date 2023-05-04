function say(message = "Hi") {
    return message;
}

let message = "Hi";
let showMessage = say(message);
console.log(showMessage); // Hi

message = "Bye";
showMessage = say(message);
console.log(showMessage); // Bye

function add(x, y) {
    return (x + y);
}

let a, b;

a = 100;
b = 200;

let addValues = add(a, b);
console.log(addValues); // 300

function date(d = today()) {
    console.log(d);
}

function today() {
    return (new Date()).toLocaleDateString("en-US");
}
date(); // 5/4/2023