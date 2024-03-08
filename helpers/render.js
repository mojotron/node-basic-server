const render = (response, content, meta, statusCode) => {
  response.writeHead(statusCode, { "content-type": meta.contentType });
  response.write(content);
  response.end();
};

module.exports = render;
