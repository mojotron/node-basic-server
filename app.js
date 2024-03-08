const http = require("node:http");
const path = require("node:path");
// helpers
const getContent = require("./helpers/getContent.js");
const getFileMeta = require("./helpers/getFileMeta.js");
// define server
const server = http.createServer((req, res) => {
  const filename = req.url === "/" ? "index" : req.url;
  const fileExtname = path.extname(filename) || undefined;
  getContent(filename, getFileMeta(fileExtname), res);
});

const PORT = process.env.PORT || 5000;
const HOSTNAME = "localhost";

server.listen(PORT, HOSTNAME, () => {
  console.log(`server listening on http://${HOSTNAME}:${PORT}`);
});
