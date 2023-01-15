const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");

// function createItemEl() {
//   // for (let i = 0; i < ingredients.length; i += 1) {
//   //   const itemEl = document.createElement("li");
//   //   itemEl.classList = "item";
//   //   itemEl.textContent = ingredients[i];
//   //   listEl.appendChild(itemEl);
//   // }
//   // console.log(listEl);
// }
const createItemEl = (foods) => {
  return foods.map((food) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = food;
    return itemEl;
  });
};
const newFoodList = createItemEl(ingredients);
listEl.append(...newFoodList);
