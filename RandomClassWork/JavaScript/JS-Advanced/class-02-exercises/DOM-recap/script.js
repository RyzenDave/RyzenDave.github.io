// Select the span element inside the h1 tag
const spanElement = document.querySelector("h1 span");

// Remove the hidden attribute to make it visible
spanElement.removeAttribute("hidden");

const newHeader = document.createElement("h2");

// Add text content to the new h2 element
newHeader.textContent = "This is a new H2 element";

// Optionally, you can use innerHTML to add HTML content
// newHeader.innerHTML = "<span>This is a new H2 element with a span</span>";

// Append the new h2 element to the body or any other existing element
document.body.appendChild(newHeader);

const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div element";
document.body.appendChild(newDiv);

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph element";
document.body.appendChild(newParagraph);

// Create a button element
const button = document.createElement("button");
button.textContent = "Toggle Color";
document.body.appendChild(button);

// Add an event listener to the button to toggle its color between red and blue
button.addEventListener("click", function () {
  if (button.style.backgroundColor === "red") {
    button.style.backgroundColor = "blue";
  } else {
    button.style.backgroundColor = "red";
  }
});
