console.log("============ Array Variants ============");

let mixedArray = [true, 234, "String", NaN, undefined, 12_343_223];

console.log("=========== built in array methods ============");

// push(item) - Adds an item to the end of the array
mixedArray.push(123);
console.log("After push:", mixedArray);

// pop() - Removes the last item from the array
mixedArray.pop();
console.log("After pop:", mixedArray);

// shift() - Removes the first item from the array
mixedArray.shift();
console.log("After shift:", mixedArray);

// unshift(item) - Adds an item to the beginning of the array
mixedArray.unshift("New Item");
console.log("After unshift:", mixedArray);

// concat(array) - Merges two or more arrays
let newArray = mixedArray.concat([1, 2, 3]);
console.log("After concat:", newArray);

// slice(start, end) - Extracts a section of the array
let slicedArray = mixedArray.slice(1, 3);
console.log("After slice:", slicedArray);

// splice(start, deleteCount, item1, item2, ...) - Adds/Removes items to/from the array
mixedArray.splice(2, 1, "Replaced Item");
console.log("After splice:", mixedArray);

// forEach(callback) - Executes a function for each array element
mixedArray.forEach((item) => console.log("forEach item:", item));

// map(callback) - Creates a new array with the results of calling a function for every array element
let mappedArray = mixedArray.map((item) => typeof item);
console.log("After map:", mappedArray);

// filter(callback) - Creates a new array with all elements that pass the test implemented by the provided function
let filteredArray = mixedArray.filter((item) => typeof item === "number");
console.log("After filter:", filteredArray);

// reduce(callback, initialValue) - Executes a reducer function on each element of the array, resulting in a single output value
let reducedValue = mixedArray.reduce(
  (acc, item) => acc + (typeof item === "number" ? item : 0),
  0
);
console.log("After reduce:", reducedValue);

// find(callback) - Returns the value of the first element in the array that satisfies the provided testing function
let foundItem = mixedArray.find((item) => typeof item === "string");
console.log("After find:", foundItem);

// findIndex(callback) - Returns the index of the first element in the array that satisfies the provided testing function
let foundIndex = mixedArray.findIndex((item) => typeof item === "string");
console.log("After findIndex:", foundIndex);

// includes(item) - Determines whether an array includes a certain value among its entries
let includesItem = mixedArray.includes("String");
console.log("After includes:", includesItem);

// indexOf(item) - Returns the first index at which a given element can be found in the array
let indexOfItem = mixedArray.indexOf("String");
console.log("After indexOf:", indexOfItem);

// join(separator) - Joins all elements of an array into a string
let joinedString = mixedArray.join(", ");
console.log("After join:", joinedString);

// reverse() - Reverses the order of the elements in the array
mixedArray.reverse();
console.log("After reverse:", mixedArray);

// sort(compareFunction) - Sorts the elements of an array in place and returns the array
mixedArray.sort();
console.log("After sort:", mixedArray);
//===================================================================================================
// Storing complex data types in arrays
let complexArray = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  [1, 2, 3],
  function () {
    return "Hello, World!";
  },
  new Date(),
  /abc/,
  null,
  undefined,
];

console.log("Initial complexArray:", complexArray);

// Accessing elements
console.log("First element (object):", complexArray[0]);
console.log("Third element (array):", complexArray[2]);
console.log("Fourth element (function):", complexArray[3]());

// Using array methods on complex data types

// push(item) - Adds an item to the end of the array
complexArray.push({ name: "Charlie", age: 35 });
console.log("After push:", complexArray);

// pop() - Removes the last item from the array
complexArray.pop();
console.log("After pop:", complexArray);

// forEach(callback) - Executes a function for each array element
complexArray.forEach((item) => console.log("forEach item:", item));

// map(callback) - Creates a new array with the results of calling a function for every array element
let mappedArray = complexArray.map((item) => typeof item);
console.log("After map:", mappedArray);

// filter(callback) - Creates a new array with all elements that pass the test implemented by the provided function
let filteredArray = complexArray.filter(
  (item) => item && typeof item === "object" && !Array.isArray(item)
);
console.log("After filter:", filteredArray);

// find(callback) - Returns the value of the first element in the array that satisfies the provided testing function
let foundItem = complexArray.find((item) => item && item.name === "Alice");
console.log("After find:", foundItem);

// findIndex(callback) - Returns the index of the first element in the array that satisfies the provided testing function
let foundIndex = complexArray.findIndex(
  (item) => item && item.name === "Alice"
);
console.log("After findIndex:", foundIndex);

// includes(item) - Determines whether an array includes a certain value among its entries
let includesItem = complexArray.includes(null);
console.log("After includes:", includesItem);

// indexOf(item) - Returns the first index at which a given element can be found in the array
let indexOfItem = complexArray.indexOf(null);
console.log("After indexOf:", indexOfItem);

// join(separator) - Joins all elements of an array into a string
let joinedString = complexArray.join(", ");
console.log("After join:", joinedString);

// reverse() - Reverses the order of the elements in the array
complexArray.reverse();
console.log("After reverse:", complexArray);

// sort(compareFunction) - Sorts the elements of an array in place and returns the array
complexArray.sort((a, b) => {
  if (typeof a === "object" && typeof b === "object") {
    return (a.name || "").localeCompare(b.name || "");
  }
  return 0;
});
console.log("After sort:", complexArray);
