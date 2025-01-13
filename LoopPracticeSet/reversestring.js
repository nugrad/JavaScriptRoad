let str="hello";
let reverse='';
for(i=str.length-1;i>=0;i--){
    reverse+=str[i];
}

console.log(`reverse of ${str} is ${reverse}`);