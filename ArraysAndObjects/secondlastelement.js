function secondlast(arr){
    let first=arr[0];
    let second=arr[0];
    for(let i=0;i<arr.length;i++){
        if(first<arr[i]){
            second=first;
            first=arr[i];
        }
        else if(second<arr[i]){
            second=arr[i];
        }
    }
    console.log("Second Largest",second);
}
const arr= [62,33,12,90,10,28];
secondlast(arr);