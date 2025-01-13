let numbers=[70,125,150,200,600,1800,1];
let max=numbers[0];
for(let i=1;i<numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i];
    }
}
console.log(`max element of ${numbers} is ${max}`);