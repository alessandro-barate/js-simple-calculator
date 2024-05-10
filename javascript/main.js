"use strict";

const numbers = document.querySelector(".buttons");
//let dataNumber = numbers.dataset.number;

numbers.addEventListener("click", function () {
  let dataNumber = numbers.dataset.number;
  console.log(dataNumber);
});
