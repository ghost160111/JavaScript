class CityRecord {    
    constructor(cityRecord) {
        this.cityRecord = cityRecord;
    }

    outputCityRecord() {
        return {
            cities: this.cityRecord,
        };
    }

    get CityRecord() { return this.cityRecord; }
    set CityRecord(value) { this.cityRecord.push(value); }

    // we method to insert, delete, and change properties
    // ...

    addToEnd(newCityRecord) {
        for (let i = 0; i < newCityRecord.length; i++) {
            [].push.call(this.cityRecord, newCityRecord[i]);
        }
    }
    addToStart(newCityRecord) {
        for (let i = 0; i < newCityRecord.length; i++) {
            [].unshift.call(this.cityRecord, newCityRecord[i]);
        }
    }
    removeFromEnd() {
        return [].pop.call(this.cityRecord);
    }
    removeFromStart() {
        return [].shift.call(this.cityRecord);
    }
    slice(start, end) {
        return [].slice.call(this.cityRecord, start, end);
    }
    findCityByName(cityName) {
        for (let i = 0; i < this.cityRecord.length; i++) {
            if (this.cityRecord[i].name === cityName) {
                return `Index of number: ${i} is the index of city (${cityName}) that you are looking for.`;
            }
        }
    }

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

let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let anotherCities = [
    { name: "Tashkent", population: 30_000_000 },
    { name: "London", population: 4_500_500 },
    { name: "Hamburg", population: 3_500_800 },
];

let citiesRecord = new CityRecord(cities);

const getResult = () => citiesRecord.outputCityRecord();
const findCity = (name) => citiesRecord.findCityByName(name);
const filterByPopulation = (popGreaterThan = true, popQty = 0) => {
    return citiesRecord.filterByPopulation(popGreaterThan, popQty);
}

let resultOfFilter = filterByPopulation(false, 3_000_000); // false condition <
//console.log(resultOfFilter);

citiesRecord.addToEnd(anotherCities);
citiesRecord.addToStart([{city: "City 1", population: 3_000_000}]);
citiesRecord.removeFromEnd();
citiesRecord.removeFromStart();

console.log(findCity("Houston"));

//console.log(citiesRecord.slice(0, 3));
//console.log(getResult());

// almost same approach by
// using map

class CityMap {
    constructor(cities) {
        this.cities = cities;
    }
    setKeyValue(key, value) {
        return this.cities.set(key, value);
    }
    hasKey(key) {
        let check = this.cities.has(key),
            result = "";
        if (check) {
            if (typeof this.cities.get(key) === "object") {
                result = `Map has the key ${key}.`;
                return result;
            } else {
                result = `Map has the key ${key} with the value of ${this.cities.get(key)}.`;
                return result;
            }
        }
        else {
            result = `There is no key like ${key}`;
            return result;
        }
    }
    deleteKeyValue(key) {
        if (this.cities.has(key)) {
            return this.cities.delete(key);
        }
        else {
            return `There is no key like ${key} for your deletion.`;
        }
    }
    clearMap() {
        return this.cities.clear();
    }
    output() {
        return this.cities;
    }
}

const CITIES_MAP = new Map();

const cityMap = new CityMap(CITIES_MAP);

const addMaps = (arr_data) => {
    for (const value of arr_data) {
        cityMap.setKeyValue(value.name, ...arr_data);
    }
}
addMaps(cities);

cityMap.deleteKeyValue("Tashkent"); // 'Tashkent' deleted
cityMap.setKeyValue("Tashkent", {name: "Tashkent", population: 30_000_000});
//cityMap.clearMap(); // clear everything in a map and lefts 0 entries

let check = cityMap.hasKey("Tashkent");
console.log(check);

console.log("\nCityMap");
console.log(cityMap.output());

// what is best about Maps is that you can have keys and related values for the keys
// where for values you can insert any type you want and for keys is better to set types like strings, numbers
// but setting numbers and incrementing them, like from 0 to Infinity doesn't make a sense because the array uses the same approach
// but setting specific numbers does make a sense, but you document the meaning of that numbers
// so the best type for that I would say strings
// example: city record where key is name of the city and the value is object containing properties like population, latitude, longtitude, anything
// and it's easy to find the city you by just entering the key or the name of a city to find the location and the value of the needed map
// you can construct it to the function so that it's more organized.

// That's all about MAPS

// What about SETS

const set = new Set();

set.add("key")
set.add("Key1");
set.add(true);

for (const value of set) {
    console.log(value);
}

