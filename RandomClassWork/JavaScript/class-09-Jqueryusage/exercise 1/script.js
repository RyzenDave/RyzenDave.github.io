$(document).ready(function () {
  // Select all elements in the DOM
  let allElements = $("*");
  console.log(allElements); // Log all elements to the console

  // Select the element with ID 'mainTitle'
  let mainTitleHeader = $("#mainTitle");
  console.log(mainTitleHeader); // Log the main title header to the console

  // Select all elements with the class 'innerWrapper'
  let innerWrapperElements = $(".innerWrapper");
  console.log(innerWrapperElements); // Log inner wrapper elements to the console

  // Select multiple elements by class and ID
  let elementsByMultipleSelectors = $(".innerWrapper, .wrapper, #mainTitle");
  console.log(elementsByMultipleSelectors); // Log the selected elements to the console

  // Select all paragraph elements
  let paragraphs = $("p");
  console.log(paragraphs); // Log all paragraph elements to the console

  // Select the first paragraph element by ID (assuming it has an ID 'pfirst')
  let firstParagraph = $("#pfirst");
  console.log(firstParagraph); // Log the first paragraph to the console

  // Select the first child h3 element
  let firstChildren = $("h3:first-child");
  console.log(firstChildren); // Log the first child h3 element to the console

  // Select the last child p element
  let lastChildren = $("p:last-child");
  console.log(lastChildren); // Log the last child p element to the console

  // Apply CSS styles using jQuery
  mainTitleHeader.css({
    color: "blue", // Change text color to blue
    "font-size": "24px", // Change font size to 24px
    "text-align": "center", // Center align the text
  });

  innerWrapperElements.css({
    border: "2px solid black", // Add a black border
    padding: "10px", // Add padding
    margin: "10px", // Add margin
  });

  paragraphs.css({
    color: "green", // Change text color to green
    "font-style": "italic", // Change font style to italic
  });

  // Example of chaining methods
  $("#SecondTitle").css("color", "red").hide().fadeIn(6000); // Change color to red, hide, then fade in over 2 seconds

  // Add a mouseover event to the button
  $("#myButton").mouseover(function () {
    // Function to be executed on mouseover
    $(this).css({
      "background-color": "yellow", // Change background color to yellow
      color: "black", // Change text color to black
    });
  });
  $();
  // Add click event to toggle visibility
  $("#toggleButton").click(function () {
    $("#contentToToggle").toggle(); // Toggle the visibility of the content
  });
});
