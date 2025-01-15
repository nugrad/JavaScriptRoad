function removeduplicates(arr){
    return[...new Set(arr)];

}
console.log(removeduplicates([1,4,4,5,5,3]))