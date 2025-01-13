// declaring and initializing arrays
let fruits=["apple","mango","banana"];
console.log(fruits);

let numbers=new Array(1,2,3);
console.log(numbers);

let emptyarr=[];
console.log(emptyarr);

// accessing array elements, we use indexing
let colors=["red","blue","green","yellow"];
console.log(colors[2]);
// modify array
colors[0]="pink";
console.log(colors);

// length property
let evennum=[2,4,6,8,10];
console.log(evennum.length);

// Array Methods
// push: add at end
// pop: removes last element
// shift:removes first element
// unshift: add element at beginning 
// concat: combine two or more arrays into a new array
// slice(start, end): Returns a portion of the array (non-destructive).
// splice(start, deleteCount, ...items): Modifies the array by removing or adding elements.
// indexOf(): Returns the first index of an element or -1 if not found.
// includes(): Checks if an element exists in the array.
// find(): Returns the first element that satisfies a condition.
// findIndex(): Returns the index of the first element that satisfies a condition.
fruits.push("cherry");
console.log(fruits);

fruits.unshift("peach");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

let arr1=[1,2];
let arr2=[3,4];
let comb=arr1.concat(arr2);
console.log(comb);

let oddnum=[1,3,5,7,9,11];
let part=oddnum.slice(0,3);
console.log(part);
console.log(oddnum);// Original array remains unchanged

oddnum.splice(2,1,99);// Remove 1 element at index 2 and insert 99
console.log(oddnum);

let num=["CG",1,2,5,"CD",70];
console.log(num.indexOf(1));
console.log(num.includes(70));

let found = num.find(item => item == "CG");
console.log(found); 

let foundIndex = num.findIndex(item => item == "CD");
console.log(foundIndex); 

// Iterating the arrays
// forEach(): Executes a function for each element.
// map(): Creates a new array by transforming each element.
// filter(): Creates a new array with elements that satisfy a condition.
// reduce(): Reduces an array to a single value.
let num2=[1,2,3,70,125,150,600,1800,1600];
num2.forEach(i=>console.log(i*2));

let double=num2.map(i=>i*2);
console.log(double);

let even=num2.filter(i=>i%2==0);
console.log(even);

let sum=num2.reduce((total,i)=>total+i,0);
console.log(sum);

// Sorting arrays
// sort(): Sorts an array as strings by default.
// reverse(): Reverses the array.

num2.sort((a,b)=>a-b);// ascending order
console.log(num2);

num2.reverse();
console.log(num2);

// converting arrays
// Converts an array to a string with a specified separator.
console.log(fruits.join(","));

