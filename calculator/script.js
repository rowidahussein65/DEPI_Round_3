//catch elements
let calculatorScreen = document.getElementById("calculatorScreen");


function pressKey(value) { //parameter
  calculatorScreen.value = calculatorScreen.value + value;
}

//clear the screen 
function clearScreen() {
  calculatorScreen.value = ""; // Value ---> property 
}
//  console.log(document.getElementById("calculatorScreen"))
//  console.dir(calculatorScreen)
