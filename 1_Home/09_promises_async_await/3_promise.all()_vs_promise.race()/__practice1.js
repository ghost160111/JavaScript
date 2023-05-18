// Resolved promises example
/*{
    const promise_1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("The first promise has resolved");
            resolve(10);
        }, 1 * 1000);
    });
    
    const promise_2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("The second promise has resolved");
            resolve(20);
        }, 2 * 1000);
    });
    
    const promise_3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("The third promise has resolved");
            resolve(30);
        }, 3 * 1000);
    });
    
    Promise.all([promise_1, promise_2, promise_3]).then((results) => {
        const total = results.reduce((p, c) => p + c);
    
        console.log(`Results: ${results}`);
        console.log(`Total: ${total}`);
    });
}*/

// Output:
// The first promise has resolved
// The second promise has resolved
// The third promise has resolved
// Results: 10,20,30
// Total: 60

// Rejected promises example

{
    const __promise_1__ = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("The first promise has resolved");
            resolve(10);
        }, 1 * 1000);
    });

    const __promise_2__ = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("The second promise has rejected");
            reject("Failed");
        }, 2 * 1000);
    });

    const __promise_3__ = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("The third promise has resolved");
            resolve(30);
        }, 3 * 1000);
    });

    Promise.all([__promise_1__, __promise_2__, __promise_3__])
        .then(console.log) // never execute
        .catch(console.log);
}

// Outputs:

// The first promise has resolved
// The second promise has rejected
// Failed
// The third promise has resolved
