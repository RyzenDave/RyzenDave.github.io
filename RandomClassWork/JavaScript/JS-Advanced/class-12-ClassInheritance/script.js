// Base class: Employee
class Employee {
  static totalEmployees = 0; // static property to count employees

  constructor(firstName, lastName, age, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
    Employee.totalEmployees++; // increment employee count
  }

  printInfo() {
    console.log(
      `Employee: ${this.firstName} ${this.lastName}, Age: ${this.age}, Salary: $${this.salary}`
    );
  }

  // Static method to get total number of employees
  static getTotalEmployees() {
    return Employee.totalEmployees;
  }
}

// Subclass: Developer extends Employee
class Developer extends Employee {
  constructor(firstName, lastName, age, salary, programmingLanguages) {
    super(firstName, lastName, age, salary);
    this.programmingLanguages = programmingLanguages;
  }

  printInfo() {
    super.printInfo();
    console.log(
      `Role: Developer, Programming Languages: ${this.programmingLanguages.join(
        ", "
      )}`
    );
  }
}

// Subclass: Manager extends Employee
class Manager extends Employee {
  constructor(firstName, lastName, age, salary, department, teamSize) {
    super(firstName, lastName, age, salary);
    this.department = department;
    this.teamSize = teamSize;
  }

  printInfo() {
    super.printInfo();
    console.log(
      `Role: Manager, Department: ${this.department}, Team Size: ${this.teamSize}`
    );
  }
}

// Subclass: AutomationTester extends Employee
class AutomationTester extends Employee {
  constructor(firstName, lastName, age, salary, tools) {
    super(firstName, lastName, age, salary);
    this.tools = tools;
  }

  printInfo() {
    super.printInfo();
    console.log(
      `Role: Automation Tester, Automation Tools: ${this.tools.join(", ")}`
    );
  }
}

// Example usage:
console.log("===== Corporate Structure =====");

const dev = new Developer("Alice", "Johnson", 30, 90000, [
  "JavaScript",
  "Python",
  "Java",
]);
const manager = new Manager("Bob", "Smith", 45, 120000, "IT", 10);
const tester = new AutomationTester("Charlie", "Brown", 28, 70000, [
  "Selenium",
  "Appium",
  "TestComplete",
]);

dev.printInfo();
console.log("-------------------------------");
manager.printInfo();
console.log("-------------------------------");
tester.printInfo();

// Get total number of employees created
console.log("Total Employees: " + Employee.getTotalEmployees());
