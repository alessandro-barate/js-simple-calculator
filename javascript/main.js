"use strict";

const result = document.getElementById("result");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let n1 = 0;
let n2 = 0;
let operator = "";

// gestione click numeri
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  number.addEventListener("click", function () {
    if (result.innerHTML === "0") {
      result.innerHTML = number.innerHTML;
    } else {
      result.innerHTML += number.innerHTML;
    }
  });
}

// gestione click operatori
for (let i = 0; i < operators.length; i++) {
  const operatorBtn = operators[i];
  operatorBtn.addEventListener("click", function () {
    operator = operatorBtn.dataset.operator;
    n1 = parseInt(result.innerHTML);
    result.innerHTML = "";
  });
}

// gestione click =
const btnResult = document.querySelector(".btn-result");
btnResult.addEventListener("click", function () {
  // set n2
  n2 = parseInt(result.innerHTML);

  console.log(n1);
  console.log(operator);
  console.log(n2);

  // decisione operazione switch
  switch (operator) {
    case "+":
      result.innerHTML = n1 + n2;
      break;

    case "-":
      result.innerHTML = n1 - n2;
      break;

    case "*":
      result.innerHTML = n1 * n2;
      break;

    case "/":
      result.innerHTML = n1 / n2;
      break;

    default:
      break;
  }
});

// function sum(num1, num2) {
//   sum = num1 + num2;
// }

// let data;
// let operator;
// if ((data = buttons[i].dataset.number)) {
//   document.getElementById("result").innerText = data;
//   return data;
// } else if ((data = buttons[i].dataset.operator)) {
//   document.getElementById("result").innerText = data;
//   return operator;
// }
// console.log(data);
// console.log(operator);
