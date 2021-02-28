function printLowReturnHigh(array){
    var low = array[0];
    var high = array[0];
    for (i = 0; i < array.length; i++){
        if (array[i] < low){
            low = array[i];
        }
        else if (array[i] > high){
            high = array[i];
        }
    }
    console.log("The lowest number is: " + low);
    return high;
}

console.log(printLowReturnHigh([5, -10, 19, -4, 7]));