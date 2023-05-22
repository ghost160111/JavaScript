function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log("Get user from the database.");
        setTimeout(() => {
            resolve({
                userId: userId,
                username: "john",
            });
        }, 1000);
    });
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of ${user.username} from the API.`);
        setTimeout(() => {
            resolve(["Email", "VPN", "CDN"]);
        }, 2 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3 * 1000);
    });
}

// .then syntax
//getUser(100)
//    .then(getServices)
//    .then(getServiceCost)
//    .then(console.log);

// async/await syntax:
//async function showServicesCost() {
//    let user = await getUser(100);
//    let services = await getServices(user);
//    let cost = await getServiceCost(services);
//    console.log(`The service cost is ${cost}`);
//}
//
//showServicesCost();

// BEST practice

async function showServiceCost() {
    try {
        let user = await getUser(100);
        let services = await getServices(user);
        let cost = await getServiceCost(services);
        console.log(`The service cost is ${cost}`);
    } catch(error) {
        console.log(error);
    }
}

// CALL
let call = showServiceCost();
