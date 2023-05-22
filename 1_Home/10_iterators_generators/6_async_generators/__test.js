// ASYNC GENERATORS

// SYNCHRONOUS GENERATOR
{
    function* sequence(start, end) {
        for (let i = start; i <= end; i++) {
            yield i;
        }
    }
    
    let seq = sequence(1, 5);
    
    for (const num of seq) {
        console.log(num);
    }
    
    // 1
    // 2
    // 3
    // 4
    // 5
}

// ASYNCHRONOUS GENERATOR
{
    async function* asyncSequence(start, end) {
        for (let i = start; i <= end; i++) {
            yield new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(i);
                }, 1000);
            });
        }
    }

    (async () => {
        let seq = asyncSequence(1, 5);

        for await (const num of seq) {
            console.log(num);
        }
    })();
    // 1
    // 2
    // 3
    // 4
    // 5
}
