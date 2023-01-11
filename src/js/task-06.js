// const input = document.getElementById("validation-input");
const input = document.getElementById("validation-input");
const dataValue = Number(input.dataset.length);

function inputColor() {
  input.addEventListener("blur", () => {
    if (input.value.length === dataValue) {
      input.classList.add("valid");
    } else {
      input.classList.add("invalid");
    }
  });
}
inputColor();
