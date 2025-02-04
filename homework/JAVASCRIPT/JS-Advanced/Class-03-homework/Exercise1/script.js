// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the DOM elements
  const fetchDataBtn = document.getElementById("fetchDataBtn");
  const academyNameH1 = document.getElementById("academyName");
  const studentListUL = document.getElementById("studentList");

  // Attach a click event listener to the button
  fetchDataBtn.addEventListener("click", async () => {
    try {
      // Replace with your actual URL
      const url =
        "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json";

      // Make an HTTP GET request to the URL
      const response = await fetch(url);

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON data from the response
      const data = await response.json();

      // Assume the JSON structure is something like:
      // {
      //   "academy": "Awesome Academy",
      //   "students": ["Alice", "Bob", "Charlie"]
      // }

      // Update the h1 tag with the academy name
      academyNameH1.textContent = data.academy;

      // Clear any existing list items
      studentListUL.innerHTML = "";

      // Loop through the student names and add each to the ul
      data.students.forEach((student) => {
        const li = document.createElement("li");
        li.textContent = student;
        studentListUL.appendChild(li);
      });
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
  });
});
