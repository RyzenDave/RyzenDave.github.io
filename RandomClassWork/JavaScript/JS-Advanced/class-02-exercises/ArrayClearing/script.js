console.log(
  `Create a function that cleans an array 
  of any values and leaves only STRINGS`
);
function cleanArray(arr) {
  // Use the filter method to keep only strings
  return arr.filter((item) => typeof item === "string");
}

// Example usage:
let test = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];
function cleanArrayNumbers(arr) {
  // Use the filter method to keep only numbers
  return arr.filter((item) => typeof item === "number");
}

// Test the function
const mixedArray = [42, "hello", true, 99, null, 100, "JavaScript", {}, []];
const numbersOnly = cleanArrayNumbers(mixedArray);

console.log(numbersOnly); // Output: [42, 99, 100]
function cleanArray(arr) {
  return arr.filter(
    (item) =>
      item !== undefined &&
      item !== null &&
      item !== false &&
      item !== "" &&
      !Number.isNaN(item)
  );
}

// Example usage:
const mix = [0, "hello", undefined, null, NaN, false, "", "world", true, 42];
const cleanedArray = cleanArray(mix);

console.log(cleanedArray); // Output: [0, "hello", "world", true, 42]
