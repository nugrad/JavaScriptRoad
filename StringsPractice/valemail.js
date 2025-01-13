function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
console.log(isValidEmail("test@example.com")); // Output: true
console.log(isValidEmail("invalid-email"));    // Output: false
