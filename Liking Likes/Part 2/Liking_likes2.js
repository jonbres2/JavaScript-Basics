var likeCount = {
    first_count: 0,
    second_count: 0,
    third_count: 0,
}

function addLike1(element){
    likeCount.first_count++
    var count = element.parentElement.querySelector("h2");
    count.innerText = likeCount.first_count + " like(s)"
}

function addLike2(element){
    likeCount.second_count++
    var count = element.parentElement.querySelector("h2");
    count.innerText = likeCount.second_count + " like(s)"
}

function addLike3(element){
    likeCount.third_count++
    var count = element.parentElement.querySelector("h2");
    count.innerText = likeCount.third_count + " like(s)"
}

// This was an experimental function that I created to see if I could use a single function for every button, then have it intelligently select the proper count to update. It was able to select the H2 element of the proper box each button was clicked, but I was unable to figure out how to get it to pick the right like count to update. I ended up just creating separate functions for each button

// function addLike(element){
//     likeCount.nth_count++
//     var count = element.parentElement.querySelector("h2");
//     count.innerText = likeCount.first_count + " like(s)"
// }
