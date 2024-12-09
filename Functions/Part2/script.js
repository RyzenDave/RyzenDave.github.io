// Function to convert dog years to human years
function dogToHuman(dogAge) {
  return dogAge * 7;
}

// Function to convert human years to dog years
function humanToDog(humanAge) {
  return humanAge / 7;
}

// Prompt the user to choose between Dog-->Human or Human-->Dog
let choice = prompt(
  "Do you want to convert Dog-->Human years or Human-->Dog years? Type 'dog' for Dog-->Human or 'human' for Human-->Dog"
);
choice = choice.toLowerCase();

// Function to handle Dog-->Human conversion
function handleDogToHuman() {
  let dogAge = prompt("Enter dog's age in dog years:");
  let humanAge = dogToHuman(dogAge); // Call the dogToHuman function
  alert("The dog's age in human years is: " + humanAge);
}

// Function to handle Human-->Dog conversion
function handleHumanToDog() {
  let humanAge = prompt("Enter human's age in human years:");
  let dogAge = humanToDog(humanAge); // Call the humanToDog function
  alert("The human's age in dog years is: " + dogAge);
}

// Call the appropriate function based on user choice
switch (choice) {
  case "dog":
    handleDogToHuman(); // Call the function to convert dog years to human years
    break;
  case "human":
    handleHumanToDog(); // Call the function to convert human years to dog years
    break;
  default:
    alert("Invalid input! Please type 'dog' or 'human'.");
}
