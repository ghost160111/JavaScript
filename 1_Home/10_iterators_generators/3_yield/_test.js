function* yieldArray() {
    yield 1;
    yield* [ 20, 30, 40 ];
}

let y = yieldArray();

console.log(y.next()); // { value: 1, done: false }
console.log(y.next()); // { value: 20, done: false }
console.log(y.next()); // { value: 30, done: false }
console.log(y.next()); // { value: 40, done: false }
console.log(y.next()); // { value: undefined, done: true }
