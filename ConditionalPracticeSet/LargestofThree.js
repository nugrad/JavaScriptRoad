function largestOfThree(a,b,c){
    if(a>b && a>c){
        console.log(`${a} is Largest`);
    }
    else if(b>a && b>c){
        console.log(`${b} is Largest`);
    }
    else if(c>a && c>b){
        console.log(`${c} is Largest`);
    }
    else{
        console.log(`${a},${b},${c} are equal`);
    }

}
largestOfThree(6,5,7);