// EXAMPLE 1: RETURNING A VALUE
{
    function* foo() {
        yield 1;
        yield 2;
        yield 3;
    }
    
    let f = foo();
    
    console.log(f.next());
    // { value: 1, done: false }
}

// EXAMPLE 2: RETURNING UNDEFINED
{
    function* bar() {
        yield;
    }
    
    let b = bar();
    console.log(b.next());
    // { value: undefined, done: false }
}

// EXAMPLE 3: PASSING A VALUE TO THE NEXT() METHOD
{
    function* generate() {
        let result = yield;
        console.log(`result is ${result}`);
    }
    
    let g = generate();
    console.log(g.next());
    // { value: undefined, done: false }
    
    console.log(g.next(1000));
    // result is 1000
    // { value: undefined, done: true }
}
// EXAMPLE 4: USING YIELD IN AN ARRAY
{
    function* baz() {
        let arr = [yield, yield];
        console.log(arr);
    }
    
    var z = baz();
    
    console.log(z.next());  // { value: undefined, done: false }
    console.log(z.next(1)); // { value: undefined, done: false }
    console.log(z.next(2)); // [1, 2]
    // { value: undefined, done: true }
}

// EXAMPLE 5: USING YIELD TO RETURN AN ARRAY
{
    function* yieldArray() {
        yield 1;
        yield [ 20, 30, 40 ];
    }
    
    let y = yieldArray();
    
    console.log(y.next()); // { value: 1, done: false }
    console.log(y.next()); // { value: [ 20, 30, 40 ], done: false }
    console.log(y.next()); // { value: undefined, done: true }
}

// EXAMPLE 6: USING THE YIELD TO RETURN INDIVIDUAL ELEMENTS OF AN ARRAY
{
    function* yieldArrayElements() {
        yield 1;
        yield* [ 20, 30, 40 ];
    }
    
    let a = yieldArrayElements();
    
    console.log(a.next()); // { value: 1, done: false }
    console.log(a.next()); // { value: 20, done: false }
    console.log(a.next()); // { value: 30, done: false }
    console.log(a.next()); // { value: 40, done: false }
    console.log(a.next()); // { value: undefined, done: true }
}