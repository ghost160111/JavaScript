{
    function filter(numbers) {
        let results = [];
    
        for (const number of numbers) {
            if (number % 2 != 0) {
                results.push(number);
            }
        }
    
        return results;
    }
    
    let numbers = [1, 2, 4, 7, 3, 5, 6];
    console.log(filter(numbers)); // [ 1, 7, 3, 5 ]
}

{
    function isOdd(number) {
        return (number % 2 != 0);
    }
    
    function isEven(number) {
        return (number % 2 == 0);
    }
    
    function filter(numbers, fn) {
        let results = [];
        
        for (const number of numbers) {
            if (fn(number)) {
                results.push(number);
            }
        }
    
        return results;
    }
    
    let numbers = [1, 2, 4, 7, 3, 5, 6];
    
    console.log(filter(numbers, isOdd));  // [ 1, 7, 3, 5 ]
    console.log(filter(numbers, isEven)); // [ 2, 4, 6 ]
}

{
    function filter(numbers, callback) {
        let results = [];
        
        for (const number of numbers) {
            if (callback(number)) {
                results.push(number);
            }
        }
    
        return results;
    }
    
    let numbers = [1, 2, 4, 7, 3, 5, 6];
    
    let oddNumbers = filter(numbers, function (number) {
        return (number % 2 != 0);
    });

    console.log(oddNumbers);
    // [ 1, 7, 3, 5 ]
}

{
    function filter(numbers, callback) {
        let results = [];
    
        for (const number of numbers) {
            if (callback(number)) {
                results.push(number);
            }
        }
    
        return results;
    }
    
    let numbers = [1, 2, 4, 7, 3, 5, 3];
    
    let oddNumbers = filter(numbers, (number) => number % 2 != 0);
    
    console.log(oddNumbers);
    // [ 1, 7, 3, 5, 3 ]
}