//-------------------------------------------------------
const box = document.createElement("div")
box.classList.add("box")

const square = document.querySelector("#square")
square.appendChild(box)
box.innerText = "Click Me!"


function showReaction(type, clickedSquare){
    clickedSquare.classList.add(type)
    }

square.addEventListener("click", function(){
    alert("Clicked!")
})