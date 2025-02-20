class Car {
  constructor(brand, model, speed) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
  }

  // Method to get car information
  getCarInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}, Speed: ${this.speed} km/h`;
  }
}

// Example usage:
const myCar = new Car("Toyota", "Corolla", 180);
console.log(myCar.getCarInfo());
