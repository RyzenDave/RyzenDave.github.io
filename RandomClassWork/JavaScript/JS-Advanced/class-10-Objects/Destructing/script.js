console.log("===== Object Destructing =====");

let userObject = {
  id: 1,
  firstName: "Emily",
  lastName: "Johnson",
  maidenName: "Smith",
  age: 28,
  gender: "female",
  email: "emily.johnson@x.dummyjson.com",
  phone: "+81 965-431-3024",
  username: "emilys",
  password: "emilyspass",
  birthDate: "1996-5-30",
  image: "https://dummyjson.com/icon/emilys/128",
  bloodGroup: "O-",
  height: 193.24,
  weight: 63.16,
  eyeColor: "Green",
  hair: { color: "Brown", type: "Curly" },
  ip: "42.48.100.32",
  address: {
    address: "626 Main Street",
    city: "Phoenix",
    state: "Mississippi",
    stateCode: "MS",
    postalCode: "29112",
    coordinates: { lat: -77.16213, lng: -92.084824 },
    country: "United States",
  },
  macAddress: "47:fa:41:18:ec:eb",
  university: "University of Wisconsin--Madison",
  bank: {
    cardExpire: "03/26",
    cardNumber: "9289760655481815",
    cardType: "Elo",
    currency: "CNY",
    iban: "YPUXISOBI7TTHPK2BR3HAIXL",
  },
  company: {
    department: "Engineering",
    name: "Dooley, Kozey and Cronin",
    title: "Sales Manager",
    address: {
      address: "263 Tenth Street",
      city: "San Francisco",
      state: "Wisconsin",
      stateCode: "WI",
      postalCode: "37657",
      coordinates: { lat: 71.814525, lng: -161.150263 },
      country: "United States",
    },
  },
  ein: "977-175",
  ssn: "900-590-289",
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  crypto: {
    coin: "Bitcoin",
    wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    network: "Ethereum (ERC20)",
  },
  role: "admin",
};

// Example take id, firstname and lastname
const id = userObject.id;
const firstName = userObject.firstName;
const lastName = userObject.lastName;
console.log(id, firstName, lastName);

// Example take id, firstname and lastname using DESTRUCTING
const {
  id: userId,
  firstName: userFirstName,
  lastName: userLastName,
} = userObject;
// Example take adress latitude and longitude WITHOUT DESTRUCTING
const address = userObject.address;
const coordinates = address.coordinates;
const lat = coordinates.lat;
const lng = coordinates.lng;
console.log(lat, lng);

function getUserInfo(user) {
  return `${user.id} ${user.firstName} ${user.lastName}`;
}
console.log(getUserInfo(userObject));
function getUserInfoDestructing(user) {
  const { id, firstName, lastName } = user;
  return `${id} ${firstName} ${lastName}`;
}
console.log(getUserInfoDestructing(userObject));
console.log("===== Array destructing =====");
//with destructing

let firstNUM = [0];
let secondNUM = [1];
let thirdNUM = [2];
console.log(firstNUM, secondNUM, thirdNUM);

// without destructing

const numbers = [1, 2, 3];
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];
console.log(first, second, third);

let a = 10;
let b = 20;
let c = 30;
let temp = a;
a = b;
b = c;
console.log(a, b, c);

console.log("===== Spread Operator =====");
// Spread Operator
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers3 = [7, 8, 9];
const allNumbers = [...numbers1, ...numbers2, ...numbers3];
console.log(allNumbers);

console.log("Rest Operator");
