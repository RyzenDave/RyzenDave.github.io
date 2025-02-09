console.log(`====== Promises ======`);
// Promises are used to handle asynchronous operations in JavaScript.
// They are easy to manage when dealing with multiple asynchronous
// operations where callbacks can create
// callback hell leading to unmanageable code.
console.log(`====== Example of a promise ======`);
/*let apiUrl = "https://fakestoreapi.com/products/1";

fetch(apiUrl)
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => {
    console.log("Product Data:", data); // Handle successful response
  })
  .catch((error) => {
    console.log("Error fetching data:", error); // Handle errors
  })
  .finally(() => {
    console.log("Always execute this code");
      });
      return promise;
  }
*/
function simplePromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 3000);
  });

  return promise;
}

// Handling the Promise
simplePromise()
  .then((message) => {
    console.log(message); // Logs: "Promise resolved" after 3 seconds
  })
  .catch((error) => {
    console.log(error);
  });

function simulateAsyncTask() {
  return new Promise((resolve, reject) => {
    // Simulate a delay of 2 seconds (2000 milliseconds)
    setTimeout(() => {
      // For this simulation, we'll assume the task is always successful.
      // To simulate an error, you could call reject("Task failed") instead.
      resolve("Async task completed successfully!");
    }, 2000);
  });
}

// Using the simulateAsyncTask function
//simulateAsyncTask()
// .then((message) => {
//   console.log(message); // Expected output after 2 seconds: "Async task completed successfully!"
//})
//  .catch((error) => {
//  console.error("Error:", error);
//});

/* function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve(1);
    }, 1000);
  });
}
function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve(2);
    }, 2000);
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve(3);
    }, 3000);
  });
}

step1()
  .then(() => step2())
  .then(() => step3())
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("All steps completed");
  });
*/
console.log(`====== Promise all ======`);
function taskA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task A completed");
      resolve("A");
    }, 1000);
  });
}
function taskB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task B completed");
      resolve("B");
    }, 1500);
  });
}
function taskC() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task C completed");
      resolve("C");
    }, 2000);
  });
}

let taskCpromise = taskC();
console.log(taskCpromise);

Promise.all([taskA(), taskB(), taskC()])
  .then((values) => {
    console.log("All tasks completed:", values);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
