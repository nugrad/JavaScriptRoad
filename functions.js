// basic function example
function greet(){
    console.log("hello world");
}
greet();
// default paramter

function greet2(name = "Guest") {
    return `Welcome, ${name}!`;
}
console.log(greet2()); // Output: Welcome, Guest!

function myname(name){
    console.log(`Hello , ${name}!`);
}
myname("Hamza");

function sum(a,b){
    return a+b;
}
result=sum(10,20);
console.log("Sum  is ",result);

// A function can be assigned to a variable.
const mutiply=function(a,b){
    return a*b;
}
console.log(mutiply(5,6));

// arrow functions , concise way to write functions

// const functionName = (parameters) => {
//     // Code to execute
// };

const subtract=(a,b)=>{
    return a-b;
}
console.log(subtract(20,10));

// Now lets discuss function scope and closures
// 1 function scopes,Variables declared inside a function are local to that function.
function testScope() {
    let x = 10; // Local variable
    console.log(x);
}
testScope();
//console.log(x); // Error: x is not defined

// 2, closures,a function that retains access to its outer scope, even after the outer function has executed.

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}
const closureFunc = outerFunction("Hello");
closureFunc("JS"); // Output: Outer: Hello, Inner: World

// Function Hoisting
//Function declarations are hoisted, meaning they can be called before they are defined.
console.log(hoistedFunction()); // Output: I am hoisted!
function hoistedFunction() {
    return "I am hoisted!";
}

// Callback Functions
// Functions passed as arguments to other functions and executed later.
// The provided code defines a function processUserInput that takes a callback function as an argument. Inside it, a constant name is set to "Alice", and the callback function is called with name as its argument. The processUserInput function is then invoked with an inline function that logs a greeting using 
// template literals. The output will be "Hello, Alice!".
function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}
processUserInput(function(name) {
    console.log(`Hello, ${name}!`);
});





