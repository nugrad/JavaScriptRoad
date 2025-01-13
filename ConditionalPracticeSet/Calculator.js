function Calculator(a,b,operator){
    if(operator == '+'){
        result=a+b;
        console.log(`${a}+${b} = ${result} `);
    }
    else if(operator == '-'){
        result=a-b;
        console.log(`${a}-${b} = ${result} `);
    }
    if(operator == '*'){
        result=a*b;
        console.log(`${a}*${b} = ${result} `);
    }
    if(operator == '/'){
        result=a/b;
        console.log(`${a}/${b} = ${result} `);
    }
    else{
        console.log("Invalid Operator Passed");
    }

}
Calculator(10,10,'/');