// 1. Count digits in a number
function countDigits(number) {
  return Math.abs(number).toString().length;
}

// 2. Check if number is even or odd
function isEvenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// 3. Check if number is positive, negative, or zero
function checkPositiveNegative(number) {
  if (number > 0) return "Positive";
  if (number < 0) return "Negative";
  return "Zero";
}

// 4. Main function that combines all checks
function analyzeNumber(number) {
  console.log(`Number: ${number}`);
  console.log(`Number of digits: ${countDigits(number)}`);
  console.log(`Even or Odd: ${isEvenOrOdd(number)}`);
  console.log(`Positive or Negative: ${checkPositiveNegative(number)}`);
  console.log("---------------------");
}

// Example usage:
analyzeNumber(42);
analyzeNumber(-7);
analyzeNumber(0);
analyzeNumber(3.14);
