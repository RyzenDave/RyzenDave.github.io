let a = parseFloat(prompt("Enter the first number (a):"));
let b = parseFloat(prompt("Enter the second number (b):"));

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function dev(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

let operator = prompt("Pick what you want to do: +, -, *, /");

switch (operator) {
  case "+":
    console.log(`The output is: ${sum(a, b)}`);
    break;
  case "-":
    console.log(`The output is: ${sub(a, b)}`);
    break;
  case "*":
    console.log(`The output is: ${mul(a, b)}`);
    break;
  case "/":
    console.log(`The output is: ${dev(a, b)}`);
    break;
  default:
    console.log("Invalid operator");
}
