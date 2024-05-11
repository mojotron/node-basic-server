import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const mainDirectory = "public";

const getContentType = (extension) => {
  switch (extension) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    case ".svg":
      return "image/svg+xml";
    default:
      return "text/plain";
  }
};

const getPublicSubDirectory = (extension) => {
  switch (extension) {
    case ".html":
      return "views";
    case ".css":
      return "css";
    case ".js":
      return "scripts";
    case ".svg":
      return "images";
    default:
      return "";
  }
};

const server = http.createServer(async (req, res) => {
  try {
    const fileExtension = path.extname(req.url) || ".html";
    const subDirectory = getPublicSubDirectory(fileExtension);
    const isIndex = req.url === "/";
    const isMarkup = fileExtension === ".html";

    const filePath = path.join(
      __dirname,
      mainDirectory,
      subDirectory,
      isIndex ? "index.html" : `${req.url}${isMarkup ? fileExtension : ""}`
    );

    const data = await fs.readFile(filePath, { encoding: "utf-8" });
    res.writeHead(200, { "Content-Type": getContentType(fileExtension) });
    res.write(data);
    return res.end();
  } catch (error) {
    // check if error is page not found or internal server error
    const isNotFound = error.code === "ENOENT";
    const errorMarkup = isNotFound ? "notFound.html" : "serverError.html";
    const statusCode = isNotFound ? 404 : 500;

    const data = await fs.readFile(
      path.join(__dirname, mainDirectory, "views", errorMarkup)
    );
    res.writeHead(statusCode, { "Content-Type": getContentType(".html") });
    res.write(data);
    return res.end();
  }
});

const PORT = process.env.PORT;

server.listen(PORT, () =>
  console.log(`server running (http://localhost:${PORT})`)
);
