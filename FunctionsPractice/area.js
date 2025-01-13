function calculatearea(rad){
    if(rad<=0){
        console.log("Area must be greater than 0");
    }
    return Math.PI*rad*rad;
}
console.log(calculatearea(0));