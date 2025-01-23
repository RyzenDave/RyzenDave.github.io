// Get references to DOM elements
const fetchDataBtn = document.getElementById("fetchDataBtn");
const outputDiv = document.getElementById("output");

// Add click event listener to the button
fetchDataBtn.addEventListener("click", fetchData);

// Function to fetch data using XMLHttpRequest
function fetchData() {
  const xhr = new XMLHttpRequest();

  // Open a GET request to a sample API
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

  // Define the onload callback
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse and display the response
      const data = JSON.parse(xhr.responseText);
      outputDiv.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
      `;
    } else {
      // Handle errors
      outputDiv.innerHTML = `<p>Error: ${xhr.status} - ${xhr.statusText}</p>`;
    }
  };

  // Define the onerror callback
  xhr.onerror = function () {
    outputDiv.innerHTML = `<p>Request failed. Please try again.</p>`;
  };

  // Send the request
  xhr.send();
}
