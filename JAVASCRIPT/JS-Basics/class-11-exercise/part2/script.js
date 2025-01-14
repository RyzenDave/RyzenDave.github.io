// Constructor function for Expense
function Expense(description, amount, category) {
  this.description = description;
  this.amount = parseFloat(amount);
  this.category = category;
}

// Global variables
let expenses = [];

// DOM Elements
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const expenseTableBody = document.getElementById("expenseTableBody");
const totalExpensesElement = document.getElementById("totalExpenses");

// Add Expense
document.getElementById("addExpenseBtn").addEventListener("click", () => {
  const description = descriptionInput.value.trim();
  const amount = amountInput.value.trim();
  const category = categoryInput.value;

  if (description && amount && category) {
    const newExpense = new Expense(description, amount, category);
    expenses.push(newExpense);
    renderExpenses();
    clearForm();
  } else {
    alert("Please fill out all fields!");
  }
});

// Render Expenses
function renderExpenses() {
  expenseTableBody.innerHTML = "";
  let total = 0;

  expenses.forEach((expense, index) => {
    total += expense.amount;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${expense.description}</td>
        <td>${expense.amount.toFixed(2)}</td>
        <td>${expense.category}</td>
        <td><button class="delete-btn" onclick="deleteExpense(${index})">Delete</button></td>
      `;
    expenseTableBody.appendChild(row);
  });

  totalExpensesElement.textContent = total.toFixed(2);
}

// Delete Expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}

// Clear Form
function clearForm() {
  descriptionInput.value = "";
  amountInput.value = "";
  categoryInput.value = "";
}
