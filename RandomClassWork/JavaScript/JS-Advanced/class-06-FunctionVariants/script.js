console.log("====== FUNCTIONS first class citizens ======");

let greet = (name) => console.log(`Hello ${name}`);
greet("John");

function calculator(num1, num2, operation) {
  return operation(num1, num2);
}
function sum(num1, num2) {
  return num1 + num2;
}
let sumResult = calculator(2, 3, sum);
console.log(sumResult);
let subtractresult = calculator(2, 3, (num1, num2) => num1 - num2);
function logfunction(func) {
  func();
}
logfunction(() => console.log("Hello from logfunction"));

function getOperator(operator) {
  switch (operator) {
    case "+":
      return sum;
    case "-":
      return (num1, num2) => num1 - num2;
    case "*":
      return (num1, num2) => num1 * num2;
    case "/":
      return (num1, num2) => num1 / num2;
  }
}

const divide = getOperator("/");
const multiply = getOperator("*");
const add = getOperator("+");
const subtract = getOperator("-");
console.log(divide(60, 2));

console.log("====== Function arguments  ======");
function someFunction() {
  console.log(arguments);
}
someFunction(1, 2, "piss", 4, 5, 6, 7, 8, 9, 10);
