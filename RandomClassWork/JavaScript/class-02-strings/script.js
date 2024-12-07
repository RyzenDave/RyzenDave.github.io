console.log("====== NaN ====="); //not a number
console.log(typeof NaN);
let result = 100 / "ten";
console.log(5);
console.log(isNaN(5)); //true
console.log("======= INFINITY =======");
console.log(1 / 0);
console.log("============= LOGICAL OPERATORS ================");
console.log(30 > 50);
console.log(30 < 50);
console.log("============ LOGICAL AND && =============");
console.log(true && true);
console.log(true && false);
let num1 = 50;
let num2 = 100;
console.log(num1 < num2 && num2 === 150); //false
console.log(num1 < num2 && num2 + 50 === 150); //true
let expression = num1 < num2 && num2 <= 100 && num1 + 10 !== 60;
console.log(expression); //false
console.log("========= LOGICAL OR ||==========");
console.log(true || false);
console.log(false || true);
console.log(false || false);

let number1 = 3;
let number2 = 13;
console.log(number1 > number2 || number2 >= 10);
console.log((5 > 0 && 5 + 6 < 10) || 10 > 5); //true
// BREAKDOWN
// 5 > => TRUE
// 5 + 6 < 10 FALSE
//

console.log("============== LOGICAL NOT !===============");
console.log(!true);
console.log(!false);

let isValid = false;
console.log(isValid); //false
console.log(!isValid); //true

let numOne = 100;
let numTwo = 1000;
console.log(!(numOne > numTwo) && "bob" == "bob"); //true
//1) !(100 > 1000) !false => true
//2) BOB == BOB => true

console.log("=============== EQUALITIES ================");

//console.log(3 = "3")
console.log(3 == "3"); //true
console.log(3 === "3"); //false
//= ASSIGNMENT
//== EQUALITY
//=== STRICT EQUALITY
console.log();
console.log("============ TRUTHY/FALSEY VALUES =============");

let numberOne = -1000;
let numberTwo = 0;

console.log(typeof numberOne);
console.log(typeof numberTwo);

console.log(Boolean(numberOne));
console.log(Boolean(numberTwo));

console.log(Boolean(""));
console.log(Boolean(""));
