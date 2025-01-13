let num=12;
let sum=0;
while(num>0){
    mod=num%10;
    sum+=mod;
    num=Math.floor(num / 10);
}
console.log(`sum of is ${sum}`);