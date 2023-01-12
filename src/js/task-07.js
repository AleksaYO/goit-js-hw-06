const refs = {
  input: document.getElementById("font-size-control"),
  text: document.getElementById("text"),
};

refs.input.addEventListener("input", onTextSizeInput);

function onTextSizeInput(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`; // `${input.value}.px`
}
