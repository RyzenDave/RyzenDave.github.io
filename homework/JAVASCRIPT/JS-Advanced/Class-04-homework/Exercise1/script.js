// Select DOM elements
const fetchButton = document.getElementById("fetch-button");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const tableBody = document.getElementById("table-body");

// Event listener for the initial fetch button (loads page 1)
fetchButton.addEventListener("click", () => {
  fetchPlanets("https://swapi.py4e.com/api/planets/?page=1");
  // After fetching page 1, show the NEXT 10 button and hide PREVIOUS 10 (if visible)
  nextButton.style.display = "inline-block";
  prevButton.style.display = "none";
});

// Event listener for the NEXT 10 button (loads page 2)
nextButton.addEventListener("click", () => {
  fetchPlanets("https://swapi.py4e.com/api/planets/?page=2");
  // Hide the NEXT 10 button and show the PREVIOUS 10 button
  nextButton.style.display = "none";
  prevButton.style.display = "inline-block";
});

// Event listener for the PREVIOUS 10 button (returns to page 1)
prevButton.addEventListener("click", () => {
  fetchPlanets("https://swapi.py4e.com/api/planets/?page=1");
  // Hide the PREVIOUS 10 button and show the NEXT 10 button
  prevButton.style.display = "none";
  nextButton.style.display = "inline-block";
});

/**
 * Fetches planet data from the given URL.
 * Uses the Fetch API and processes the response as JSON.
 *
 * @param {string} url - The API endpoint URL.
 */
const fetchPlanets = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.results) {
        // Use the higher order function map to create table rows
        printPlanets(data.results);
      } else {
        console.error("Unexpected data format:", data);
      }
    })
    .catch((error) => console.error("Error fetching planets:", error));
};

/**
 * Prints an array of planet objects into the table.
 * Uses the array method map to transform each planet into an HTML table row.
 *
 * @param {Array} planets - Array of planet objects.
 */
const printPlanets = (planets) => {
  tableBody.innerHTML = planets
    .map(
      (planet) => `
      <tr>
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td>
      </tr>
    `
    )
    .join("");
};
