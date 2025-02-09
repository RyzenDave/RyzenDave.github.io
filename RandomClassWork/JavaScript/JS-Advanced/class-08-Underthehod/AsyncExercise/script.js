// Function to make API call (with callback)
function fetchData(callback) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error("Error:", error));
}

// Callback to display data in HTML
function displayData(posts) {
  const container = document.getElementById("data-container");
  container.innerHTML = "";

  posts.slice(0, 5).forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    container.appendChild(li);
  });
}

// Event listener for the button
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("load-data").addEventListener("click", () => {
    fetchData(displayData);
  });
});
