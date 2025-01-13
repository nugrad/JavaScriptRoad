let num=29;
let isprime=true;
if(num<2){
    isprime=false;
}
else{
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            isprime=false;
            break;
        }
        
    }
}
console.log(`${num} is ${isprime ? 'a Prime' : 'not a Prime'} number.`);