import quotes from "./quotes.js";
// element selectors
const imageContainer = document.querySelector(".container__image");
const quoteContainer = document.querySelector(".container__quote__text");
// handlers
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * 12) + 1;
};

const loadImage = (imagePath, container, className) => {
  fetch(imagePath, {
    method: "GET",
    headers: { "Content-Type": "image/jpg" },
  })
    .then((response) => response.blob())
    .then((blob) => {
      const imageUrl = URL.createObjectURL(blob);
      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      container.appendChild(imageElement);
    })
    .catch((err) => console.log(err));
};

// init
const init = () => {
  loadImage(`/samurai-${getRandomNumber(12)}.jpg`, imageContainer);
  const quote = quotes[getRandomNumber(quotes.length)];
  quoteContainer.textContent = quote;
};

init();
