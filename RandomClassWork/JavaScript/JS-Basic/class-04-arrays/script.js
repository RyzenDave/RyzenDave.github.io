//Array
let Days = ["monday", "tuesday", "wednesday"];
console.log(Days);
//Mixed Array
let mixedArray = ["Martin", 12, true, undefined, null, 22.4];
//
let firstElement = mixedArray[0];
console.log(firstElement);

mixedArray[0] = "Frose";
console.log(`The mixeda rray after the change is ${mixedArray}`);
//INSERT an element in an Array push() unshift()
let numbers = [1, 2, 3, 4, 5];
numbers.push(6, 7, 8, 9, 10, 11, 12);
console.log(numbers);
numbers.push("martin", "fross");
console.log(numbers);
numbers.unshift(-2, -1, 0);
console.log(numbers);
//delete an elemnt from an array pop() and shift()
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
