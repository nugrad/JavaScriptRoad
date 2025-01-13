// Creating Objects
// Object Literal Syntax:
const person={
    name:"Hamza",
    age:25,
    greet:function(){
        console.log(`Hello My name is ${this.name}`);
    }
};
person.greet();
// In the provided code, the word this refers to the current object context, which is the person object in this case. It allows the greet method to access the name and age properties of the person object when it is called.

// Using new Object():
const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2020;
console.log(car);


// Accessing Object Properties
console.log(person.name); // Output: hamza
console.log(person["age"]); // Output: 25

// Adding, Updating, and Deleting Properties
person.city = "New York"; // Add
person.age = 31; // Update
console.log(person);

delete person.city;
console.log(person);

// Iterating Over Objects
for (let i in person) {
    console.log(`${i}: ${person[i]}`);
}

console.log(Object.keys(person)); // Output: ['name', 'age', 'greet']
console.log(Object.values(person)); // Output: ['John', 30, [Function: greet]]
console.log(Object.entries(person));




