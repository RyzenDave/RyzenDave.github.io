// Assuming Employee class is defined as:
class Employee {
  constructor(firstName, lastName, age, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
  }

  printInfo() {
    console.log(
      `Employee: ${this.firstName} ${this.lastName}, Age: ${this.age}, Salary: ${this.salary}`
    );
  }
}
const newEmployee = ("David", "Bazouki");
console.log("")
// Developer class extends Employee
class Developer extends Employee {
  constructor(firstName, lastName, age, salary, programmingLanguages) {
    // Call the parent class constructor for common properties
    super(firstName, lastName, age, salary);
    // Additional property specific to Developer
    this.programmingLanguages = programmingLanguages || [];
  }

  // Override printInfo to include developer-specific info
  printInfo() {
    console.log(
      `Developer: ${this.firstName} ${this.lastName}, Age: ${this.age}, Salary: ${this.salary}, ` +
        `Languages: ${this.programmingLanguages.join(", ")}`
    );
  }
}

// Example usage:
const dev1 = new Developer("Alice", "Smith", 28, 90000, [
  "JavaScript",
  "Python",
  "C#",
]);
dev1.printInfo();
// Output: Developer: Alice Smith, Age: 28, Salary: 90000, Languages: JavaScript, Python, C++
