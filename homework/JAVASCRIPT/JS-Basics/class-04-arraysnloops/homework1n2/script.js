console.log("==================== HOMEWORK 1 =======================");
/* Create a function called tellStory()
 The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
 The function should return one big string with a story made from the arguments
 Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
 The value that is returned from the function should be printed in the console or in alert
*/
function tellStory(storyArray) {
  const [name, mood, activity] = storyArray;

  const story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;

  return story;
}

const myStory = tellStory(["Alice", "happy", "reading books"]);
console.log(myStory);
alert(myStory);

console.log(" =======HOMEWORK 2======= ");
/*
 Write a function that will take an array of 5 numbers as an argument and return the sum.
 Print it in the console or in alert
 
 BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. 
 If one of the numbers of the array is invalid show an error message instead of a result.
*/
function sum(numberArray) {
  let sum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }

  return sum;
}

const numbers = [3, 4, 7, 9, 32];
console.log(sum(numbers));
