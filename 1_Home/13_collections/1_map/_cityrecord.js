//#region CityRecord
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
        while (true) {
            result = `City: ${this.#city}\nPopulation: ${this.#population}\nLatitude: ${this.#latitude}\nAltitude: ${this.#altitude}\n`;
            break;
        }
        return result;
    }
}

let citiesMap = new Map();

citiesMap
    .set("NYC", new CityRecord("New York", 14433300, 214.42, 232.32))
    .set("LOD", new CityRecord("London", 12480999, 14.42, 23.34))
    .set("MSC", new CityRecord("Massachussets", 10433452, 656.33, 324.34));

const getCityData = (cityKey) => {
    if (citiesMap.keys(cityKey) !== undefined || null)
        console.log(citiesMap.get(cityKey).iterate());
    else
        console.log('There is no city like this: "' + cityKey + '"');
}

const getAllCitiesList = () => {
    for (const city of citiesMap.values()) {
        console.log(city.iterate());
    }
}

const getAllCitiesList2ndVersion = () => citiesMap.forEach(city => console.log(city.iterate()));

//getCityData("NYC");           // Gets data about city by specific key entered
//getAllCitiesList();           // Gets data about whole record
//getAllCitiesList2ndVersion(); // Gets data about whole record 2nd version

//#endregion
