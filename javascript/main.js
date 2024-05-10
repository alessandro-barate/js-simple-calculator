"use strict";

const numbers = document.querySelectorAll(".button");
//let dataNumber = numbers.dataset.number;

numbers.addEventListener("click", function () {
  let dataNumber = numbers.dataset.number;
  console.log(dataNumber);
});

let valueDisplayed = document.getElementById("result");
