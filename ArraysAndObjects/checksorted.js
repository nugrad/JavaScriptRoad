function checksort(arr){
    for(let i=1;i<arr.length;i++){
        // arr[i] < arr[i - 1] checks if the current element of an array arr is less than the previous element. 
        if(arr[i]<arr[i-1]){
            return false;

        }
    }
    return true;
}
console.log(checksort([1,2,3,4]));