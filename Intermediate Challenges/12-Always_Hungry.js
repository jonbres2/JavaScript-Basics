function alwaysHungry(array){
    var foodCount = 0;
    for (var i = 0; i < array.length; i++){
        if(array[i] == "food"){
            console.log("Yummy!");
            foodCount++;
        }
    }
    if (foodCount === 0){
        console.log("I'm hungry");
    }
}

alwaysHungry([1, 2, 3, 4, 5]);
alwaysHungry([1, 2, "food", 4, "food"]);