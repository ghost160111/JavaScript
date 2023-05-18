/*{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 3 * 100);
    });
    
    promise.then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result * 2);
            }, 3 * 1000);
        })
    }).then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result * 3);
            }, 3 * 1000);
        });
    }).then(result => console.log(result)); 
}*/
// This example shows 10, 20, and 60 after every 3 seconds. This code pattern
// allows you to execute some tasks in sequence.
// The following modified the above example:

/*{
    function generateNumber(num) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num);
            }, 3 * 1000);
        });
    }

    generateNumber(10)
        .then((result) => {
            console.log(result);
            return generateNumber(result * 2);
        })
        .then((result) => {
            console.log(result);
            return generateNumber(result * 3);
        })
        .then((result) => console.log(result));
}*/
// TEST COMPLETED SUCCESSFULLY
/*{
    function getUser(userId) {
        return new Promise((resolve, reject) => {
            console.log("Get user from the database.");
            setTimeout(() => {
                resolve({
                    userId: userId,
                    username: "admin",
                });
            }, 1000);
        });
    }

    function getServices(user) {
        return new Promise((resolve, reject) => {
            console.log(`Get services of ${user.username} from the API`)
            setTimeout(() => {
                resolve(["Email", "VPN", "CDN"]);
            }, 3 * 1000);
        });
    }

    function getServicesCost(services) {
        return new Promise((resolve, reject) => {
            console.log(`Calculate the service cost of ${services}.`);
            setTimeout(() => {
                resolve(`Cost: ${services.length * 100}$`);
            }, 2 * 1000);
        });
    }

    getUser(100)
    .then(getServices)
    .then(getServicesCost)
    .then(console.log);

    // Outputs:
    // Get the user from the database
    // Get the services of admin from the API
    // Calculate the services cost of Email,VPN,CDN.
    // Cost: 300$
}*/

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
