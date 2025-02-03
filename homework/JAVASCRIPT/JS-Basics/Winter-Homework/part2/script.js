// Arrays for number names
const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const thousands = ["", "thousand", "million"];

// Function to convert number to words
function convertNumberToWords(number) {
  if (number === 0) return "zero";

  let word = "";
  let chunkCount = 0;

  while (number > 0) {
    const chunk = number % 1000;
    if (chunk > 0) {
      const chunkWord = convertChunk(chunk);
      word =
        chunkWord +
        (thousands[chunkCount] ? " " + thousands[chunkCount] : "") +
        " " +
        word;
    }
    number = Math.floor(number / 1000);
    chunkCount++;
  }

  return word.trim();
}

// Function to convert chunks (e.g., hundreds, tens, ones) to words
function convertChunk(chunk) {
  let word = "";

  const hundreds = Math.floor(chunk / 100);
  if (hundreds > 0) {
    word += ones[hundreds] + " hundred ";
  }

  const remainder = chunk % 100;
  if (remainder >= 10 && remainder < 20) {
    word += teens[remainder - 10] + " ";
  } else {
    const tensPlace = Math.floor(remainder / 10);
    if (tensPlace > 0) {
      word += tens[tensPlace] + " ";
    }
    const onesPlace = remainder % 10;
    if (onesPlace > 0) {
      word += ones[onesPlace] + " ";
    }
  }

  return word.trim();
}

// Function to handle the conversion process
function convertNumber() {
  const input = document.getElementById("number-input").value;
  const number = parseInt(input, 10);
  const errorMessage = document.getElementById("error-message");
  const output = document.getElementById("output");

  // Clear previous error message
  errorMessage.textContent = "";

  // Validate the input
  if (isNaN(number) || number < 0 || number > 1000000) {
    errorMessage.textContent =
      "Please enter a valid number between 0 and 1,000,000.";
    output.textContent = "";
  } else {
    const word = convertNumberToWords(number);
    output.textContent = word;
  }
}
