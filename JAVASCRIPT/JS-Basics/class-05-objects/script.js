console.log("===== PART 1 =====");
/*
Create OBJECT animal with 2 properties and 1 method:

    name
    kind
    speak (method)

this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
Bonus: enter the values from prompt
*/
let animal = {
  name: "Name",
  kind: "Mammal",
  speak: function (message) {
    console.log(`${this.kind} says: '${message}'`);
  },
};
animal.name = prompt("Enter the animal's name:");
animal.kind = prompt("Enter the animal's kind:");

animal.speak("Hello, world!");
/*
Write a JavaScript program to display the reading status of some book.
The object should have the next properties: title, author, readingStatus and
a method that will return info depending on the readingStatus e.g.
Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).

Bonus: enter the values from prompt()
*/
console.log("===== PART 2 =====");
let book = {
  title: "",
  author: "",
  readingStatus: false,
  getReadingStatus: function () {
    if (this.readingStatus) {
      return `Already read '${this.title}' by ${this.author}.`;
    } else {
      return `You still need to read '${this.title}' by ${this.author}.`;
    }
  },
};

// Bonus: Fill properties from user input
book.title = prompt("Enter the book's title:");
book.author = prompt("Enter the author's name:");
book.readingStatus = prompt("Have you read the book? (yes/no)") === "yes";

// Display the reading status in the console
console.log(book.getReadingStatus());
