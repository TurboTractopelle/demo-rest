const createServer = require("./app");
const chalk = require("chalk");

const server = createServer();

server.listen(3000, () =>
  console.log(chalk`{bgGreen Listening on http://localhost:3000}`)
);
