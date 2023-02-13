// For Dice 1
function playAgain(){
let randomNumber1 = Math.floor((Math.random() * 6) + 1);

let randomImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);



//For Dice 2

let randomNumber2 = Math.floor((Math.random() * 6) + 1);

let ramdomImage2 = "images/dice" + randomNumber2 + ".png";

let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", ramdomImage2);



//For Status Win or Loss or Draw

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🏆 Player 1 Wins."
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="🏆 Player 2 Wins."
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML="Draw!"
}
}



//document.querySelector("button").addEventListener("click", playAgain);