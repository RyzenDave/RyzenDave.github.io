// Constructor function for Contact
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

// Global variables
let contacts = [];
let editIndex = null;

// DOM Elements
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const phoneNumberInput = document.getElementById("phoneNumber");
const saveContactBtn = document.getElementById("saveContactBtn");
const contactsTableBody = document.getElementById("contactsTableBody");

// Save Contact
saveContactBtn.addEventListener("click", () => {
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const phoneNumber = phoneNumberInput.value.trim();

  if (firstName === "" || lastName === "" || phoneNumber === "") {
    alert("All fields are required!");
    return;
  }

  // If editing an existing contact
  if (editIndex !== null) {
    contacts[editIndex] = new Contact(firstName, lastName, phoneNumber);
    editIndex = null;
    saveContactBtn.textContent = "Save"; // Reset button text
  } else {
    // Add new contact
    const newContact = new Contact(firstName, lastName, phoneNumber);
    contacts.push(newContact);
  }

  renderContacts();
  clearForm();
});

// Render Contacts
function renderContacts() {
  contactsTableBody.innerHTML = "";

  contacts.forEach((contact, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${contact.firstName}</td>
        <td>${contact.lastName}</td>
        <td>${contact.phoneNumber}</td>
        <td>
          <button class="edit-btn" onclick="editContact(${index})">Edit</button>
          <button class="delete-btn" onclick="deleteContact(${index})">Delete</button>
        </td>
      `;
    contactsTableBody.appendChild(row);
  });
}

// Edit Contact
function editContact(index) {
  const contact = contacts[index];
  firstNameInput.value = contact.firstName;
  lastNameInput.value = contact.lastName;
  phoneNumberInput.value = contact.phoneNumber;

  editIndex = index;
  saveContactBtn.textContent = "Update"; // Change button text to indicate editing
}

// Delete Contact
function deleteContact(index) {
  contacts.splice(index, 1);
  renderContacts();
}

// Clear Form
function clearForm() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  phoneNumberInput.value = "";
}
