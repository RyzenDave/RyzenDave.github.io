let person = {
  name: "David",
  age: 19,
  interests: "gaming, exercise",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

console.log(person.name); // Outputs: John
person.greet(); // Outputs: Hello, John
console.log("====== OBJECT NOTATION ======");
let hotel = new Object();
hotel.name = "Makedonija";
hotel.numberofRooms = 100;
hotel.numberofStars = 5;
hotel.numberofBookedrooms = 67;
hotel.getavailanility = function () {
  return this.numberofRooms - this.numberofBookedrooms;
};
console.log(hotel);

hotel.name = "Alexander";

let trainer = {
  name: "stefan",
  lastname: "stefanoski",
  academy: "SEDC",
  lecture: "Objects",

  getFullname: function () {
    return this.name + " " + this.lastname;
  },
};
console.log(trainer.getFullname());

//create an object using constructor function

function Person(firstName, lastName, age, isEmployed) {
  this.firstName = firstName;
  this.lastname = lastName;
  this.age = age;
  this.isEmployed = isEmployed;
}
