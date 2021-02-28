function incrementTheSeconds(arr){
    for (var i = 0; i < arr.length; i++){
        if (i % 2 != 0){
            arr[i] = arr[i] + 1;
        }
    }
    console.log(arr);
    return arr;
}

console.log(incrementTheSeconds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));