function replaceChar(str, oldChar, newChar) {
    let result = "";
    for (let char of str) {
        result += char === oldChar ? newChar : char;
    }
    return result;
}
console.log(replaceChar("hello world", "o", "0")); // Output: "hell0 w0rld"
