      var current = "light";

      function actionButton() {
        var btn = document.getElementById("Btn");

        if (current === "light") {
          document.body.className = "bg-dark d-flex justify-content-center align-items-center";
          btn.className = "btn btn-light";
          btn.innerHTML = "Light";
          current = "dark";
        } else {
          document.body.className = "bg-white d-flex justify-content-center align-items-center";
          btn.className = "btn btn-dark";
          btn.innerHTML = "Dark";
          current = "light";
        }
      }
