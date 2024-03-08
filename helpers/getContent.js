const fs = require("node:fs/promises");
const path = require("node:path");

const render = require("./render.js");

const getContent = async (filename, meta, response) => {
  try {
    const content = await fs.readFile(
      path.join(__dirname, "../public", `${filename}${meta.extname}`),
      {
        encoding: "utf-8",
      }
    );
    render(response, content, meta, 200);
  } catch (error) {
    const content404 = await fs.readFile(
      path.join(__dirname, "../public", `notFound.html`),
      {
        encoding: "utf-8",
      }
    );
    render(response, content404, meta, 404);
  }
};

module.exports = getContent;
