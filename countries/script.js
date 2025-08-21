function showCountry(country) {
  var name = document.getElementById("countryName");
  var desc = document.getElementById("countryDesc");
  var flag = document.getElementById("countryFlag");
  var box = document.getElementById("countryBox");

  if (country === "Egypt") {
    name.innerHTML = "Egypt";
    desc.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Egypt is famous for pyramids.";
    flag.src = "img/Flag_of_Egypt.svg";
  } else if (country === "Palestine") {
    name.innerHTML = "Palestine";
    desc.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Palestine is known for its rich history.";
    flag.src = "img/Flag_of_Palestine.svg";
  } else if (country === "Emirates") {
    name.innerHTML = "United Arab Emirates";
    desc.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. UAE is a modern country in the Gulf.";
    flag.src = "img/Flag_of_the_United_Arab_Emirates.svg";
  } else if (country === "Lebanon") {
    name.innerHTML = "Lebanon";
    desc.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lebanon is famous for its culture and food.";
    flag.src = "img/Flag_of_Lebanon.svg";
  }

  box.style.display = "block";
}

function removeCountry() {
  var box = document.getElementById("countryBox");
  box.style.display = "none";
}
