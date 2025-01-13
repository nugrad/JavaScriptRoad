// Example 1 : Simple If-Else
let age = 18;
if (age >= 18) {
  console.log("you are an adult");
} else {
  console.log("you are a minor");
}

// Else if ladder
let marks = 82;
if (marks >= 92) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// Nested if
let income = 50000;
let istaxable = true;

if (income > 40000) {
  if (istaxable) {
    console.log("you need to pay tax");
  } else {
    console.log("you dont need to pay tax");
  }
} else {
  console.log("you are exempted from paying the taxes");
}

// Ternary operator
let number = 5;
let isEven = (number % 2 === 0) ? "Even" : "Odd";
console.log("The number is", isEven);

// translates to if number mod 2 ===0 then even else odd
