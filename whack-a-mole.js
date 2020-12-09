"use strict";
exports.__esModule = true;
var cellRef = document.getElementsByTagName("td");
var len = cellRef.length;
var score = 0;
document.getElementById("score").innerHTML = "Score: " + score;
document.getElementById("start-btn").addEventListener("click", startGame);
function random() {
    var num = Math.floor(Math.random() * len);
    console.log(num);
    return num;
}
function display_mole() {
    var mole = document.createElement("img");
    mole.src = "./images/mole1.png";
    mole.id = "mole";
    mole.style.padding = "10px";
    cellRef[random()].append(mole);
    document.getElementById("mole").addEventListener("click", whackedMole);
}
function whackedMole() {
    playSound();
    this.remove();
    display_mole();
    counter();
}
function playSound() {
    var sound = document.createElement("audio");
    sound.src = "./whack-audio.wav";
    sound.play();
    return;
}
function counter() {
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
}
//set the timer 
function countdown() {
    var secs = 15;
    function tick() {
        var counter = document.getElementById("counter");
        secs--;
        counter.innerHTML = "0:" + (secs < 10 ? "0" : "") + String(secs);
        if (secs >= 0) {
            setTimeout(tick, 1000);
        }
        else {
            alert("Game Over \n      You have whacked " + score + " moles");
            document.location.href = "";
        }
    }
    tick();
}
//start the game 
function startGame() {
    display_mole();
    countdown();
}
