// Assuming the Car class is defined as follows:
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

// ElectricCar class that inherits from Car
class ElectricCar extends Car {
  static totalElectricCars = 0; // Static counter for ElectricCar instances

  constructor(brand, model, speed, batteryLevel) {
    super(brand, model, speed); // Call the parent constructor
    this.batteryLevel = batteryLevel; // Additional property for ElectricCar
    ElectricCar.totalElectricCars++; // Increment the counter for every instance created
  }

  // Method to increase the battery level by 10
  chargeBattery() {
    this.batteryLevel += 10;
    console.log(`Battery charged. New battery level: ${this.batteryLevel}`);
  }

  // Static method to return the total number of ElectricCar instances
  static getTotalElectricCars() {
    return ElectricCar.totalElectricCars;
  }
}

// Example usage:
const tesla = new ElectricCar("Tesla", "Model 3", 250, 80);
console.log(tesla.getCarInfo());
console.log(`Initial Battery Level: ${tesla.batteryLevel}%`);
tesla.chargeBattery(); // Battery increases by 10

const nissanLeaf = new ElectricCar("Nissan", "Leaf", 150, 70);
console.log(nissanLeaf.getCarInfo());
console.log(`Initial Battery Level: ${nissanLeaf.batteryLevel}%`);

// Check total ElectricCar instances
console.log(`Total Electric Cars: ${ElectricCar.getTotalElectricCars()}`);
