{
    let name = "John";

    function greeting() {
        let message = "Hi";
        console.log(message + " " + name);
    }
    
    greeting(); // Hi John
}

{
    function greeting() {
        let message = "Hi";

        function sayHi() {
            console.log(message);
        }

        sayHi();
    }
    
    greeting(); // Hi
}

{
    function greeting() {
        let message = "Hi";
    
        function sayHi() {
            console.log(message);
        }
    
        return sayHi;
    }
    
    let greet = greeting();
    greet(); // still can access the message variable
    // Outputs: Hi
}

{
    for (var index = 1; index <= 3; index++) {
        setTimeout(function () {
            console.log("after " + index + " second(s):" + index);
        }, index * 1000);
    }
}

{
    for (var index = 1; index <= 3; index++) {
        (function (index) {
            setTimeout(function () {
                console.log('after ' + index + ' second(s):' + index);
            }, index * 1000);
        })(index);
    }
}

{
    for (let index = 1; index <= 3; index++) {
        setTimeout(() => {
            console.log("after " + index + " second(s):" + index);
        }, index * 1000);
    }
}
