// ES5 syntax
for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log("after " + index + " second(s):" + index);
        }, index * 1000);
    })(index);
}
// Outputs:

// after 1 second(s):1
// after 2 second(s):2
// after 3 second(s):3


// ES6 syntax
for (let index = 1; index <= 3; index++) {
    setTimeout(() => {
        console.log("after " + index + " second(s):" + index);
    }, index * 1000);
}
// Outputs:

// after 1 second(s):1
// after 2 second(s):2
// after 3 second(s):3

