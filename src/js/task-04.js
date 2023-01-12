let counterValue = 0;
const refs = {
  buttonMinus: document.querySelector("[data-action=decrement]"),
  buttonPlus: document.querySelector("[data-action=increment]"),
  amount: document.querySelector("#value"),
};

refs.buttonPlus.addEventListener("click", onButtonPlusAmount);

refs.buttonMinus.addEventListener("click", onButtonMinusAmount);

function onButtonPlusAmount() {
  refs.amount.textContent = counterValue += 1;
}
function onButtonMinusAmount() {
  refs.amount.textContent = counterValue -= 1;
}
