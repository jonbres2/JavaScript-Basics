function biggieSize(array){
    for (i = 0; i < array.length; i++){
        if (array[i] > 0){
            array[i] = "big";
        }
    }
    console.log("The new array is: " + array);
}

biggieSize([-1,3,5,-5]);