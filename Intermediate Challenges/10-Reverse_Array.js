function reverseArray(array){
    for (var i = 0; i < array.length; i++){
        if (i > array.length/2){
            break;
        }
        else{
            var temp = array[i];
            array[i] = array[array.length - (i + 1)];
            array[array.length - (i + 1)] = temp;
        }
    }
    console.log(array);
}

reverseArray([1, 2, 3, 4, 5, 6, 7]);