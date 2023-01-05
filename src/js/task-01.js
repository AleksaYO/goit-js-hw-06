// const listEl = document.querySelector("#categories");
const itemEl = document.querySelectorAll(".item");
// console.log("itemEl", itemEl);

const itemNameEl = document.querySelectorAll(" h2");
// console.log("itemNameEl", itemNameEl);

function numberOfCutegories() {
  return `Number of categories: ${itemEl.length}`;
}
console.log(numberOfCutegories());

function cutegorysName() {
  for (let i = 0; i < itemNameEl.length; i += 1) {
    console.log(`Cutegory: ${itemNameEl[i].textContent}`);
  }
}
