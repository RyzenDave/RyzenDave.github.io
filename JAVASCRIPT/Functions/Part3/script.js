let FUNDS = 10000; // Initial funds

// Prompt user for action
let input = prompt(
  "Please choose what you'd like to do with your funds. Type 'withdraw' or 'deposit'."
).toLowerCase(); // Convert input to lowercase to handle case-insensitivity

// Function to handle withdrawals
function withdraw(amount) {
  if (amount > FUNDS) {
    alert("Not enough funds to withdraw that amount.");
  } else if (amount <= 0) {
    alert("Please enter a valid amount greater than 0.");
  } else {
    FUNDS -= amount; // Deduct the amount from FUNDS
    alert(`You withdrew $${amount}. Remaining balance: $${FUNDS}.`);
  }
}

// Function to handle deposits
function deposit(amount) {
  if (amount <= 0) {
    alert("Please enter a valid amount greater than 0.");
  } else {
    FUNDS += amount; // Add the amount to FUNDS
    alert(`You deposited $${amount}. New balance: $${FUNDS}.`);
  }
}

// Handle user choice
if (input === "withdraw") {
  let amount = parseInt(prompt("Enter the amount you'd like to withdraw:"));
  if (!isNaN(amount)) {
    withdraw(amount); // Call withdraw function
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
} else if (input === "deposit") {
  let amount = parseInt(prompt("Enter the amount you'd like to deposit:"));
  if (!isNaN(amount)) {
    deposit(amount); // Call deposit function
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
} else {
  alert("Invalid choice. Please type 'withdraw' or 'deposit'.");
}
