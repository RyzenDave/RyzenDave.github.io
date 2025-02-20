// Base class: Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  // A generic sound method that can be overridden
  makeSound() {
    console.log(`${this.name} makes a generic sound.`);
  }
}

// Subclass: Bird overrides makeSound()
class Bird extends Animal {
  constructor(name) {
    super(name); // Calls the Animal constructor
  }

  // Overridden method for Bird
  makeSound() {
    console.log(`${this.name} chirps!`);
  }
}

// Subclass: Dog overrides makeSound()
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  // Overridden method for Dog
  makeSound() {
    console.log(`${this.name} barks!`);
  }
}

// Create instances
const genericAnimal = new Animal("Generic Animal");
const dove = new Bird("Dove");
const buddy = new Dog("Buddy");

// Use polymorphism: we can call makeSound() on any animal,
// and it will use the method defined for its specific type.
genericAnimal.makeSound(); // Output: "Generic Animal makes a generic sound."
dove.makeSound(); // Output: "Dove chirps!"
buddy.makeSound(); // Output: "Buddy barks!"

// You can also put them in an array and call makeSound() in a loop
const animals = [genericAnimal, dove, buddy];
animals.forEach((animal) => animal.makeSound());
