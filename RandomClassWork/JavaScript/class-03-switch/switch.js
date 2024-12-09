let number = prompt("Please enter a number:");
let parsedNumber = parseInt(number);
if (isNaN(parsedNumber)) {
  switch (parsedNumber) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("There is no such day of the week.");
  }
} else {
  console.log("That is not a number");
}
