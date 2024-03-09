const render = (response, content, contentType, statusCode) => {
  response.writeHead(statusCode, { "content-type": contentType });
  response.write(content);
  response.end();
};

module.exports = render;
