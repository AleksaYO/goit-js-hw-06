const refs = {
  input: document.querySelector("#name-input"),
  text: document.querySelector("#name-output"),
  body: document.querySelector("body"),
  title: document.querySelector("h1"),
};
refs.input.style.outline = "transparent";

refs.input.addEventListener("input", onTextChanger);

function onTextChanger(event) {
  if (event.currentTarget.value === "") {
    refs.text.textContent = "Anonymous";
    refs.title.style.color = "white";
  } else {
    refs.text.textContent = refs.input.value;
    refs.title.style.color = "tomato";
    refs.body.style.backgroundColor = "pink";
    refs.input.style.backgroundColor = "transparent";
  }
}
