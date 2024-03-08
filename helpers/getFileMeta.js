const getFileMeta = (extname) => {
  switch (extname) {
    case "css":
      return { extname: ".css", contentType: "text/css" };
    default:
      return { extname: ".html", contentType: "text/html" };
  }
};

module.exports = getFileMeta;
