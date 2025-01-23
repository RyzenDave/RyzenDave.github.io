console.log(`========= Anonymous functions =========`);

document.querySelector("button").addEventListener("click", function () {
  console.log("Button clicked");
});

const postsurl = "https://jsonplaceholder.typicode.com/posts";

fetch(postsurl)
  .then((response) => response.json())
  .then((parsedData) => {
    console.log(parsedData);
    // You can return parsedData here if needed
    return parsedData;
  })
  .catch((error) => {
    console.error("Error fetching posts:", error);
  });

let greet = function (name) {
  console.log(`Hello ${name}`);
};
console.log(typeof greet);
greet("John");
document.querySelector("button").addEventListener("click", function () {
  console.log(`random number: ${Math.floor(Math.random() * 100)}`);
  this.style.backgroundColor = "red";
});
console.log("========= Arrow functions =========");

function getrandomNumber() {
  return Math.floor(Math.random() * 100);
}
const getrandom = () => Math.floor(Math.random() * 100);
let randomNumber = getrandom();
const isEven = (number) => number % 2 === 0; // ✅ Arrow function
const sum = (a, b) => a + b; // ✅ Arrow function
