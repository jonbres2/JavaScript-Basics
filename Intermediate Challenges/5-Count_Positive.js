function countPositives(array){
    var positives = 0;
    for (i = 0; i < array.length; i++){
        if (array[i] > 0){
            positives++;
        }
    }
    array[array.length - 1] = positives;
    return array;
}

console.log(countPositives([-5, -4, -3, -2, -1, 0, 20, 30, 40]));