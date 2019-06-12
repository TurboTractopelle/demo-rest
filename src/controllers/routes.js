const chalk = require("chalk");

function addRoutes(server) {
  console.log(chalk`{cyan Adding routes}`);
  server.get("/", (req, res, next) => {
    res.send({ chapi: "chapo" });
  });

  server.get("/a", (req, res, next) => {
    res.send(req.query.stuff);
    console.log(req.query.stuff);
  });
}

module.exports = addRoutes;
