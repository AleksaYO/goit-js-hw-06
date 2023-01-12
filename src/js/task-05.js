const input = document.querySelector("#name-input");
const text = document.querySelector("#name-output");
input.style.outline = "transparent";

const body = document.querySelector("body");
const title = body.querySelector("h1");

input.addEventListener("input", onTextChanger);

function onTextChanger(event) {
  if (event.currentTarget.value === "") {
    text.textContent = "Anonymous";
    title.style.color = "white";
  } else {
    text.textContent = input.value;
    title.style.color = "tomato";
    body.style.backgroundColor = "pink";
    input.style.backgroundColor = "transparent";
  }
}
