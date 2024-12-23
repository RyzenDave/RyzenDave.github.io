// Get the button and input elements from the DOM
var button = document.querySelector("button");
var input = document.querySelector("input");

// Define the function that will be triggered when the button is clicked
function greetUser() {
  var name = input.value; // Get the value entered in the input field
  // Display a prompt asking for a response, with a message including the entered name
  var userResponse = prompt("Hello " + name + ", how are you?");

  // If the user enters a response, alert it
  if (userResponse !== null) {
    alert("You said: " + userResponse);
  }
}

// Attach the function to the click event of the button
button.addEventListener("click", greetUser);
