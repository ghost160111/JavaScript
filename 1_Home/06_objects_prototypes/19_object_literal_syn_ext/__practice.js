{
    function createMachine(name, status) {
        return {
            name,
            status,
        };
    }
    
    let name = 'Computer',
        status = 'On';
    
    let machine = {
       name,
       status,
    };
}

{
    let name = "machine name";
    let machine = {
        [name]: "server",
        "machine hours": 10000,
    };
    console.log(machine); // { 'machine name': 'server', 'machine hours': 10000 }
}

{
    let name = "Full Name";
    let user = {
        [name]: "John Marston",
        "Age of user": 28,
    };
}

{
    let prefix = "machine";
    let machine = {
        [prefix + " name"]: "server",
        [prefix + " hours"]: 10000,
    };

    console.log(machine); // { 'machine name': 'server', 'machine hours': 10000 }

    console.log(machine["machine name"]); // server
    console.log(machine["machine hours"]); // 10000
}