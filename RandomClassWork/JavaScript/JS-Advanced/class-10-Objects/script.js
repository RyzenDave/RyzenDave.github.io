console.log("====== Objects part 1 ======");
let dog = {
  name: "Rex",
  age: 3,
  color: "brown",
  owner: {
    name: "Bob",
    secondname: "Bobsky",
  },
  bark: function () {
    console.log("Bark bark");
  },
  printInfo: function () {
    console.log(
      `Dog name: ${this.name}, age: ${this.age}, color: ${this.color}`
    );
  },
  getThis: this,
  printAnonymous: function () {
    console.log(this);
  },
  printThis: function () {
    console.log(this);
  },
};

dog.printInfo();

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFullname() {
    console.log(`Person name: ${this.firstname} ${this.lastname}`);
  }
}

let john = new Person("John", "Doe");
console.log(john.getFullname());

console.log(john.getThis); //current person instance (john object)

console.log(this); // global object window
console.log(window); // global object window

function testWindowObject() {
  console.log("testWindowObject");
}

console.log(window.testWindowObject);

console.log("====== Objects part 2 ======");

let Barnie = {
  name: "Barnie",
  age: 1,
  color: "white",
  owner: {
    name: "Alice",
    secondname: "Alicesky",
  },
  bark2: function () {
    console.log("Bark bark");
  },
};

//Keys
let barniekeys = Object.keys(Barnie);
console.log(barniekeys);
//Values
let barnievalues = Object.values(Barnie);
console.log(barnievalues);
//Entries
let barnieentries = Object.entries(Barnie);
console.log(barnieentries);

// Adding an entry to Barnie object
Barnie.breed = "Labrador";
barnieentries = Object.entries(Barnie);
console.log(barnieentries);

console.log("====== Changing the objects accessibility ======");
//Freeze
Object.freeze(Barnie);
Barnie.isGoodDog = true;
Barnie.name = "Chapo";
console.log(Barnie);

//Seal
let Marley = {
  name: "Marley",
  age: 2,
  color: "black",
};
Object.seal(Marley);
Marley.isGoodDog = true;
Marley.color = "brown";
console.log(Marley);
