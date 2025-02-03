//This Select all paragraph elements and change their text
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p, index) => {
  p.textContent = `This is new text for paragraph ${index + 1}`;
});

// This Selects all header elements (h1, h2, h3, etc.) and change their text
let headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
headers.forEach((header, index) => {
  header.textContent = `This is new text for header ${index + 1}`;
});
