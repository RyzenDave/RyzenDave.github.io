console.log("All datatypes determined");
function getType(value) {
  let type = typeof value;
  console.log(`The type of "${value}" is: ${type}`);
  return type;
}

// Calling the function
getType({});
getType(true);
getType(42);
getType("Hello World");
getType(undefined);
