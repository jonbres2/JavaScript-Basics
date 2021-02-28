function swapTowardsCenter(array){
    for (var i = 0; i < array.length; i+=2){
        if (i > array.length/2){;
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

swapTowardsCenter([1, 2, 3, 4, 5, 6, 7]);
swapTowardsCenter([true,42,"Ada",2,"pizza"]);
swapTowardsCenter([1,2,3,4,5,6]);