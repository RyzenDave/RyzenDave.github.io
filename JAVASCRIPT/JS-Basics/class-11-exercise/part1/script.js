// Array to store todos
let todos = [];

// Get references to input, button, and list
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

// Function to render todos
function renderTodos() {
  // Clear the list
  todoList.innerHTML = "";

  // Loop through the todos array and create list items
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.isCompleted;
    checkbox.addEventListener("change", () => toggleComplete(index));

    // Add text to the list item
    const text = document.createElement("span");
    text.textContent = todo.name;
    if (todo.isCompleted) {
      text.classList.add("completed");
    }

    li.appendChild(checkbox);
    li.appendChild(text);
    todoList.appendChild(li);
  });
}

// Function to add a new todo
function addTodo() {
  const taskName = todoInput.value.trim();
  if (taskName !== "") {
    // Add new todo as an object
    todos.push({ name: taskName, isCompleted: false });
    todoInput.value = ""; // Clear the input
    renderTodos(); // Re-render the list
  }
}

// Function to toggle the completed state of a task
function toggleComplete(index) {
  todos[index].isCompleted = !todos[index].isCompleted;
  renderTodos(); // Re-render the list
}

// Add event listener to the button
addButton.addEventListener("click", addTodo);

// Optional: Add "Enter" key support
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
