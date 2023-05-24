// Example 1:
{
    let result = 0;

    try {
        result = add(10, 20);
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log({ result });
    }
    // code output:
    // add is not defined
    // { result: 0 }
}

// Example 2:
{
    const add = (x, y) => x + y;

    let result = 0;

    try {
        result = add(10, 20);
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log({ result });
    }

    // code output:
    // { result: 30 }
}

// Example 3:
{
    function fn() {
        try {
            return 1;
        } catch {
            return 2;
        } finally {
            return 3;
        }
    }
    
    console.log(fn());
}

