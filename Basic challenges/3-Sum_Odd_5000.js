function sumOdd(){
    var sum = 0;
    for (i = 0; i <= 5000; i++){
        if (i % 2 != 0){
            sum += i;
        }
    }
    console.log("The sum is: " + sum);
}

sumOdd();