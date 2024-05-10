import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  }
};

const server = http.createServer(async (req, res) => {
  try {
    const fileExtension = path.extname(req.url) || ".html";

    const filePath = path.join(
      __dirname,
      "public",
      req.url === "/"
        ? "index.html"
        : `${req.url}${fileExtension === ".html" ? fileExtension : ""}`
    );

    const data = await fs.readFile(filePath, { encoding: "utf-8" });
    console.log(data);

    res.writeHead(200, { "Content-Type": getContentType(fileExtension) });
    res.write(data);
    res.end();
  } catch (error) {
    if (error.code === "ENOENT") {
      res.write("error");
      res.end();
    }
  }
});

const PORT = process.env.PORT;

server.listen(PORT, () =>
  console.log(`server running (http://localhost:${PORT})`)
);
