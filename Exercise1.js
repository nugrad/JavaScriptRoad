// The Faulty Calculator Program
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

let operator = prompt("Enter an operator (+, -, *, /, %):");

// Generate random number to decide faulty or correct result
let randomValue = Math.random();

if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/' && operator !== '%') {
    console.log("Invalid operator entered. Please use one of +, -, *, /, %.");
} else if (randomValue < 0.1) {
    // Faulty logic (10% chance)
    console.log("Faulty Calculator Activated!");
    if (operator === '+') {
        console.log("Result (Faulty):", num1 - num2);
    } else if (operator === '-') {
        console.log("Result (Faulty):", num1 + num2);
    } else if (operator === '*') {
        console.log("Result (Faulty):", num1 / num2);
    } else if (operator === '/') {
        console.log("Result (Faulty):", num1 * num2);
    } else if (operator === '%') {
        console.log("Result (Faulty):", num1 + num2); // Example faulty logic for modulus
    }
} else {
    // Correct logic
    console.log("Standard Calculator Activated!");
    if (operator === '+') {
        console.log("Result:", num1 + num2);
    } else if (operator === '-') {
        console.log("Result:", num1 - num2);
    } else if (operator === '*') {
        console.log("Result:", num1 * num2);
    } else if (operator === '/') {
        console.log("Result:", num1 / num2);
    } else if (operator === '%') {
        console.log("Result:", num1 % num2);
    }
}
