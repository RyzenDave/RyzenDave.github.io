console.log("hello!");
let totalsum;
let amountofPhones = 30;
let pricePerPhone = 119.95;
let taxrate = pricePerPhone * 0.05;
let phonetax = pricePerPhone + taxrate;
console.log("This is a sum with tax of each phone " + phonetax + "$");
totalsum = phonetax * amountofPhones;
console.log("The sum for all phones is " + totalsum + "$");
