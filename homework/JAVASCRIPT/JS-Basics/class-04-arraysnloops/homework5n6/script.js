console.log("======= HOMEWORK 5 =======");
/*
LOOPING STRUCTURES, Write a javascript function that will return:
The sum of the MAX and MIN numbers from an array with numbers.
Example: array - [3,4,6,8,11] output: Max:11, Min:3, Sum:14
*/

function MaxplusMinsum(array) {
  let max = Math.max(...array); // Find the largest number
  let min = Math.min(...array); // Find the smallest number
  let sum = max + min; // Add them together
  return sum; // Return the result
}

let numberz = [21, 1, 63, 85, 5];
let result = MaxplusMinsum(numberz); // Call the function and store the result
console.log(numberz);
console.log(result);

console.log("======= HOMEWORK 6 =======");
/**
Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

// Example usage:
let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];
let full = getFullNames(first, last);
console.log(full);
 */
function combineNames() {
  let firstNames = ["Jake", "Jana", "Dimitri"];
  let lastNames = ["Boboski", "Kozarovska", "Vladimiryovic"];
  let fullNames = [];

  for (let i = 0; i < firstNames.length; i++) {
    fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
  }

  console.log(fullNames); // This will log the fullNames array when the function is called
}

// Call the function to see the result
combineNames();
