{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 3 * 1000);
    });
    
    promise.then((result) => {
        console.log(result); // 10
        return (result * 2);
    }).then((result) => {
        console.log(result); // 20
        return (result * 3);
    }).then((result) => {
        console.log(result); // 60
        return (result * 4);
    });
    
    // 10
    // 20
    // 60
}

{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 3 * 1000);
    });
    
    promise.then((result) => {
        console.log(result); // 10
        return (result * 2);
    })
    
    promise.then((result) => {
        console.log(result); // 10
        return (result * 3);
    })
    
    promise.then((result) => {
        console.log(result); // 10
        return (result * 4);
    });

    // 10
    // 10
    // 10
}

{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 4 * 1000);
    });

    promise.then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result * 2);
            }, 4 * 1500);
        });
    }).then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result * 3);
            }, 4 * 1500);
        });
    }).then(result => console.log(result));
}