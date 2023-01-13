const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  colorName: document.querySelector(".color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.changeColorBtn.addEventListener("click", () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorName.textContent = getRandomHexColor();
});
