let counter = {
    count: 0,
    next: function() {
        return ++this.count;
    },
};

let i = counter.next();
console.log(i); // 1

globalThis.color = "Red";
console.log(globalThis.color); // Red

let car = {
    brand: "Honda",
    getBrand: function() {
        return this.brand;
    },
};

//let brand = car.getBrand;
//console.log(brand()); // undefined

let brand = car.getBrand.bind(car);
console.log(brand()); // Honda

{
    let car = {
        brand: "Honda",
        getBrand: function() {
            return this.brand;
        },
    };

    let bike = {
        brand: "Harley Davidson",
    };

    let brand = car.getBrand.bind(bike);
    console.log(brand()); // Harley Davidson
}

{
    function getBrand(prefix) {
        console.log(prefix + this.brand);
    }
    
    let honda = {
        brand: "Honda",
    };
    
    let audi = {
        brand: "Audi",
    };
    
    getBrand.call(honda, "It's a "); // It's a Honda
    getBrand.call(audi, "It's an "); // It's an Audi
}
