// Select the inputs and button
const colorInput = document.getElementById("colorInput");
const fontSizeInput = document.getElementById("fontSizeInput");
const textInput = document.getElementById("textInput");
const generateButton = document.getElementById("generateButton");
const titlesContainer = document.getElementById("titlesContainer");

// Function to generate the title
function generateTitle() {
  // Get values from the inputs
  const color = colorInput.value;
  const fontSize = fontSizeInput.value + "px"; // Append 'px' to font size
  const text = textInput.value;

  // Create the new h1 element
  const newTitle = document.createElement("h1");

  // Set styles and text for the new h1
  newTitle.style.color = color;
  newTitle.style.fontSize = fontSize;
  newTitle.textContent = text;

  // Add the new h1 to the container
  titlesContainer.appendChild(newTitle);
}

// Add event listener to the button
generateButton.addEventListener("click", generateTitle);
