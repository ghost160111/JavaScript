const counter = {
    counter: 0,
    next() {
        return ++this.counter;
    },
    current() {
        return this.counter;
    },
};

console.log(counter.next()); // 1
console.log(counter.next()); // 2
console.log(counter.current()); // 2

// Using prototype pattern

function Counter() {
    this.count = 0;
}

Counter.prototype.next = function() {
    return ++this.count;
};

Counter.prototype.current = function() {
    return this.count;
}

let c = new Counter();

console.log(c.count);     // 0
console.log(c.next());    // 1
console.log(c.next());    // 2
console.log(c.current()); // 2


function contat(separator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}

let msg_1 = "msg_1";
let msg_2 = "msg_2";

let con_msgs = msg_1.concat(" " + msg_2);

console.log(con_msgs); // msg_1msg2
