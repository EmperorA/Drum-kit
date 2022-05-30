var numOfDrum = document.querySelectorAll(".drum").length;
for (i=0; i<numOfDrum; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
function handleClick(){
    alert("I got clicked!");
}
}