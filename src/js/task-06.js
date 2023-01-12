// const input = document.getElementById("validation-input");
const input = document.getElementById("validation-input");
input.style.outline = "transparent";
const dataValue = Number(input.dataset.length);
input.addEventListener("blur", inputColor);
function inputColor(event) {
  if (event.currentTarget.value.length === dataValue) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
