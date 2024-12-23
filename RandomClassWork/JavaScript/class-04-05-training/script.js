let array = [3.5, 2, "string", false, Infinity, NaN];

console.log(typeof true);
console.log(typeof {});
console.log(typeof 123);
console.log(typeof "Word");
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Infinity);
//Read 5 variables as user input and then print each of the variable types in the console
function parseInput(input) {
  // Check if the input is a number
  if (!isNaN(input) && input.trim() !== "") {
    return parseFloat(input); // Convert to a number
  }

  // Check if the input is a boolean
  if (input.toLowerCase() === "true") {
    return true; // Convert "true" to boolean true
  }
  if (input.toLowerCase() === "false") {
    return false; // Convert "false" to boolean false
  }

  // Otherwise, treat it as a string
  return input;
}

let keepGoing = true;

while (keepGoing) {
  let userInput = prompt("Please enter any value:");

  // Parse the input to its proper type
  let parsedInput = parseInput(userInput);

  // Show the value and its type
  alert(`WHAT YOU ENTERED IS: ${parsedInput} (Type: ${typeof parsedInput})`);

  // Ask if the user wants to continue
  let continueInput = prompt(
    "Do you want to enter another value? (yes/no)"
  ).toLowerCase();
  if (continueInput === "no") {
    keepGoing = false;
    alert("Goodbye!");
  }
}
