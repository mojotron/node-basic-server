const http = require("node:http");
const path = require("node:path");
// helpers
const getContent = require("./helpers/getContent.js");
const getContentType = require("./helpers/getContentType.js");
// define server
const server = http.createServer((req, res) => {
  const filepath = req.url === "/" ? "index" : req.url;
  const fileExtname = path.extname(filepath) || ".html";

  getContent(
    `${filepath}${fileExtname === ".html" ? fileExtname : ""}`,
    getContentType(fileExtname),
    res
  );
});

const PORT = process.env.PORT || 5000;
const HOSTNAME = "localhost";

server.listen(PORT, HOSTNAME, () => {
  console.log(`server listening on http://${HOSTNAME}:${PORT}`);
});
