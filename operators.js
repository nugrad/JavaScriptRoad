// core concept
// The key difference between ++i and i++ is that ++i (pre-increment) increments the value of variable i before using it in an expression, while i++ (post-increment) increments i after its value is used in an expression; meaning ++i returns the incremented value, while i++ returns the original value of i before the increment
let i = 5;



let a = ++i;  // a will be 6 because i is incremented to 6 before assignment

let  b = i++;  // b will be 6 because i is used first, then incremented to 7





let num1=1;
let num2=3;
// arthimetic operators
console.log("addition : ",num1+num2);
console.log("subtraction : ",num1-num2);

// assignement operators
let x=10;
x+=2;
console.log("after x+=",x);

// comparsion operators
// Triple equals (===), also referred to as "strict equality", works similarly to how double equals (==) works, with one important difference: it does not convert the types of the operands before comparing. While comparing the variables, 
//it first checks if the types differ. If they do, it returns false .
console.log("Equal (==):", 5 == '5');   // true
console.log("Strict Equal (===):", 5 === '5'); // false

// Logical Operators
console.log("Logical AND:", true && false); // false
console.log("Logical OR:", true || false);  // true

// Ternary Operator
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote:", canVote); // Yes

// Typeof Operator
console.log("Type of age:", typeof age); // "number"

// Bitwise Operators
console.log("5 & 1:", 5 & 1); // 1 (Binary AND)
console.log("5 | 1:", 5 | 1); // 5 (Binary OR)
