function maxmin(arr){
    let min=arr[0];
    let max=arr[0];
    let sum=0
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
        sum+=arr[i];
    }
    let avg=sum/arr.length;
    return {max,min,sum,avg};
}
const numbers=[99,1,4,7,6,8];
const result=maxmin(numbers);
console.log(result);