// Global variables
const words = ["javascript", "hangman", "developer", "programming", "browser"];
let chosenWord = "";
let guessedLetters = [];
let incorrectGuesses = 0;
const maxGuesses = 6;

// DOM Elements
const wordContainer = document.getElementById("word-container");
const message = document.getElementById("message");
const alphabetContainer = document.getElementById("alphabet-container");
const canvas = document.getElementById("hangman-canvas");
const ctx = canvas.getContext("2d");

// Start Game
function startGame() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  incorrectGuesses = 0;
  message.textContent = "";
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  renderWord();
  renderAlphabet();
}

// Render the word with blanks for unguessed letters
function renderWord() {
  const displayWord = chosenWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
  wordContainer.textContent = displayWord;

  // Check win condition
  if (!displayWord.includes("_")) {
    message.textContent = "Congratulations! You guessed the word!";
    disableAlphabet();
  }
}

// Render the alphabet buttons
function renderAlphabet() {
  alphabetContainer.innerHTML = "";
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i).toLowerCase();
    const button = document.createElement("button");
    button.textContent = letter;
    button.className = "letter";
    button.onclick = () => guessLetter(letter);
    alphabetContainer.appendChild(button);
  }
}

// Handle letter guesses
function guessLetter(letter) {
  guessedLetters.push(letter);
  const button = [...alphabetContainer.children].find(
    (btn) => btn.textContent === letter
  );
  button.disabled = true;
  button.classList.add("disabled");

  if (chosenWord.includes(letter)) {
    renderWord();
  } else {
    incorrectGuesses++;
    drawHangman(incorrectGuesses);
    if (incorrectGuesses === maxGuesses) {
      message.textContent = `Game Over! The word was "${chosenWord}".`;
      disableAlphabet();
    }
  }
}

// Disable all alphabet buttons
function disableAlphabet() {
  [...alphabetContainer.children].forEach((button) => {
    button.disabled = true;
    button.classList.add("disabled");
  });
}

// Draw the hangman step by step
function drawHangman(step) {
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;

  switch (step) {
    case 1: // Draw the gallows
      ctx.beginPath();
      ctx.moveTo(10, 290);
      ctx.lineTo(190, 290);
      ctx.moveTo(50, 290);
      ctx.lineTo(50, 20);
      ctx.lineTo(150, 20);
      ctx.lineTo(150, 50);
      ctx.stroke();
      break;
    case 2: // Draw the head
      ctx.beginPath();
      ctx.arc(150, 70, 20, 0, Math.PI * 2);
      ctx.stroke();
      break;
    case 3: // Draw the body
      ctx.beginPath();
      ctx.moveTo(150, 90);
      ctx.lineTo(150, 170);
      ctx.stroke();
      break;
    case 4: // Draw the left arm
      ctx.beginPath();
      ctx.moveTo(150, 110);
      ctx.lineTo(120, 140);
      ctx.stroke();
      break;
    case 5: // Draw the right arm
      ctx.beginPath();
      ctx.moveTo(150, 110);
      ctx.lineTo(180, 140);
      ctx.stroke();
      break;
    case 6: // Draw the legs
      ctx.beginPath();
      ctx.moveTo(150, 170);
      ctx.lineTo(120, 230);
      ctx.moveTo(150, 170);
      ctx.lineTo(180, 230);
      ctx.stroke();
      break;
  }
}

// Start the game on page load
startGame();
