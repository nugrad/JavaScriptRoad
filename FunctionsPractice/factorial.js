function factorial(num){
    let fac=1;
    for (let i=1;i<=num;i++){
        fac*=i;
    }
    return fac;

}
let result=factorial(5);
console.log(result);