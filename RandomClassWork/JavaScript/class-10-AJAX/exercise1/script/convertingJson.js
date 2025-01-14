let person = {
  name: "John",
  age: 30,
  city: "New York",
  isEmployed: true,
  programmingLanguages: ["JavaScript", "Python", "Java"],
};
/* Convert the person object to a JSON string */
//The process of packing data into a JSON string is called SERIALIZATION.
let personJson = JSON.stringify(person);
console.log(personJson);
/*
Deserialization is the process of unpacking a 
JSON string to get the original data.
*/
/*
If we get a response from the server in a json string
format we need to aprse the json string into a 
javascript object the process
of doing this is called DESERIALIZATION
*/
let personObject = JSON.parse(personJson);
console.log(personObject);
