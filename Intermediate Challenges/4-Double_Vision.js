function doubleVision(array){
    let doubleArray = [];
    for (i = 0; i < array.length; i++){
        doubleArray.push(array[i] * 2);
    }
    console.log("The original array was: " + array);
    console.log("The new array is: " + doubleArray);
}

doubleVision([2, 4, 6, 8, 10]);