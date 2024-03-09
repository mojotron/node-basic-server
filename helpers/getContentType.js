const getContentType = (extname) => {
  switch (extname) {
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

module.exports = getContentType;
