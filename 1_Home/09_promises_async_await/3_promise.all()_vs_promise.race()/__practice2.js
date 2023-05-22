{
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("The first promise has resolved");
            resolve(10);
        }, 1 * 1000);
    });
    
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("The second promise has resolved");
            resolve(20);
        }, 2 * 1000);
    });
    
    Promise.race([promise1, promise2])
        .then(value => console.log(`Resolved: ${value}`))
        .catch(reason => console.log(`Rejected: ${reason}`));
}

{
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("The first promise has resolved");
            resolve(10);
        }, 1 * 1000);
    });
    
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("The second promise has rejected");
            reject(20);
        }, 2 * 1000);
    });
    
    Promise.race([promise1, promise2])
        .then(value => console.log(`Resolved: ${value}`))
        .catch(reason => console.log(`Rejected: ${reason}`));
}

// Practical JS Promise.race() examples
