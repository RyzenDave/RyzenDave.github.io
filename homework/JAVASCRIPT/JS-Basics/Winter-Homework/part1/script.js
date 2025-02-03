// DOM Elements
const display = document.getElementById("display");

// Append number to display
function appendNumber(number) {
  if (display.value === "0" && number !== ".") {
    display.value = number; // Replace leading zero
  } else {
    display.value += number;
  }
}

// Append operator to display
function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) {
    // Prevent multiple operators in a row
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Perform calculation
function calculate() {
  try {
    const result = eval(display.value); // Use eval carefully
    display.value = result;
  } catch (error) {
    alert("Invalid Expression!");
    clearDisplay();
  }
}
