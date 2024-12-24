// Function to get the div with ID "first"
function logFirstDiv() {
  const getDiv = document.getElementById("first");
  console.log("Div with ID 'first':", getDiv);
}

// Function to get all paragraph elements
function logAllParagraphs() {
  const selectParagraphs = document.querySelectorAll("p");
  console.log("All <p> elements:");
  selectParagraphs.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}:`, paragraph);
  });
}

// Function to get the last <div> or a div with ID "last"
function logLastDiv() {
  const getDivLast = document.querySelector("div:last-of-type"); // Or use document.getElementById("last") if relevant
  if (getDivLast) {
    console.log("Last <div>:", getDivLast);
  } else {
    console.log("No <div> with ID 'last' or no last <div> found.");
  }
}

// Call the functions to log the results in the console
logFirstDiv();
logAllParagraphs();
logLastDiv();
