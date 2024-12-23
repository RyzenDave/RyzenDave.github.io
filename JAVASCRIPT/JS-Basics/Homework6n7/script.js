console.log("====== HOMEWORK 6 =======");
/*
One student has 5 exams in the first semester.
His/Her grades for all of the exams are 10, 6, 8, 9, 6 respectively.
The professor told the students that for passing the first semester they must have average of 8.
The student needs to know whether they have passed the semester or not. 
Alert on screen if the student pass or not!
*/
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
/*
Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” 
and false (JavaScript falsy values). Create a function that will work for every array 
in the world :) and it will remove all the falsy values from the array.
*/

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

let array = [null, undefined, NaN, "", false, 1, "hello", 42, true, {}];
let cleanedArray = removeFalsyValues(array);
console.log(cleanedArray);
