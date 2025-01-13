// complete practice code on variables and data
// Declaring variables
let name = "Alice";
const age = 28;
var isStudent = false;

// Logging to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Data types demonstration
let x;
console.log("x is", typeof x); // undefined

let y = null;
console.log("y is", typeof y); // object (this is a known quirk in JavaScript)

let bigNumber = 12345678901234567890n;
console.log("Big number:", bigNumber);

let colors = ["red", "green", "blue"];
console.log("Colors:", colors);

let person = { name: "Alice", age: 28 };
console.log("Person:", person);
