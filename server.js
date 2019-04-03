const express = require("express");
const helm = require("helmet");
const morg = require("morgan");
const loginRouter = require("./routes/loginRouter.js");
const registerRouter = require("./routes/registerRouter.js");
const usersRouter = require("./routes/usersRouter.js");

const server = express();
const json = express.json;

server.use(helm(), json(), morg("dev"));
server.use("/api/login", loginRouter);
server.use("/api/register", registerRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Welcome to Zach's second autho build</h1>`);
});

module.exports = server;
