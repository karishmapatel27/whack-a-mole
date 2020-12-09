export { }
let cellRef = document.getElementsByTagName("td");
const len = cellRef.length;
let score = 0;
document.getElementById("score").innerHTML = "Score: " + score;
document.getElementById("start-btn").addEventListener("click", startGame)

function random() {
  let num = Math.floor(Math.random() * len);
  console.log(num);
  return num;
}

function display_mole() {
  const mole = document.createElement("img");
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
  const sound = document.createElement("audio");
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
  let secs = 15;
  function tick() {
    let counter = document.getElementById("counter");
    secs--;
    counter.innerHTML = "0:" + (secs < 10 ? "0" : "") + String(secs);
    if (secs >= 0) {
      setTimeout(tick, 1000);
    } else {
      alert(`Game Over 
      You have whacked ${score} moles`);
      document.location.href = "";
    }
  }
  tick();
}

//start the game 
function startGame() {
  display_mole();
  countdown()
}
