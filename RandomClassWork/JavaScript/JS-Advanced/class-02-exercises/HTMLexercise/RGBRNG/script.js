// Function to fuckin generate a random number between 0 and 255
function getRandomValue() {
  return Math.floor(Math.random() * 256);
}

// Generate the fuckin RGB color
const red = getRandomValue();
const green = getRandomValue();
const blue = getRandomValue();

const randomColor = `rgb(${red}, ${green}, ${blue})`;

// Apply the fuckin background color
document.body.style.backgroundColor = randomColor;

// Display the fuckin RGB values in the center
document.getElementById("colorDisplay").textContent = randomColor;
