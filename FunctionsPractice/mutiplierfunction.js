//Write a function that takes a number and returns a new function that multiplies its input by that number.
function multiplier(factor){
    return function(num){
        return num*factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // Output: 10
const triple = multiplier(3);
console.log(triple(5)); // Output: 15