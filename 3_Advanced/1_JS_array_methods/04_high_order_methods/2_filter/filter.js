// filter() array method

const users = [
    { username: "John12441", age: 25 },
    { username: "Ghost21412", age: 30 },
    { username: "jetpack2000", age: 40 },
];

users.filter((user, index, array) => {
    try {
        if (user.age > 25) {
            return user;
        } else {
            return "There is no user with the age greater than 25";
        }
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
});


let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let bigCities = [];

function addBigCities(arrFrom, arrTo) {
    for (let i = 0; i < arrFrom.length; i++) {
        if (arrFrom[i].population > 3_000_000) {
            arrTo.push(arrFrom[i]);
        }
    }
}
addBigCities(cities, bigCities);

console.log(bigCities); // [ { name: 'Los Angeles', population: 3792621 },{ name: 'New York', population: 8175133 } ]

// 2nd way of doing that using filter() method

function addBigCities2nd(arrFrom) {
    let bigCities2ndWay = arrFrom.filter((city, index, array) => {
        return city.population > 3_000_000;
    });
    return bigCities2ndWay;
}

let result = addBigCities2nd(cities);
console.log(result);

// same result :)
// both ways are super correct, you can modify these functions or even store them to class so that you organize everything.

// filter() function is mainly for shorter manipulation with arrays 

let bigCitiesInShort = cities.filter(city => city.population > 3_000_000);
console.log(bigCitiesInShort); // same result as the previous examples

// quick syntax:
// function callback(currentElement, index, array) { ... }

// More JS array filter() method examples

cities
    .filter(city => city.population < 3_000_000)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ": " + city.population));

// Outputs:
// Philadelphia: 1526006
// Houston: 2099451
// Chicago: 2695598

// The following example illustrates the use of the contextObject argument that specifies an object which can be referenced in the callback() function using the this keyword

function isInRange(value) {
    if (typeof value !== "number") {
        return false;
    }
    return value >= this.lower && value <= this.upper;
}

let data = [10, 20, "30", 1, 5, "JavaScript Filter", undefined, "example"];

let range = {
    lower: 1,
    upper: 10,
};

let numberInRange = data.filter(isInRange, range);

console.log(numberInRange); // [ 10, 1, 5 ]

class CityRecord {    
    constructor(cityRecord) {
        this.cityRecord = cityRecord;
    }

    outputCityRecord() {
        return {
            cities: this.cityRecord,
        };
    }

    get CityRecord() {
        return this.cityRecord;
    }

    set CityRecord(value) {
        this.cityRecord.push(value);
    }

    // we method to insert, delete, and change properties
    // ...

    addToEnd() {}
    addToStart() {}
    removeFromEnd() {}
    removeFromStart() {}

    filterByPopulation(popGreaterThan = true, popQty = 0) {
        let filteredList = [];

        try {
            if (popGreaterThan === true && popQty !== 0) {
                for (let i = 0; i < this.cityRecord.length; i++) {
                    if (this.cityRecord[i].population > popQty) {
                        filteredList.push(this.cityRecord[i]);
                    }
                }
            }
            else if (popGreaterThan === false && popQty !== 0) {
                for (let i = 0; i < this.cityRecord.length; i++) {
                    if (this.cityRecord[i].population < popQty) {
                        filteredList.push(this.cityRecord[i]);
                    }
                }
            }
            else {
                throw new Error("Population qty can't be less than 0");
            }
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        }

        return filteredList;
    }
}

let citiesRecord = new CityRecord(cities);

const getResult = () => citiesRecord.outputCityRecord();
console.log(getResult());

function filterByPopulation(popGreaterThan = true, popQty = 0) {
    return citiesRecord.filterByPopulation(popGreaterThan, popQty);
}

let resultOfFilter = filterByPopulation(false, 3_000_000); // false condition <
console.log(resultOfFilter);

let anotherCities = [
    { name: "Tashkent", population: 30_000_000 },
];

console.log(citiesRecord.cityRecord = { name: "Tashkent", population: 30_000_000 });



