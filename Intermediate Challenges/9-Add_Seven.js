function addSeven(array){
    var newArray = [];
    for (var i = 0; i < array.length; i++){
        newArray.push((array[i] + 7));
    }
    console.log("The old array is: " + array);
    console.log("The new array is: " + newArray);
}

addSeven([1, 2, 3, 4, 5]);