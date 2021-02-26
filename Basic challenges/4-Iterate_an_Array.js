function iterateArray(array){
    var sum = 0; 
    for (i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log("The sum is: " + sum);
}

iterateArray([1,2,5]);
iterateArray([-5,2,5,12]);