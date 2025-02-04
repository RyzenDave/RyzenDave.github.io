console.log("================= HIGHER ORDER FUNCTIONS =================");

// ===> TEST DATA
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const students = [
  {
    id: 1,
    firstName: "Bob",
    lastName: "Bobsky",
    age: 20,
    gender: "Male",
    isActive: true,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Smith",
    age: 23,
    gender: "Male",
    isActive: false,
  },
  {
    id: 3,
    firstName: "Marie",
    lastName: "Mosky",
    age: 19,
    gender: "Female",
    isActive: true,
  },
  {
    id: 4,
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    gender: "Female",
    isActive: false,
  },
  {
    id: 5,
    firstName: "Ana",
    lastName: "Taylor",
    age: 21,
    gender: "Female",
    isActive: true,
  },
];

//Example 1: Find first even number larger than 20
const firstEvenNumber = numbers.find((num) => num % 2 === 0 && num > 20);
console.log(firstEvenNumber);
//Example 2: Find student starting on the letter J
const studentWithJ = students.find((student) =>
  student.firstName.startsWith("J")
);
console.log(studentWithJ);

console.log("");
console.log("===== Flat =====");
//Flatten Arrays
const subjects = [
  { title: `Javascript Basics`, difficulty: 1 },
  { title: `Javascript Advanced`, difficulty: 2 },
  { title: `Javascript Expert`, difficulty: 3 },
];
const flatSubjects = subjects.flat();
console.log(flatSubjects);
console.log("=== split (for strings) ===");
const str = "Hello World";
const flatStr = str.split(" ");
console.log(flatStr);
console.log("=== Reverse ===");
const numbersToReverse = [1, 2, 3, 4, 5];
const reversedNumbers = numbersToReverse.reverse();
console.log(reversedNumbers);

students.reverse();
console.log(students);
