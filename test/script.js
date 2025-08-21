let count = 0;

let counter = document.getElementById("counter");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");

increaseBtn.onclick = function () {
  count++;
  updateCounter();
};

decreaseBtn.onclick = function () {
  if (count > 0) {
    count--;
  }
  updateCounter();
};

function updateCounter() {
  counter.textContent = count;

  if (count === 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "blue";
  }
}
