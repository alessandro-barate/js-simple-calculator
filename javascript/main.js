"use strict";

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let data;
    if ((data = buttons[i].dataset.number)) {
      document.getElementById("result").innerText = data;
    } else if ((data = buttons[i].dataset.operator)) {
      document.getElementById("result").innerText = data;
    }
  });
}
