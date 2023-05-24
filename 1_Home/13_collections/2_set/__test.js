let set = {
    chars: new Set(['a', 'b', 'c']),
}

// Create a new Set from an Array
{
    console.log("Topic: Create a new Set from an Array\n");

    let chars = new Set(['a', 'a', 'b', 'c', 'c']);
    console.log(chars); // Set(3) { 'a', 'b', 'c' }

    console.log(typeof chars); // object

    let result = chars instanceof Set;
    console.log(result); // true

    console.log("\n");
}

// Get the size of a Set
{
    console.log("Topic: Get the size of a Set\n");

    let size = set.chars.size;

    console.log(size); // 3
    
    console.log("\n");
}

// Add elements to a Set
{
    console.log("Topic: Add elements to a Set\n");

    set.chars.add('d')
             .add('e');

    console.log(set.chars);
    // Set(5) { 'a', 'b', 'c', 'd', 'e' }

    console.log("\n");
}

// Chech if a value is in the Set
{
    console.log("Topic: Chech if a value is in the Set\n");

    let exist = set.chars.has('e');
    console.log(exist); // true

    console.log("\n");
}

// Remove elements from a Set
{
    console.log("Topic: Remove elements from a Set\n");

    set.chars.delete("e");
    console.log(set.chars);
    // Set(4) { 'a', 'b', 'c', 'd' }

    console.log("\n");
}

// Looping the elements of a JS Set
{
    console.log("Topic: Looping the elements of a JS Set\n");

    let roles = new Set();
    roles.add("admin")
         .add("editor")
         .add("subscriber");

    for (const role of roles) {
        console.log(role);
    }
    // Outputs:
    // admin
    // editor
    // subscriber

    console.log("");

    for (const [key, value] of roles.entries()) {
        console.log(key == value);
    }
    // Outputs:
    // true
    // true
    // true

    console.log("\n");
}

// Invoke callback function on each element of a Set
{
    console.log("Topic: Invoke callback function on each element of a Set\n");
    
    let roles = new Set();
    roles.add("admin")
         .add("editor")
         .add("subscriber");
    
    roles.forEach(role => console.log(role.toUpperCase()));
    // Outputs:
    // ADMIN
    // EDITOR
    // SUBSCRIBER

    console.log("\n");
}

// WeakSets
{
    console.log("Topic: WeakSets\n");

    let computer = { type: "laptop" };
    let server = { type: "server" };
    let equipment = new WeakSet([computer, server]);

    if (equipment.has(server)) {
        console.log("We have server!");
    } else {
        console.log("We don't have server!");
    }
    // Outputs:
    // We have server!

    console.log("\n");
}

// PRACTICE
{
    console.log("Topic: Practice\n");
    let randomSets = new Set();

    // add sets of unique values
    randomSets.add("random string");
    randomSets.add(null);
    randomSets.add({ username: "ghost", major: "developer" });
    randomSets.add(15n);

    randomSets.forEach(unqkey => console.log(unqkey));
    // Outputs:
    // random string
    // null
    // { username: "ghost", major: "developer" }
    // 15n

    // delete some sets
    randomSets.delete("random string");

    console.log(randomSets);
    // Set(3) { null, { username: "ghost", major: "developer" }, 15n }

    console.log("\n");

    //#region 
    class CityRecord {
        #city;
        #population;
        #latitude;
        #altitude;
        constructor(city, population, latitude, altitude) {
            this.#city = city;
            this.#population = population;
            this.#latitude = latitude;
            this.#altitude = altitude;
        }
        iterate() {
            let result;
            while(true) {
                result = `City: ${this.#city}\nPopulation: ${this.#population}\nLatitude: ${this.#latitude}\nAltitude: ${this.#altitude}\n`;
                break;
            }
            return result;
        }
    }

    let cities = [
        new CityRecord("New York", 14433300, 214.42, 232.32),
        new CityRecord("London", 12480999, 14.42, 23.34),
        new CityRecord("Massachussets", 10433452, 656.33, 324.34),
    ];

    // FIRST METHOD
    for (const city of cities) {
        console.log(city.iterate());
    }

    // SECOND METHOD
    cities.forEach((city) => console.log(city.iterate()));

    //#endregion
}