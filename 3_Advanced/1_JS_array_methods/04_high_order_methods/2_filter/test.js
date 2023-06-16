let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}

console.log(bigCities); /*
[
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 }
]
*/

let bigCities2 = cities.filter(function (el) {
    return el.population > 3000000;
});

console.log(bigCities2); /*
[
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 }
]
*/

let bigCities3 = cities.filter((el) => el.population > 3000000);
console.log(bigCities3);

cities
    .filter(city => city.population < 3000000)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ": " + city.population));

// Philadelphia: 1526006
// Houston: 2099451
// Chicago: 2695598

function isInRange(value) {
    if (typeof value !== "number") {
        return false;
    }
    return value >= this.lower && value <= this.upper;
}