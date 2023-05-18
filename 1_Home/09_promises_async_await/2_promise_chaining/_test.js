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
