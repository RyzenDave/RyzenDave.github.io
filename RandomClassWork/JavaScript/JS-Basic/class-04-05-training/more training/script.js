//13 < 20 then 13 - 20 = 7 x 2 = 14

//let number = 20;
//function calculateDifference(number) {
//if (number > 13) {
//return (number - 13) * 2;
//} else {
//return number - 13;
//}
//}

//console.log(calculateDifference(10));
//console.log(calculateDifference(73));

//let targetNumber = 100; // Reference number

//function findClosestToTarget() {
// Get two numbers from the user
//let num1 = prompt("Enter the first integer:");
//let num2 = prompt("Enter the second integer:");

// Convert inputs to integers
//num1 = parseInt(num1);
//num2 = parseInt(num2);

// Check if either number is negative
//if (num1 < 0 || num2 < 0) {
//alert("Warning: One or both numbers are negative.");
//}

// Calculate the absolute differences from the target number
//let diff1 = Math.abs(num1 - targetNumber);
//let diff2 = Math.abs(num2 - targetNumber);

// Compare the differences
//if (diff1 < diff2) {
//alert(`${num1} is closer to ${targetNumber}`);
//} else if (diff2 < diff1) {
//alert(`${num2} is closer to ${targetNumber}`);
//} else {
//alert(`Both numbers are equally close to ${targetNumber}`);
//}
//}

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
