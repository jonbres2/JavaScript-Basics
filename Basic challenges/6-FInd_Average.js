function findAverage(array){
    var sum = 0;
    for (i = 0; i < array.length; i++){
        sum += array[i];
    }
    var average = sum/array.length;
    console.log("The average of the array is: " + average);
}

findAverage([1,3,5,7,20]);