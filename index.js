var numberOfDrumButton = document.querySelectorAll('.drum').length;
// for mouse click
for (let i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click',
        function () {
            console.log(this);
            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        });
}

// for keyboard click
document.addEventListener('keypress', function (event) {
    console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "s":
            var audio = new Audio("assets/Music/tom-1.mp3");
            audio.play();
            break;
        case "r":
            var audio = new Audio("assets/Music/tom-2.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("assets/Music/tom-3.mp3");
            audio.play();
            break;
        case "m":
            var audio = new Audio("assets/Music/tom-4.mp3");
            audio.play();
            break;
        case "p":
            var audio = new Audio("assets/Music/crash.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("assets/Music/snare.mp3");
            audio.play();
            break;
        case "n":
            var audio = new Audio("assets/Music/kick.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}


function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    // console.log(activeButton);


    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}