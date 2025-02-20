console.log(`===== INHERITANCE EXAMPLES =====`);

// Developer constructor
function Developer(firstName, lastName, age, salary, programmingLanguages) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.salary = salary;
  this.programmingLanguages = programmingLanguages ?? [];
  this.printInfo = function () {
    console.log(
      `Employee ${this.firstName} ${this.lastName} Age: ${this.age} Salary: ${this.salary}`
    );
  };
}

// Tester constructor
function Tester(firstName, lastName, age, salary, bugsFound) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.salary = salary;
  this.bugsFound = bugsFound;
  this.printInfo = function () {
    console.log(
      `Employee ${this.firstName} ${this.lastName} Age: ${this.age} Salary: ${this.salary}`
    );
  };
  this.testSoftware = function () {
    console.log(
      `${this.firstName} is testing the software and found ${this.bugsFound} bugs.`
    );
  };
}

// Manager constructor (completed like the Developer example)
function Manager(firstName, lastName, age, salary, team) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.salary = salary;
  this.team = team ?? []; // team should be an array of employees
  this.printInfo = function () {
    console.log(
      `Employee ${this.firstName} ${this.lastName} Age: ${this.age} Salary: ${this.salary}`
    );
  };
  this.manageTeam = function () {
    console.log(
      `${this.firstName} is managing a team of ${this.team.length} employees.`
    );
  };
  this.organizeMeeting = function () {
    console.log(`${this.firstName} has just organized a meeting`);
  };
}
const darko = new Developer("Darko", "Darkovski", 23, 5000, [
  "Javascript",
  "C#",
]);
darko.printInfo();
console.log(darko);

const robert = new Manager("Robert", "Robertski", 32, 5500, "62");
robert.printInfo();
robert.organiseMeeting();
