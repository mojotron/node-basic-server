const fs = require("node:fs/promises");
const path = require("node:path");

const render = require("./render.js");

const getContent = async (filename, contentType, response) => {
  try {
    const content = await fs.readFile(
      path.join(__dirname, "../public", `${filename}`),
      {
        encoding: "utf-8",
      }
    );
    render(response, content, contentType, 200);
  } catch (error) {
    const content404 = await fs.readFile(
      path.join(__dirname, "../public", `notFound.html`),
      {
        encoding: "utf-8",
      }
    );
    render(response, content404, "text/html", 404);
  }
};

module.exports = getContent;
