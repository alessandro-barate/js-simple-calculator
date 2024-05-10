"use strict";

const numbers = document.querySelectorAll("button");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    let data = numbers[i].dataset.number;
    console.log(data);
  });
}
