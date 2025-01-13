let i = 5;
let a = ++i;  // a will be 6 because i is incremented to 6 before assignment
let b = i++;  // b will be 6 because i is used first, then incremented to 7


// for loop
for(let i=0;i<=5;i++){
    console.log(`For Loop Iteration: ${i}`);
}

// while loop
let count=1;
while(count<=5){
    console.log(`While Loop Count: ${count}`);
    count++;
}

// 3. Do-While Loop
let num = 1;
do {
    console.log(`Do-While Loop Number: ${num}`);
    num++;
} while (num <= 5);

// for of loop
let colors=['red','blue','yellow'];
for(const color of colors){
    console.log(`Color: ${color}`);
}

// 5. For...In Loop
let car = { make: "Tesla", model: "Model 3", year: 2021 };
for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}

// 6. Break and Continue
for (let i = 1; i <= 10; i++) {
    if (i === 7) break; // Stop at 7
    if (i === 3) continue; // Skip 3
    console.log(`Value: ${i}`);
}



