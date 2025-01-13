function numberToWord(num) {
    const ones = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

    if (num >= 0 && num <= 9) {
        return ones[num];
    } else if (num >= 10 && num <= 19) {
        return teens[num - 10];
    } else if (num >= 20 && num <= 99) {
        const tenPlace = Math.floor(num / 10);
        const onePlace = num % 10;
        return onePlace === 0 ? tens[tenPlace] : `${tens[tenPlace]} ${ones[onePlace]}`;
    } else {
        return "Number out of range";
    }
}

console.log(numberToWord(3));  // Output: Three
console.log(numberToWord(15)); // Output: Fifteen
console.log(numberToWord(42)); // Output: Forty Two
console.log(numberToWord(80)); // Output: Eighty
console.log(numberToWord(100)); // Output: Number out of range
