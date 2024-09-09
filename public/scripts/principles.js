import dokkodo from "./dokkodo.js";
import loadImage from "./loadImage.js";
// selectors
const imageContainer = document.querySelector(".container__image");

// handlers
const createDokkodoList = () => {
  const listElement = document.querySelector(".dokkodo__list");
  dokkodo.forEach((item) => {
    const listItemElement = document.createElement("li");
    listItemElement.textContent = item;
    listElement.appendChild(listItemElement);
  });
};

const init = () => {
  loadImage("/dokkodo.png", imageContainer, "image/png", "dokkodo_ image");
  createDokkodoList();
};

init();
