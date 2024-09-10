import http from "node:http";
import url from "node:url";
import path from "node:path";
import fs from "node:fs/promises";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT;
const hostname = "127.0.0.1";

const getPublicSubDir = (extname) => {
  switch (extname) {
    case ".html":
      return "views";
    case ".css":
      return "styles";
    case ".js":
      return "scripts";
    case ".jpg":
    case ".png":
    case ".svg":
      return "images";
  }
};

const getContentType = (extname) => {
  switch (extname) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    case ".jpg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".svg":
      return "image/svg+xml";
  }
};

const loadFile = async (subDir, urlPath) => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "public", subDir, urlPath),
      {
        encoding: subDir === "images" ? null : "utf-8",
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const server = http.createServer(async (req, res) => {
  try {
    const urlPath = req.url === "/" ? "index.html" : req.url;
    const extname = path.extname(urlPath) || ".html";
    const publicSubDir = getPublicSubDir(extname);

    const data = await loadFile(publicSubDir, urlPath);
    res.writeHead(200, { "Content-Type": getContentType(extname) });
    res.write(data);
  } catch (error) {
    const isPageNotFound = error.code === "ENOENT";
    const filePath = isPageNotFound ? "notFound.html" : "serverError.html";
    const data = await loadFile("views", filePath);
    res.writeHead(isPageNotFound ? 404 : 500, { "Content-Type": "text/html" });
    res.write(data);
  } finally {
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`server running on http://${hostname}:${port}`);
});
