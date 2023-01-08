let counterValue = 0;
const buttonMinus = document.querySelector("[data-action=decrement]");
const buttonPlus = document.querySelector("[data-action=increment]");
const amount = document.querySelector("#value");

buttonPlus.addEventListener("click", () => {
  amount.textContent = counterValue += 1;
});

buttonMinus.addEventListener("click", () => {
  amount.textContent = counterValue -= 1;
});
