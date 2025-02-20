// Define a class Person with properties: firstName, lastName, and age
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Method that returns the full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create a class Student that inherits from Person
class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age); // Call the parent class constructor
    this.grade = grade; // Additional property for Student: grade
  }

  // Method that returns the student's full name and grade
  getStudentInfo() {
    return `Student: ${this.getFullName()}, Grade: ${this.grade}`;
  }
}

// Example usage
const student = new Student("John", "Doe", 20, 90);
console.log(student.getFullName()); // Output: John Doe
console.log(student.getStudentInfo()); // Output: Student: John Doe, Grade: 90
