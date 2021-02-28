function scaleTheArray(array, number){
    for (var i = 0; i < array.length; i++){
        array[i] = array[i] * number;
    }
    return array;
}

console.log(scaleTheArray([1, 2, 3], 3));