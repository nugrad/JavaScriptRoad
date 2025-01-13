function uniquearr(arr){
    return [...new Set(arr)];
}
console.log(uniquearr([5,1,1,4,2,2]));