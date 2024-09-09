const loadImage = (imagePath, container, contentType, className) => {
  fetch(imagePath, {
    method: "GET",
    headers: { "Content-Type": contentType },
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

export default loadImage;
