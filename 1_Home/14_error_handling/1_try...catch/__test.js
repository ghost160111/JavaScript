// PRIMARY USAGE OF TRY...CATCH STATEMENT:

// - WHEN YOU NEED TO RUN CODE WITHOUT STOPPING THE EXECUTION

// Example 1:
{
    try {
        let result = add(10, 20);
        console.log(result);
    } catch (error) {
        console.log({ name: error.name, message: error.message });
    }

    console.log("Bye");

    // code output:
    // { name: 'ReferenceError', message: 'add is not defined' }
    // Bye
}

// Example 2:
{
    const add = (x, y) => x + y;

    try {
        let result = add(10, 20);
        console.log(result);
    } catch (e) {
        console.log({ name: e.name, message: e.message });
    }

    console.log("Bye");

    // code output:
    // 30
    // Bye
}

// Example 3:
{
    const isValidJSON = (str) => {
        try {
            JSON.parse(str);
            return true;
        } catch {
            return false;
        }
    };

    let valid = isValidJSON(`{"language":"JavaScript"}`);
    console.log(valid);
    
    // code output:
    // true
}

// Example 4:
{
    
}