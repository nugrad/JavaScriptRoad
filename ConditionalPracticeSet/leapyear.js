function LeapYear(year){
    if((year % 400 ==0 )||(year%4==0) && (year%100!=0)){
        console.log("IS A Leap Year");

    }
}
LeapYear(2000);