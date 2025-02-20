import { User } from "../models/user.js";
const users = [];
function addUser(user) {
  if (!user instanceof User) {
    throw new Error("Invalic Input!");
  }
  if (users.some((u) => u.name === user.name)) {
    throw new Error(`User with name  ${user.name} already exists!`);
  }
  users.push(user);
}

function getUser() {
  return users;
}
