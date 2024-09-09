import quotes from "./quotes.js";
import loadImage from "./loadImage.js";
// element selectors
const imageContainer = document.querySelector(".container__image");
const quoteContainer = document.querySelector(".container__quote__text");
// handlers
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

// init
const init = () => {
  loadImage(
    `/samurai-${getRandomNumber(15)}.jpg`,
    imageContainer,
    "image/jpg",
    ""
  );
  const quote = quotes[getRandomNumber(quotes.length)];
  quoteContainer.textContent = quote;
};

init();
