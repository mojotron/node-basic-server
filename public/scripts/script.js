const loadImage = () => {
  fetch("/samurai-1.jpg", {
    method: "GET",
    headers: { "Content-Type": "image/jpg" },
  })
    .then((response) => response.blob())
    .then((blob) => {
      const imageUrl = URL.createObjectURL(blob);
      const imageElement = document.createElement("img");
      imageElement.width = "250";
      imageElement.height = "250";
      imageElement.src = imageUrl;
      const container = document.getElementById("image-container");
      container.appendChild(imageElement);
    })
    .catch((err) => console.log(err));
};

const btn = document.getElementById("btn");

btn.addEventListener("click", () => loadImage());
