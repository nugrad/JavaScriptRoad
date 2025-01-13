let str = "hello world";
let charToCount = 'l';
let count = 0;

for (let char of str) {
    if (char === charToCount) {
        count++;
    }
}

console.log(`'${charToCount}' appears ${count} times in "${str}".`);
