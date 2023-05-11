// EXAMPLE 1:
class Circle {
    #radius;

    constructor(value) {
        this.#radius = value;
    }

    get Area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }
}

let circle = new Circle(10);
console.log(circle.Area); // 314.1492653589793

// EXAMPLE 2:
class Circle2 {
    #radius = 0;

    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return (Math.PI * Math.pow(this.#radius, 2));
    }

    set radius(value) {
        if (typeof value === "number" && value > 0) {
            this.#radius = value;
        }
        else {
            throw "The radius must be a positive number";
        }
    }
    
    get radius() {
        return this.#radius;
    }
}

let circle2 = new Circle(10);
console.log(Circle.hasRadius(circle2)); // true
