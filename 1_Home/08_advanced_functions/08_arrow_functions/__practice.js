{
    function Car() {
        this.speed = 0;
    
        this.speedUp = function (speed) {
            this.speed = speed;
            setTimeout(function () {
                console.log(this.speed); // undefined
            }, 1000);
        };
    }
    
    let car = new Car();
    car.speedUp(50); // undefined
}

{
    function Car() {
        this.speed = 0;
    
        this.speedUp = function (speed) {
            this.speed = speed;
            let self = this;
            setTimeout(function () {
                console.log(self.speed);
            }, 2000);
        };
    }
    
    let car = new Car();
    car.speedUp(50); // 50;
}

{
    function Car() {
        this.speed = 0;
    
        this.speedUp = function (speed) {
            this.speed = speed;
            setTimeout(
                () => console.log(this.speed),
            1000)
        };
    }
    
    let car = new Car();
    car.speedUp(50); // 50
}