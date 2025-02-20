import { User } from "./models/user.js";
import { logInfo, logError } from "./services/logger-services.js";

console.log(`===== Hello from app.js =====`);

let john = new User("john", "john@gmail.com");
let bob = new User("bob", "bobsky@gmail.com");

try {
  logInfo("Adding users started");
  addUser(john);
  logInfo("Added user John");
  addUser(bob);
  logInfo("Added user Bob");
} catch (error) {
  logError(error.message);
} finally {
  logInfo("Adding users finished");
}
