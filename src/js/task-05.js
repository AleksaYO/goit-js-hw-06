const input = document.querySelector("#name-input");
const text = document.querySelector("#name-output");

const body = document.querySelector("body");
const title = body.querySelector("h1");

input.addEventListener("input", () => {
  if (input.value === "") {
    text.textContent = "Anonymous";
    title.style.color = "white";
  } else {
    text.textContent = input.value;
    title.style.color = "tomato";
    body.style.backgroundColor = "pink";
    input.style.backgroundColor = "pink";
  }
});
