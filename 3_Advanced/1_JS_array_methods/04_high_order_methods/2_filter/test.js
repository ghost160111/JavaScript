class CityRecord2 {
    constructor(...cityRecord) {
        this.cityRecord = cityRecord;
    }
    addToEnd(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.cityRecord.push.call(this.cityRecord, arr[i]);
        }
    }
    output() {
        return {
            cities: [...this.cityRecord],
        };
    }
}

let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

console.log("======================");
const cityRecord2 = new CityRecord2(...cities);
cityRecord2.addToEnd(cities);
console.log(cityRecord2.output());
console.log("======================");