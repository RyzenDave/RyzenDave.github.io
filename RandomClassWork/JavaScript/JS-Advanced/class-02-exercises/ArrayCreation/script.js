console.log(
  "Generate an array that has all the numbers that are divisible by 3 from 1 to 1000"
);
// Step 1: Create an empty array to store numbers
let divisibleByThree = [];

// Step 2: Loop from 1 to 1000
for (let i = 1; i <= 1000; i++) {
  // Step 3: Check if the number is divisible by 3
  if (i % 3 === 0) {
    // Step 4: If true, add it to the array
    divisibleByThree.push(i);
  }
}

// Step 5: The array now contains all the numbers
console.log("ALL ELEMENTS DIVISABLE BY 3");
console.log(divisibleByThree);

console.log(
  "Generate an array that has all the numbers that are divisible by 4 from 1 to 1000"
);
// Step 1: Create an empty array to store numbers
let divisibleByFour = [];

// Step 2: Loop from 1 to 1000
for (let i = 1; i <= 1000; i++) {
  // Step 3: Check if the number is divisible by 4
  if (i % 4 === 0) {
    // Step 4: If true, add it to the array
    divisibleByFour.push(i);
  }
}

// Step 5: The array now contains all the numbers
console.log("ALL ELEMENTS DIVISABLE BY 4");
console.log(divisibleByFour);
console.log(
  "Generate an array that has all the numbers from 1 to 1000 that end with 1"
);
// Step 1: Create an empty array to store numbers
let numbersEndingWithOne = [];

// Step 2: Loop from 1 to 1000
for (let i = 1; i <= 1000; i++) {
  // Step 3: Check if the number ends with 1
  if (i % 10 === 1) {
    // Step 4: If true, add it to the array
    numbersEndingWithOne.push(i);
  }
}

// Step 5: The array now contains all the numbers
console.log(numbersEndingWithOne);
