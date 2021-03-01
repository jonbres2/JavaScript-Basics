// function d6(){
//     var roll = Math.ceil(Math.random()*6);
//     return roll;
// }

// console.log("The player rolled: " + d6());



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
    ;var index = Math.floor(Math.random()*20);
    return answers[index];
}

console.log(oracle());