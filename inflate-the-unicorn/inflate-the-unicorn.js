  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Squirt The Clown!")

function makeItClick() {
  console.log('Make it click!')
}

let states = {
  clown1: 0,
  clown2: 0,
  clown3: 0
}

function blowUpClown(e) {
  let clown = e.id
  if(states[clown] == 3) {
    alert(clown + "'s desires are fufilled!")
  } else {
    states[clown]++
    e.src=`./images/clown-${states[clown]}.png`
  }
}