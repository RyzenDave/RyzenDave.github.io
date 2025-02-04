// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the DOM elements
  const fetchSWDataBtn = document.getElementById("fetchSWDataBtn");
  const personNameH1 = document.getElementById("personName");
  const personStatsTableBody = document.querySelector("#personStats tbody");

  // Attach click event listener to the button
  fetchSWDataBtn.addEventListener("click", async () => {
    try {
      // The URL for the first person in the Star Wars API
      const url = "https://swapi.dev/api/people/1";

      // Make the HTTP GET request using fetch
      const response = await fetch(url);

      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON data from the response
      const data = await response.json();

      // Update the h1 with the person's name
      personNameH1.textContent = data.name;

      // Clear any existing rows in the table body
      personStatsTableBody.innerHTML = "";

      // Create an object mapping the stats we want to display.
      // Note: The SWAPI uses "mass" for weight.
      const stats = {
        Height: data.height,
        Weight: data.mass,
        "Eye Color": data.eye_color,
        "Hair Color": data.hair_color,
      };

      // Loop through the stats object and create table rows
      for (const [stat, value] of Object.entries(stats)) {
        // Create a new row and two cells
        const row = document.createElement("tr");
        const statCell = document.createElement("td");
        const valueCell = document.createElement("td");

        // Set the text for each cell
        statCell.textContent = stat;
        valueCell.textContent = value;

        // Append cells to the row, and row to the table body
        row.appendChild(statCell);
        row.appendChild(valueCell);
        personStatsTableBody.appendChild(row);
      }
    } catch (error) {
      console.error("Error fetching Star Wars person data:", error);
      // Optionally, display an error message to the user
      personNameH1.textContent = "Failed to load data";
      personStatsTableBody.innerHTML = "";
    }
  });
});
