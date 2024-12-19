console.log("====== HOMEWORK 6 =======");
function checkIfPassed(grades, passingAverage) {
  let total = grades.reduce((sum, grade) => sum + grade, 0);
  let average = total / grades.length;

  if (average >= passingAverage) {
    alert("The student has passed the semester!");
  } else {
    alert("The student has not passed the semester.");
  }
}

let grades = [10, 6, 8, 9, 6];
let passingAverage = 8;
checkIfPassed(grades, passingAverage);
console.log("====== HOMEWORK 7 =======");
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

let array = [null, undefined, NaN, "", false, 1, "hello", 42, true, {}];
let cleanedArray = removeFalsyValues(array);
console.log(cleanedArray);
console.log("====== HOMEWORK 8 =======");
