//create variable and store cell reference in it.

var cellRef = document.getElementsByTagName("td");
var len = cellRef.length;

//create a function to select random cells
function random() {
  num = Math.floor(Math.random() * len);
  console.log(num);
  return num;
}

//create a function to put mole into a cell.
function display_mole() {
  var mole = document.createElement("img");
  mole.src = "./mole1.png";
  mole.id = "mole";
  mole.style.padding = "10px";
  cellRef[random()].append(mole);
  document.getElementById("mole").addEventListener("click", whackedMole);
}

// function removeMole() {
//   var remove = document.getElementById("mole");
//   remove.parentNode.removeChild(mole);
// }

function whackedMole() {
  playSound();
  // removeMole();
  this.remove();
  display_mole();
}

function playSound() {
  var sound = document.createElement("audio");
  sound.src = "./whack-audio.wav";
  sound.play();
  return;
}

display_mole();
