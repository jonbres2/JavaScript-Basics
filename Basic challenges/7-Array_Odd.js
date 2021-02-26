function arrayOdd(){
    var oddArray = [];
    for(i = 1; i <= 50; i++){
        if (i % 2 != 0){
            oddArray.push(i);
        }
    }
    console.log ("An array of all of the odd numbers in the provided array is: " + oddArray);
}

arrayOdd();