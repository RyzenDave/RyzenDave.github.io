console.log("=========== CONTROL STRUCTURES ==========");
// 1) Conditional statements
// 2) Switch statement
// 3) Looping structures

// Purpose: Control the flow of a program

console.log();
console.log("=============== COnditional Statements ===============");

let num = 100;

console.log("======== if statement ========");
if ("boolean statement") {
  //code
}

if (num > 0) {
  console.log(`the number ${num} is positive`);
}

if (num > 0) {
  console.log(`the number ${num} is positive`);
} else {
  console.log(`the number ${num} is negative`);
}

console.log("============ ELSE IF statement ==============");
if (num) {
  console.log(`The number ${num + 100} is positive`);
} else if (num < 0) {
  console.log(`The number ${num} is negative`);
} else {
  console.log(`There is no value`);
}
if (num < 5) {
  console.log(`the number is smaller than -5`);
}
console.log("=========== GETTING AN INPUT ============");
let input = prompt("Enter a number:");
console.log(input);
console.log(typeof input);

console.log("after parsing the input in to integer");

let parsedinput = parseInt(input);
console.log(parsedinput);
console.log(typeof parsedinput);

if (Number.isNaN(parsedinput)) {
  alert("youve entered an invalid number!");
} else {
  alert(`The parsed input is ${parsedinput}`);
}
