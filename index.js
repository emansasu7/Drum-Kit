// first e.g
// document.querySelector("button").addEventListener("click",handleClick);
//
//
// function handleClick(){
//   alert("I got Clicked");
// }

// challenge #2: select all buttons and run function
//we can do this way but it would be tedious because we'll have to write it
//out 7 buttoms becaus ethy're 7 buttons. nut we can use a loop to acheieve this.
// document.querySelectorAll("button")[0,1,2 ....].addEventListener("click", function () {
//   alert("I got Clicked");
// })
// we use .drum to target specific set of buttons otherwise it would've added
//to all buttons


//to play a sound

// detecting button press
for (var x = 0; x < document.querySelectorAll(".drum").length; x++) {
  document.querySelectorAll(".drum")[x].addEventListener("click", function() {
    var buttonInnerHTMl = this.innerHTML;
    makeSosund(buttonInnerHTMl);
    buttonAnimation(buttonInnerHTMl);
  });
}

// detecting keyboard pressed
document.addEventListener("keydown", function(event) {
  makeSosund(event.key);
  buttonAnimation(event.key);

});


function makeSosund(key) {
  switch (key) {
    case "w":
      var t1 = new Audio("sounds/tom-1.mp3");
      t1.play();
      break;

    case "a":
      var t2 = new Audio("sounds/tom-2.mp3");
      t2.play();
      break;

    case "s":
      var t3 = new Audio("sounds/tom-3.mp3");
      t3.play();
      break;

    case "d":
      var t4 = new Audio("sounds/tom-4.mp3");
      t4.play();
      break;

    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonInnerHTMl);

  }
}

function buttonAnimation(currentKey) {
  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function() {
    activeBtn.classList.remove("pressed");
  }, 100);
}
