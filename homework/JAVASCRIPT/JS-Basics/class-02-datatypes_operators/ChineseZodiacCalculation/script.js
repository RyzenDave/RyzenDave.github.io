let userInput = prompt("please enter a year you'd like to convert");
let userYear = parseInt(userInput);

const zodiacSigns = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
];
//CALCULATE NEGATIVE REMAINDERS
let remainder = (userYear - 4) % 12;
//HANDLE NEGATIVE REMAINDERS
if (remainder < 0) {
  remainder += 12;
}
//DETERMINE ZODIAC SIGN
let zodiac = zodiacSigns[remainder];

alert("The Chinese Zodiac sign for the year " + userYear + " is: " + zodiac);
