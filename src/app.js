const restify = require("restify");
const addRoutes = require("./controllers/routes");

function createServer() {
  const server = restify.createServer();
  server.use(restify.plugins.queryParser({ mapParams: false }));
  server.use(restify.plugins.jsonBodyParser());

  addRoutes(server);
  return server;
}

module.exports = createServer;
