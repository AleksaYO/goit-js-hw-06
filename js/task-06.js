const refs = {
  input: document.getElementById("validation-input"),
};

const dataValue = Number(refs.input.dataset.length);
refs.input.style.outline = "transparent";
refs.input.addEventListener("input", inputColor);
function inputColor(event) {
  if (event.currentTarget.value.length === dataValue) {
    refs.input.classList.add("valid");
    refs.input.classList.remove("invalid");
  } else {
    refs.input.classList.add("invalid");
  }
}
/*
'blur' показался не очень практичным для данного метода)
*/
