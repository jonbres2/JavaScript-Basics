function onClickSpin(element){
    if (element.classList.contains("spin")){
        element.classList.remove("spin")
    }
    else{
        element.classList.add("spin")
    }
}   

function stopButton(){
    var cats = document.querySelectorAll("img")
    for (var i = 0; i < cats.length; i++){
        cats[i].classList.remove("spin")
    }
}