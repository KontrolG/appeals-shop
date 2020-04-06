const http = require("http");
const url = require("url");

module.exports = () => {
  const server = http.createServer((request, response) => {
    const requestUrl = url.parse(request.url, true);
    const { method } = request;    
    const { pathname } = requestUrl;

    if (routes[method][pathname]) {
      routes[method][pathname](request, response);
    } else {
      console.log(`Sin ruta para ${pathname}`);
    }
  });

  const routes = {
    GET: {},
    POST: {},
    PUT: {},
    UPDATE: {}
  };

  const addRoute = (method, endpoint, requestListener) => routes[method][endpoint] = requestListener;
  
  return {
    listen: (port, callback) => server.listen(port, callback),
    get: (endpoint, requestListener) =>
      addRoute("GET", endpoint, requestListener),
    post: (endpoint, requestListener) =>
      addRoute("POST", endpoint, requestListener)
  };
} 