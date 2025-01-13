// lets cover types of variables
// var: The old way to declare variables. Its scope is function-level and it's hoisted (moved to the top during execution).
// let: The modern way to declare variables. Its scope is block-level (within {}).
// const: Declares a variable with a constant value. It cannot be reassigned after declaration.
var old_var="Tariq";
let new_var="mohammad";
const const_var="jafri";
// js is dynamically typed , which means we donot need to define the type of variable, it automatically detects it
let age=25;
let name = "John";
let isStudent = true;
let x; // undefined
let y = null;
let uniqueId = Symbol('id');
let bigNumber = 123456789012345678901234567890n;

// Primitive data types are built into the language and are predefined, while non-primitive data types are created by the programmer.

// in js , non primitive data type is a object and array
let person={
    "name":"john",
    "age":25
};

let arr=[3,4,123,1,2];

// Now lets print some of the above
let greeting="hello world";
console.log(greeting);
console.log(person);

