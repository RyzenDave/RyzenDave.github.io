console.log("===== Pure Functions =====");
// Function for adding an element to an array

const impureArray = [1, 2, 3, 4, 5];

function addToArrayImpure(arr, element) {
  arr.push(element);
}

addToArrayImpure(impureArray, 6);
console.log("Impure Array: ", impureArray);

const pureArray = [1, 2, 3, 4, 5];

function addToArrayPure(arr, element) {
  return [...arr, element];
}

const resultPure = addToArrayPure(pureArray, 6);
console.log("Pure Array: ", resultPure);
console.log("Original Pure Array: ", pureArray);
