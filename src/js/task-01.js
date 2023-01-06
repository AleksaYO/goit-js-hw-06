const itemEl = document.querySelectorAll(".item");

function numberOfCutegories() {
  return `Number of categories: ${itemEl.length}`;
}
console.log(numberOfCutegories());

function cutegorysAndElements() {
  for (let i = 0; i < itemEl.length; i += 1) {
    const title = itemEl[i].firstElementChild.textContent;
    console.log(`Cutegory: ${title}`);
    const itemLength = itemEl[i].lastElementChild.children.length;
    console.log(`Elements: ${itemLength}`);
  }
}
cutegorysAndElements();

// function cutegorysName() {
//   for (let i = 0; i < itemNameEl.length; i += 1) {
//     console.log(`Cutegory: ${itemNameEl[i].textContent}`);
//   }
// }
// cutegorysName();

//   for (let x = 0; x < itemEl.length; x += 1) {
//     const itemLength = itemEl[x].lastElementChild.children.length;
//     console.log(itemLength);
//   }
