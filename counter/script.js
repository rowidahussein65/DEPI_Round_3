var header = document.getElementById("heading");

function increment() {
  header.innerHTML++;
  changeColor();
}

function decrement() {
  header.innerHTML--;
  notNegative();
  changeColor();
}

function changeColor() {
  if (header.innerHTML == 0) {
    header.style.color = "red";
  } else {
    header.style.color = "blue";
  }
}

function notNegative() {
  if (header.innerHTML < 0) {
    header.innerHTML = 0;
  }
}
