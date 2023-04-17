
var NumberofButtons = document.querySelectorAll(".drum").length;

for(i=0;i<NumberofButtons;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",makesound);

}



function makesound(){


 var buttonInnerHTML = event.key;
 Buttonanime(event.key);

 switch(buttonInnerHTML){

   case("w"):
   var tom1 = new Audio("sounds/tom-1.mp3");
   tom1.play();
   break;

   case("a"):
   var tom2 = new Audio("sounds/tom-2.mp3");
   tom2.play();
   break;

   case("s"):
   var tom3 = new Audio("sounds/tom-3.mp3");
   tom3.play();
   break;

   case("d"):
   var tom4 = new Audio("sounds/tom-4.mp3");
   tom4.play();
   break;

   case("j"):
   var crash = new Audio("sounds/crash.mp3");
   crash.play();
   break;

   case("k"):
   var snare = new Audio("sounds/snare.mp3");
   snare.play();
   break;

   case("l"):
   var kick = new Audio("sounds/kick-bass.mp3");
   kick.play();
   break;


 }
}

document.addEventListener("keypress",makesound);


function Buttonanime(keypressed){

var activebutton = document.querySelector("." + keypressed);
activebutton.classList.add("pressed");

setTimeout(function(){
  activebutton.classList.remove("pressed");
},100);

}
