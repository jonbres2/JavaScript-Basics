function printOneReturnAnother(array){
    var firstOdd = array[0];
    console.log("The second-to-last number in the array is: " + array[array.length - 2]);
    for (i = 0; i < array.length; i++){
        if (array[i] % 2 != 0){
            firstOdd = array[i];
            return firstOdd;
        }
    }
}

console.log(printOneReturnAnother([-3, 7, 21, 12, 8, 420, 69, 16]));