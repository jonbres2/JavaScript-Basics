function evensAndOdds(array){
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 != 0){
            if (i + 3 > array.length){
                break;
            }
            else if (array[i + 1] % 2 != 0 && array[i + 2] % 2 != 0){
                console.log("That's odd!");
            }
        }
        else if (array[i] % 2 === 0){
            if (i + 3 > array.length){
                break;
            }
            else if (array [i + 1] % 2 === 0 && array[i + 2] % 2 === 0){
                console.log("Even more so!");
            }
        }
    }
}

evensAndOdds([1, 1, 1, 2, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8]);