console.log("====== fetch example ======");

// ======= joke example =======

// JOKE API: https://v2.jokeapi.dev/joke/Programming

const jokeApiUrl = "https://v2.jokeapi.dev/joke/Programming";
const getJokesBtn = document.querySelector("#get-jokes");
const numJokesInput = document.querySelector("#num-jokes");
const jokesContainer = document.querySelector("#jokes-container");

getJokesBtn.addEventListener("click", () => {
  // Get number of jokes to fetch
  const numJokes = numJokesInput.value;
  // Fetch jokes from API
  fetch(`${jokeApiUrl}?amount=${numJokes}`)
    // Parse response as JSON
    .then((response) => response.json())
    // Handle data
    .then((data) => {
      // Log data to console
      console.log(data);
      // Clear previous jokes
      jokesContainer.innerHTML = "";
      const jokes = data.jokes || [data]; // Handle single or multiple jokes
      // Create a paragraph element for each joke and append it to the container
      jokes.forEach((joke) => {
        // Create a paragraph element
        const jokeElement = document.createElement("p");
        // Set the text content of the paragraph element
        if (joke.type === "single") {
          // Set the text content of the paragraph element
          jokeElement.textContent = joke.joke;
          // Append the paragraph element to the container
        } else {
          jokeElement.textContent = `${joke.setup} - ${joke.delivery}`;
        }
        jokesContainer.appendChild(jokeElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
