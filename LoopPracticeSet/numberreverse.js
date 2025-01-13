let num=786;
let rem=0;
while(num>0){
    mod=num%10;
    rem=(rem*10)+mod;
    num=Math.floor(num / 10);
}
console.log(`reverse is ${rem}`);