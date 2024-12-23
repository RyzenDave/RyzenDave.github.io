console.log("======= HOMEWORK 3 =======");
/*
  Write a javascript function that:

  When given any array of strings (should work with array with any number of elements)
  It will create one big string and return it
  Ex:["Hello", "there", "students", "of", "SEDC", "!"]
  Result: "Hello there students of SEDC!"
*/
function stringStacker(strings) {
  return strings.join(" ");
}
const strings = ["hello", "there", "mate!"];
console.log(stringStacker(strings));

console.log("======= HOMEWORK 4 =======");
/*
 * Looping structures
 * Description: Write a JavaScript function that will return:
 * The sum of the MAX and MIN numbers from an array with numbers
 * Ex: arr = [3, 5, 6, 8, 11]
 * Output: Max: 11, Min: 3, Sum: 14
 * Bonus: Try making the function work if there are other types of items in it
 */
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + "\n");
  } else {
    console.log(i + " ");
  }
}
