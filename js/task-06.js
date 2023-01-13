const refs = {
  input: document.getElementById("validation-input"),
};

const dataValue = Number(refs.input.dataset.length);
refs.input.style.outline = "transparent";
refs.input.addEventListener("blur", inputColor);
function inputColor(event) {
  if (event.currentTarget.value.length === dataValue) {
    refs.input.classList.add("valid");
  } else {
    refs.input.classList.add("invalid");
  }
}
