let inputFeld = document.getElementById("inputFeld");
let output = document.getElementById("output");

let array = [];
let text = "";

function button() {
  if (inputFeld.value == 0) {
    output.innerHTML = "ERROR";
    output.style.color = "red";
  }

  if (inputFeld.value % 2 === 0) {
    for (let a = 0; a < inputFeld.value; a++) {
      array.push("o");
      output.innerHTML = `L${array.join("")}p`;
      output.style.color = "black";
    }
    array = [""];
  } else {
    for (let a = 0; a < inputFeld.value; a++) {
      if (a % 2 === 0) {
        array.push("o");
        output.innerHTML = `L${array.join("")}p`;
        output.style.color = "black";
      } else {
        array.push("0");
        output.innerHTML = `L${array.join("")}p`;
        output.style.color = "black";
      }
    }
  }
  array = [""];
}
