let sumOfSquares = 0;

for (let num = 101; num <= 150; num++) {
  sumOfSquares += Math.pow(num, 2); // Add the square of the number to the total
}

console.log("The sum of squares of numbers from 101 to 150 is:", sumOfSquares);
console.log("================== for loop ==================");
let names = ["martin", "frose", "angel", "sandra", "ana"];
let userInput = prompt("Please search for a name in my lists");
for (let i = 0; i < names.length; i++) {{
  if (userInput === names[i]) console.log(names[i]) break}
}
