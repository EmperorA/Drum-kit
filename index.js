// detecting button press 

var numOfDrum = document.querySelectorAll(".drum").length;
for (i = 0; i < numOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener
  ("click", function () {
   
    var buttonInnerHtML = this.innerHTML;

    makeSound(buttonInnerHtML);
    buttonAnimation(buttonInnerHtML);
  });
}

// detecting keyboard press 

document.addEventListener("keypress", function(event){

    makeSound(event.key);

buttonAnimation(event.key);

});

function makeSound(key){

    switch (key) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "a":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "s":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "d":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "j":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "k":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

        default: console.log(buttonInnerHtML);
    }
  
}

function buttonAnimation(currentKey){

var activeButton = document.querySelector("."+ currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed");
}, 100);

}
