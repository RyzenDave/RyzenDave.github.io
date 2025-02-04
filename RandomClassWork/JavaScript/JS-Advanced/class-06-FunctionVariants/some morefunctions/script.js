console.log("");
console.log("======= Creating a copy of an array =======");

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function copyArray(array) {
  let copy = [];
  array.forEach((item) => copy.push(item));
  return copy;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = copyArray(originalArray);
console.log(copiedArray); // Output: [1, 2, 3, 4, 5]
