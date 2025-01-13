const ispalindrome=function(str){
    const reversed=str.split('').reverse().join('');
    return str ==reversed;
};
console.log(ispalindrome("radar"));