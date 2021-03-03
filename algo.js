function d6(){
    var roll = Math.ceil(Math.random()*6);
    return roll;
}

console.log("The player rolled: " + d6());


function oracle(){
    var answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
    ];
    var index = Math.floor(Math.random()*20);
    return answers[index];
}


function getMax(arr){
    var max = arr[0];
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log("The max is: " + max);
}

function getSecondToMax(arr){
    var max = arr[0];
    var secondMax = arr[0];
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i];
        }
    }
    console.log("The second max is: " + secondMax)
}

getSecondToMax([3, 15, 20, 8, 16, 10])