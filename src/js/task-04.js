let counterValue = 0;
const buttonMinus = document.querySelector("[data-action=decrement]");
const buttonPlus = document.querySelector("[data-action=increment]");
const amount = document.querySelector("#value");

buttonPlus.addEventListener("click", onButtonPlusAmount);

buttonMinus.addEventListener("click", onButtonMinusAmount);

function onButtonPlusAmount() {
  amount.textContent = counterValue += 1;
}
function onButtonMinusAmount() {
  amount.textContent = counterValue -= 1;
}
