"use strict";

let numbers = document.querySelector(".buttons");
//let dataNumber = numbers.dataset.number;

numbers.addEventListener("click", function () {
  numbers = numbers.dataset.number;
  console.log(numbers);
});
