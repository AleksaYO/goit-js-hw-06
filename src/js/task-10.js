const box = document.getElementById("boxes");
const input = document.querySelector("input");
const createElBtn = document.querySelector("[data-create]");
const clearElBtn = document.querySelector("[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let amount = 0;
input.addEventListener(
  "input",
  (event) => (amount = event.currentTarget.value)
);

function getAmount() {
  createBoxes(amount);
}

function createBoxes(amount) {
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    let boxEl = document.createElement("div");
    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.height = `${30 + i * 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    arr.push(boxEl);
  }
  box.append(...arr);
  input.value = "";
}

function destroyBoxes() {
  box.innerHTML = "";
}

createElBtn.addEventListener("click", getAmount);
clearElBtn.addEventListener("click", destroyBoxes);
