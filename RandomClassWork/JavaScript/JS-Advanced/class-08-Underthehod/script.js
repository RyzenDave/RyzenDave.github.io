console.log("===== Sync/Async =====");

function first() {
  console.log("First Thing");
}
function second() {
  console.log("Second Thing");
}
function fibbonaci(n) {
  if (n <= 1) return 1;
  return fibbonaci(n - 1) + fibbonaci(n - 2);
}

let fibbonaciResult = fibbonaci(10);
console.log(fibbonaciResult);
first();
second();

console.log("===== Asynchronous =====");
fetch("https://dummyjson.com/products/1")
  .then((response) => response.json())
  .then((product) => console.log(product))
  .catch((error) => console.error("Error fetching product:", error));

console.log("This is printed after the product block or nah");

document.querySelector("#Button").addEventListener("click", () => {
  console.log("Button Clicked");
});

let intervalId = setTimeout(() => {
  console.log("This is printed after 4 seconds");
}, 4000);

clearInterval(intervalId);

function greet(name) {
  console.log("Hello", name);
}
greet("Mogus");

console.log("Step 1: Start");

// Initiate an asynchronous task that completes after 2000ms
setTimeout(() => {
  console.log("Step 2: Async operation completed");
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}, 5000);

console.log("Step 3: End");

//1)  setTimeout
function handleTimeout() {
  console.log("Timeout Completed");
}
setTimeout(handleTimeout, 2000);

//2) event handler
document.querySelector("#Button").addEventListener("click", () => {
  console.log("Button Clicked");
});
function handleButtonClick() {
  console.log("Button Clicked");
}
document.querySelector("#Button").addEventListener("click", handleButtonClick);
//3)
function performAsyncOperation(callback) {
  console.log("Async operation started");
  setTimeout(() => {
    const result = "Async operation completed";
    callback(result);
  }, 2000);
}
performAsyncOperation(() => {
  console.log("Callback Called");
});

//4) Higher Order Function callback
let testArray = [1, 2, 3, 4, 5];
testArray.forEach((n) => console.log(n));

//5)

function renderDataFromApi(url, Renderfunction) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => Renderfunction(data))
    .catch((error) => console.error("Error fetching data:", error));
}

function displayUser(user) {
  let h3 = document.createElement("h3");
  h3.textContent = `${user.firstName} ${user.lastName}`;
  console.log(`${user.firstName} ${user.lastName}`);
  document.body.appendChild(h3); // Append the h3 element to the body
}

renderDataFromApi("https://dummyjson.com/users/10", displayUser);

console.log("===== Callback Functions vs Functions as an argument =====");
function someFunction(functione) {
  console.log("Fetching data....");
}
setTimeout(() => {
  console.log("Data fetched");
}, 2000);

function fetchData(callback) {
  console.log("Fetching data....");
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000);
}
