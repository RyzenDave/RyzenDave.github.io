function sayHello() {
  console.log("hello there");
}
function sayGoodbye() {
  console.log("Bai");
}
function sumTwoNumbers() {
  let num1 = prompt("Pick 2 numbers to add:");
  let num2 = prompt("select atleast 1 more");
  parseInt(num1);
  parseInt(num2);
  let sum = num1 + num2;
  console.log(`${sum} is yo result`);
}
sayHello();
sayGoodbye();
sumTwoNumbers();
