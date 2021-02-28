function outlookNegative(array){
    var newArray = [];
    for (var i = 0; i < array.length; i++){
        if (array[i] > 0){
            newArray.push(array[i] * -1);
        }
        else{
            newArray.push(array[i]);
        }
    }
    console.log("The old array is: " + array);
    console.log("The new array is: " + newArray);
}

outlookNegative([1,-3,5]);