// function d6(){
//     var roll = Math.ceil(Math.random()*6);
//     return roll;
// }

// // console.log("The player rolled: " + d6());


// function oracle(){
//     var answers = [
//     "It is certain.",
//     "It is decidedly so.",
//     "Without a doubt.",
//     "Yes – definitely.",
//     "You may rely on it.",
//     "As I see it, yes.",
//     "Most likely.",
//     "Outlook good.",
//     "Yes.",
//     "Signs point to yes.",
//     "Reply hazy, try again.",
//     "Ask again later.",
//     "Better not tell you now.",
//     "Cannot predict now.",
//     "Concentrate and ask again.",
//     "Don't count on it.",
//     "My reply is no.",
//     "My sources say no.",
//     "Outlook not so good.",
//     "Very doubtful."
//     ];
//     var index = Math.floor(Math.random()*20);
//     return answers[index];
// }


// function getMax(arr){
//     var max = arr[0];
//     for (var i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     console.log("The max is: " + max);
// }

// function getSecondToMax(arr){
//     var max = arr[0];
//     var secondMax = arr[0];
//     for (var i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] > secondMax && arr[i] < max){
//             secondMax = arr[i];
//         }
//     }
//     console.log("The second max is: " + secondMax)
// }

// function reverseArray(array){
//     var start = 0;
//     var end = array.length - 1;
//     while (start < end){
//         var temp = array[start];
//         array[start] = temp;
//         array[start] = array[end];
//         array[end] = temp;
//         start++;
//         end--;
//     }
//     console.log(array);
// }

// reverseArray([1, 2, 3, 4, 5])

function isPresent2d(arr2d, value){
    for (var i = 0; i < arr2d.length; i++){
        for (var x = 0; x < arr2d[i].length; x++){
            if (arr2d[i][x] == value){
                console.log("The value of " + value + " was found at point " + i + "," + x)
                return true;
            }
        }
    }
    console.error("Error: value not found")
    throw new Error(value + " not found")
}

var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

isPresent2d(arr2d, 0);
console.table(arr2d);