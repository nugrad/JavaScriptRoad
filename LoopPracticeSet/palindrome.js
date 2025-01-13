let str = "radar";
let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log(`${str} is ${isPalindrome ? '' : 'not '}a palindrome.`);
