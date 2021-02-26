function even1000(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++){
        if (i % 2 === 0){
            sum += i;
        }
    }
    console.log("The sum is: " + sum);
}