// string declaration
let singlequote='Hello World';
let doublequote="JS is Amazing";

console.log(singlequote);
console.log(doublequote);

// template literals
let name="Hamza";
let greeting=`Hello ${name}`;
console.log(greeting);

let multiLine = `This is a
multi-line string.`;
console.log(multiLine);

// String Properties
let str = "JavaScript";
console.log(str.length); // Output: 10
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// indexOf(substring): Returns the first index of the substring or -1 if not found.
// lastIndexOf(substring): Returns the last index of the substring.
let str2 = "Hello, JavaScript!";
console.log(str2.indexOf("JavaScript")); // Output: 7
console.log(str2.lastIndexOf("o"));      // Output: 4

// includes(substring): Checks if a substring exists.
// startsWith(substring): Checks if a string starts with a substring.
// endsWith(substring): Checks if a string ends with a substring.
let str3 = "JavaScript is fun!";
console.log(str3.includes("fun"));     // Output: true
console.log(str3.startsWith("Java"));  // Output: true
console.log(str3.endsWith("!"));       // Output: true


// slice(start, end): Extracts a portion of a string.
// substring(start, end): Similar to slice but doesn’t accept negative indices.
// substr(start, length): Extracts a substring of a specified length (deprecated but still works).

console.log(str.slice(0, 4));   // Output: Java
console.log(str.substring(4, 10)); // Output: Script
console.log(str.substr(4, 6));  // Output: Script

// split(separator): Splits a string into an array of substrings.
let str4 = "apple,banana,grape";
let fruits = str4.split(",");
console.log(fruits); // Output: ['apple', 'banana', 'grape']

// replace(oldValue, newValue): Replaces the first occurrence of a substring.
// replaceAll(oldValue, newValue): Replaces all occurrences (ES2021).
let str5 = "Hello, World!";
console.log(str5.replace("World", "JavaScript")); // Output: Hello, JavaScript!
console.log(str5.replaceAll("o", "0"));          // Output: Hell0, W0rld!

// trim(): Removes whitespace from both ends.
// trimStart(): Removes whitespace from the start.
// trimEnd(): Removes whitespace from the end.

let str6 = "   JavaScript   ";
console.log(str6.trim());       // Output: JavaScript
console.log(str6.trimStart());  // Output: "JavaScript   "
console.log(str6.trimEnd());    // Output: "   JavaScript"

// Concatenation
console.log(str5 + ", " + str6 + "!");
console.log(str5.concat(", ", str6, "!"));


// Template Literals
let name2 = "Alice";
let age = 25;
console.log(`My name is ${name}, and I am ${age} years old.`);

// Escape Characters
let str7 = "She said, \"Hello!\"\nLet's code.";
console.log(str7);





