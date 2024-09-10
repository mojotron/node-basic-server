import loadImage from "./loadImage.js";
const imageContainer = document.querySelector(".about__bio__portrait");

const init = () => {
  loadImage("/miyamoto-musashi.png", imageContainer, "image/png", "");
};

init();
