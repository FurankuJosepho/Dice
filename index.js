// Array For The Images
let myImage = new Image(
    "1.svg",
    "2.svg",
    "3.svg",
    "4.svg",
    "5.svg",
    "6.svg"
);
let Deices = document.querySelectorAll('img'); 

// Funtion For The Rolling Dice
function rollDice() {
    let firstPlayer = prompt("Enter your name Player 1");
    let secondPlayer = prompt("Enter your name Player 2");

    document.getElementById("Player1").innerHTML = firstPlayer;
    document.getElementById("Player2").innerHTML = secondPlayer;

    let firstDiceValue = Math.floor(Math.random() *6) + 1;
    let secondDiceValue = Math.floor(Math.random() *6) + 1 ;

    const img1 = document.getElementById("firstDie");
    const img2 = document.getElementById("secondDie");

    firstDie.setAttribute("src", firstDiceValue + ".svg")
    secondDie.setAttribute("src", secondDiceValue + ".svg")

    if (firstDiceValue > secondDiceValue) {
        document.getElementById("result").innerHTML = firstPlayer + " Wins!"
    }else if (firstDiceValue < secondDiceValue) {
        document.getElementById("result").innerHTML = secondPlayer + " Wins!"
    }else if (firstDiceValue == secondDiceValue) {
        document.getElementById("result").innerHTML = "Its a Draw"
    }else{
        alert("Something is Wrong")
    }
}

function reload() {
    window.location.reload();
}