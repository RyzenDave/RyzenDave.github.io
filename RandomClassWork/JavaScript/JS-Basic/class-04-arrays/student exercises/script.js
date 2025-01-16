function numberCount(number, array) {
  let occurences = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      occurences++;
    }
  }
  return occurences;
}
let input = parseInt(prompt("Enter a number:"));
let testArray = [2, 5, 6, 3, 5, 5, 2, 5, 7, 8, 2];
console.log(
  `There are ${numberCount(
    input,
    testArray
  )} occurences of ${input} in the array!`
);
console.log("========= STUDENT EXERCISE 2 =========");
function filterOddEven(array, type) {
  let result = [];
  if (type === "even") {
    for (let num of array) {
      if (num % 2 === 0) {
        result.push(num);
      }
    }
    return result;
  } else if (type === "odd") {
    for (let num of array) {
      if (num % 2 !== 0) {
        result.push(num);
      }
    }
    return result;
  } else {
    console.log("The type was not correct. Please enter odd or even");
    return null;
  }
}
