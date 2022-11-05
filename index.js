
//DETECTING BUTTON PRESS via mouse click

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml); //OVERIDED FUNCTION    
        makeTransparent(buttonInnerHtml);
    });
}

//DETECTING KEYBOARD PRESS

document.addEventListener("keydown", function(event) {  
    //Here, function will wait for the event to occur and 
    // gather details of the event. Then we can manipulate this info to extract what we need. 
    // Like here we needed to know what key was pressed. Hence "event.key" below. 
    makeSound(event.key); //OVERIDED FUNCTION
    makeTransparent(event.key);
})


// sound function
function makeSound(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();

            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default: console.log(buttonInnerHtml);
    }
}


//Flash function

function makeTransparent(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");    
    }, 100)
}