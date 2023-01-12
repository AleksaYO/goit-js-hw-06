const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("input", onTextSizeInput);

function onTextSizeInput(event) {
  text.style.fontSize = `${event.currentTarget.value}px`; // `${input.value}.px`
}
