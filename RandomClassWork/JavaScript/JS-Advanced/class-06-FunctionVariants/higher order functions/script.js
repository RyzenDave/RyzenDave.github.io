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

// Extract ages using map
const ages = students.map((student) => student.age);

console.log(ages); // Output: [20, 23, 19, 22, 21]
students.forEach((student) => {
  console.log(`${student.firstName} ${student.lastName} (Age: ${student.age})`);
});

// Output:
// Bob Bobsky (Age: 20)
// John Smith (Age: 23)
// Marie Mosky (Age: 19)
// Jane Doe (Age: 22)
// Ana Taylor (Age: 21)

// Students over 20
const over20 = students.filter((student) => student.age > 20);
console.log(over20);
// Output: John (23)// Students under 20
const under20 = students.filter((student) => student.age < 20);
console.log(under20);
const studentsById = students.reduce((acc, student) => {
  acc[student.id] = student; // Use ID as the key
  return acc;
}, {}); // Start with empty object

console.log(studentsById[3]);
// Output: { id:3, firstName:"Marie", ... }
const studentWithId3 = students.find((student) => student.id === 3);
console.log(studentWithId3);
// Output: Marie's object
