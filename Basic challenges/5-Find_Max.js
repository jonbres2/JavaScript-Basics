function findMax(array){
    var max = 0;
    for (i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    console.log("The max value of this array is: " + max);
}

findMax([-3,3,7,5]);