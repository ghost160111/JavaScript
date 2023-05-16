{
    function getNames() {
        // get names from the database or API
        let firstName = "John",
            lastName = "Marston";
    
        // return as an array
        return [firstName, lastName];
    }
    
    let names = getNames();
    console.log(names); // [ 'John', 'Marston' ]
    
    const [ firstName, lastName ] = getNames();
    
    console.log(`${firstName} ${lastName}`);
    // John Marston
}

{
    function getNames() {
        // get names from the database or API
        let firstName = "John",
            lastName = "Marston";

        // return values
        return {
            "firstName": firstName,
            "lastName": lastName,
        };
    }

    let names = getNames();
    console.log(names);
    // { firstName: 'John', lastName: 'Marston' }
}

{
    function getNames() {
        // get names from the database or API
        let firstName = "John",
            lastName = "Marston";

        return { firstName, lastName };
    }

    let names = getNames();

    //let firstName = names.firstName,
    //    lastName = names.lastName;

    let { firstName, lastName } = getNames();

    console.log(firstName); // John
    console.log(lastName);  // Marston
}

