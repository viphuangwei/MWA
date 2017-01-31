class Car {
    public acceleration: number = 0;
    constructor(public name: string) {}
    honk(): void {
        console.log('${this.name} is saying :Toooooooooon');
    }
    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);