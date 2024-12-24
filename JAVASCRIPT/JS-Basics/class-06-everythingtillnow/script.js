console.log("===== PART 1 =====");
/*

Exercise 1

Declare and initialize a variables of every type that we learned so far. Print each of them in a console or alert()!

*/
console.log("All datatypes determined");
function getType(value) {
  let type = typeof value;
  console.log(`The type of "${value}" is: ${type}`);
  return type;
}

// Calling the function
getType({});
getType(true);
getType(42);
getType("Hello World");
getType(undefined);
console.log("===== PART 2 =====");
//13 < 20 then 13 - 20 = 7 x 2 = 14

let number = 20;
function calculateDifference(number) {
  if (number > 13) {
    return (number - 13) * 2;
  } else {
    return number - 13;
  }
}

console.log(calculateDifference(10));
console.log(calculateDifference(73));

let targetNumber = 100; // Reference number
console.log("===== PART 3 =====");
//function findClosestToTarget() {
// Get two numbers from the user
let num1 = prompt("Enter the first integer:");
let num2 = prompt("Enter the second integer:");
//Convert inputs to integers
num1 = parseInt(num1);
num2 = parseInt(num2);
//Check if either number is negative
if (num1 < 0 || num2 < 0) {
  alert("Warning: One or both numbers are negative.");
}

// Calculate the absolute differences from the target number
let diff1 = Math.abs(num1 - targetNumber);
let diff2 = Math.abs(num2 - targetNumber);
//Compare the differences
if (diff1 < diff2) {
  alert(`${num1} is closer to ${targetNumber}`);
} else if (diff2 < diff1) {
  alert(`${num2} is closer to ${targetNumber}`);
} else {
  alert(`Both numbers are equally close to ${targetNumber}`);
}

// Call the function
//findClosestToTarget();
// Get user inputs dynamically
let salary = parseFloat(prompt("Enter your monthly salary:"));
let rent = parseFloat(prompt("Enter your monthly rent:"));
let bills = parseFloat(prompt("Enter your monthly bills:"));

// Calculate total expenses
let totalExpenses = rent + bills;

// Calculate the remaining amount
let remainingAmount = salary - totalExpenses;

// Output the results
alert(`Total Expenses: $${totalExpenses}`);
alert(`Remaining Amount: $${remainingAmount}`);
console.log(`Total Expenses: $${totalExpenses}`);
console.log(`Remaining Amount: $${remainingAmount}`);
/*
One student has 5 exams in the first semester. 
His/Her grades for all of the exams are 10, 6, 8, 9, 6 respectively.
The professor told the students that for passing the first semester they must have average of 8.
The student needs to know whether they have passed the semester or not.
Alert on screen if the student pass or not!
*/
