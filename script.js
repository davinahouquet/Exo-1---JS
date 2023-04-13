const box = document.createElement("div")
box.classList.add("box")

const square = document.querySelector("#square")
square.appendChild(box)
box.innerText = "Click Me!"

//--------------------------------------------------------------------------------
var bgColor = window.getComputedStyle(square).getPropertyValue("background-color")
var color = window.getComputedStyle(square).getPropertyValue("color")
var height= window.getComputedStyle(square).getPropertyValue("height")
var width = window.getComputedStyle(square).getPropertyValue("width")
var display = window.getComputedStyle(square).getPropertyValue("display")
var display1 = window.getComputedStyle(square).getPropertyValue("font-size")


function showReaction(type, clickedSquare){
    clickedSquare.classList.add(type)
    }

square.addEventListener("click", function(){
    alert("Classe : Square \n - Background color : " + bgColor + "\n  - Color : " + color + "\n - Height :" + height + "\n - Width : " +width+ "\n - Display : " +display+ "\n - Font-size : "+display1+" ")
})