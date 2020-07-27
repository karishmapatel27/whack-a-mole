// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!");

//create variable to store the reference
var head = document.getElementById("head");
var body = document.getElementById("body");
var shoes = document.getElementById("shoes");

//create variable to store current number of image
var headIndex = 0;
var bodyIndex = 0;
var shoesIndex = 0;
var clothingIndex = 0;

console.log(body);

//create a function that will change the clothes for the elected area when pressed right arrow key.
function rightArrow() {
  if (clothingIndex == 0) {
    var headSrc = "./images/head" + headIndex + ".png";
    if (headIndex < 5) {
      headIndex++;
    }
    head.src = headSrc;
    console.log(headSrc);
  }
  if (clothingIndex == 1) {
    var bodySrc = "./images/body" + bodyIndex + ".png";
    if (bodyIndex < 5) {
      bodyIndex++;
    }
    body.src = bodySrc;
    console.log(bodySrc);
  }
  if (clothingIndex == 2) {
    var shoesSrc = "./images/shoes" + shoesIndex + ".png";
    if (shoesIndex < 5) {
      shoesIndex++;
    }
    shoes.src = shoesSrc;
    console.log(shoesSrc);
  }
}

//create a function that will change the clothes for the elected area when pressed left arrow key.
function leftArrow() {
  if (clothingIndex == 0) {
    var headSrc = "./images/head" + headIndex + ".png";
    if (headIndex > 0) {
      headIndex--;
    }
    head.src = headSrc;
    console.log(headSrc);
  }
  if (clothingIndex == 1) {
    var bodySrc = "./images/body" + bodyIndex + ".png";
    if (bodyIndex > 0) {
      bodyIndex--;
    }
    body.src = bodySrc;
    console.log(bodySrc);
  }
  if (clothingIndex == 2) {
    var shoesSrc = "./images/shoes" + shoesIndex + ".png";
    if (shoesIndex > 0) {
      shoesIndex--;
    }
    shoes.src = shoesSrc;
    console.log(shoesSrc);
  }
}

//create a function to change the body area when pressed up arrow key
function upArrow() {
  if (clothingIndex < 2) {
    clothingIndex++;
    console.log(clothingIndex);
  }
}

//create a function to change the body area when pressed down arrow key
function downArrow() {
  if (clothingIndex > 0) {
    clothingIndex--;
    console.log(clothingIndex);
  }
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 38) {
    upArrow();
  } else if (e.keyCode == 40) {
    downArrow();
  } else if (e.keyCode == 37) {
    leftArrow();
  } else if (e.keyCode == 39) {
    rightArrow();
  }
});

function myFunction() {
  document.getElementById("button").innerHTML =
    "<p>⮂  Left & Right Arrows to Change Clothing Item.<br><br>" +
    "⮃  Up & Down Arrows to Change Body Part.</p>";
}

// ⮂ - Left & Right Arrows to Change Clothing Item < br />
// ⮃ - Up & Down Arrows to Change Body Part
