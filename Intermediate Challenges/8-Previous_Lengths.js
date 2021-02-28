function previousLengths(array){
    for (var i = array.length - 1; i > 0; i--){
        if(i > 0){
            array[i] = array[i - 1].length;
        }
    }
    console.log(array);
}

previousLengths(["hello", "dojo", "awesome"]);