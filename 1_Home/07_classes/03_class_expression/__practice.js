function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {
    sayHi() {
        console.log("Hi");
    }
});

greeting.sayHi();
