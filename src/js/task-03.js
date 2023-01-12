const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const listEl = document.querySelector(".gallery");

for (let i = 0; i < images.length; i += 1) {
  const itemEl = document.createElement("li");

  listEl.appendChild(itemEl);
  const imageEl = document.createElement("img");
  itemEl.appendChild(imageEl);
  imageEl.src = `${images[i].url}`;
  imageEl.alt = `${images[i].alt}`;

  // Styles
  itemEl.classList = "item";
  itemEl.style.width = "324px";
  itemEl.style.display = "block";
  itemEl.style.borderRadius = "20px";
  itemEl.style.listStyle = "none";
  itemEl.style.marginBottom = "15px";
  itemEl.style.border = "2px solid red";
  imageEl.width = 320;
  imageEl.style.display = "block";
  imageEl.style.borderRadius = "18px";
}
console.log(listEl);
