console.log("==================== HOMEWORK 1 =======================");

function tellStory(storyArray) {
  const [name, mood, activity] = storyArray;

  const story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;

  return story;
}

const myStory = tellStory(["Alice", "happy", "reading books"]);
console.log(myStory);
alert(myStory);

console.log(" =======HOMEWORK 2======= ");
function sum(numberArray) {
  let sum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }

  return sum;
}

const numbers = [3, 4, 7, 9, 32];
console.log(sum(numbers));

console.log("======= HOMEWORK 3 =======");
function stringStacker(strings) {
  return strings.join(" ");
}
const strings = ["hello", "there", "mate!"];
console.log(stringStacker(strings));
console.log("======= HOMEWORK 4 =======");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + "\n");
  } else {
    console.log(i + " ");
  }
}
console.log("======= HOMEWORK 5 =======");
//LOOPING STRUCTURES, Write a javascript function that will return: The sum of the MAX and MIN numbers from an array with numbers. Example: array - [3,4,6,8,11] output: Max:11, Min:3, Sum:14
console.log("======= HOMEWORK 6 =======");
