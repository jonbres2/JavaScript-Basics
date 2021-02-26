function greaterThanY(Y, array){
    var total = 0;
    for (i = 0; i < array.length; i++){
        if (array[i] > Y){
            total++;
        }
    }
    console.log("The total numbers in the array greater than Y is " + total);
}

greaterThanY(3, [1, 3, 5, 7]);
greaterThanY(5, [1, 3, 5, 7, 9, 11]);